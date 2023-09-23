import {AuthErrorCodes} from "@firebase/auth";
import {FirebaseError} from "firebase/app";
import {FormEvent, ReactNode, useEffect, useMemo, useState} from "react";
import {Button} from "react-bootstrap";
import * as Icons from "react-bootstrap-icons";
import {useNavigate} from "react-router-dom";
import {firebaseLoginWithEmail, firebaseLoginWithGoogle, firebaseResetPassword, firebaseUser} from "../../app/firebase.ts";
import styles from "./Login.module.scss";

export default function Login() {
  const navigate = useNavigate();
  const [emailAddressValidationError, setEmailAddressValidationError] = useState<ReactNode>();
  const [passwordValidationError, setPasswordValidationError] = useState<ReactNode>();
  const [emailErrorMessage, setEmailErrorMessage] = useState<ReactNode>();
  const [thirdPartyErrorMessage, setThirdPartyErrorMessage] = useState<ReactNode>();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  useEffect(() => {
    if (firebaseUser()) {
      navigate("/", {replace: true});
    }
  }, [navigate]);

  async function handleLogin(loginFn: Promise<void>, errorFn: (message: ReactNode) => void) {
    try {
      setEmailErrorMessage(undefined);
      setThirdPartyErrorMessage(undefined);
      setEmailAddressValidationError(undefined);
      setPasswordValidationError(undefined);
      await loginFn;
    } catch (e) {
      if (e instanceof FirebaseError) {
        switch (e.code) {
          case AuthErrorCodes.INVALID_AUTH:
          case AuthErrorCodes.INVALID_PASSWORD:
            errorFn(<InvalidCredentialsError email={email} />);
            break;
          default:
            errorFn(<ErrorMessage error={e}/>);
            break;
        }
      }
      else if (e instanceof Error) {
        errorFn(<ErrorMessage error={e}/>);
      } else {
        errorFn(<ErrorMessage error={e?.toString()} />);
      }
    }
    if (firebaseUser()) {
      navigate("/");
    }
  }

  async function handleEmailPasswordSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setEmailErrorMessage(undefined);
    setThirdPartyErrorMessage(undefined);
    setEmailAddressValidationError(undefined);
    setPasswordValidationError(undefined);

    let valid = true;
    if (email === '') {
      valid = false;
      setEmailAddressValidationError(<ErrorMessage error="Email address required"/>);
    }
    if (password === '') {
      valid = false;
      setPasswordValidationError(<ErrorMessage error="Password required"/>);
    }

    if (!valid) {
      return;
    }

    await handleLogin(firebaseLoginWithEmail(email, password), setEmailErrorMessage);
  }

  // useEffect(() => {
  //   firebaseLogin();
  // }, [])

  return <main className={styles.root}>
    <legend>Login</legend>
    <div className={styles.content}>
      <p>If an account does not already exist for the given email address, a new one will be created with the password you used.</p>
      <form className="w-100" onSubmit={handleEmailPasswordSubmit}>
        {emailErrorMessage && <div className={styles.error}>{emailErrorMessage}</div>}
        <label>Email</label>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)}/>
        {emailAddressValidationError && <div className={styles.error}>{emailAddressValidationError}</div>}
        <label>Password</label>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
        {passwordValidationError && <div className={styles.error}>{passwordValidationError}</div>}

        <Button
            type="submit"
            className={`${styles.button} ${styles.emailSubmit}`}
            size="lg">
          <Icons.Lock className={styles.signinIcon}/>
          Login
        </Button>
      </form>

      <div className={styles.line}>
        <span>OR</span>
      </div>

      {thirdPartyErrorMessage && <div className={styles.error}>{thirdPartyErrorMessage}</div>}

      <Button
          className={styles.button}
          size="lg"
          onClick={() => handleLogin(firebaseLoginWithGoogle(), setThirdPartyErrorMessage)}>
        <Icons.Google className={styles.signinIcon}/>
        Continue with Google
      </Button>
    </div>
  </main>
}

interface ErrorWithEmailProps {
  email: string;
}

function InvalidCredentialsError({ email }: ErrorWithEmailProps) {
  return <div className={styles.error}>
    Invalid username or password. Click here to reset your password: <ResetPasswordLink email={email} />
  </div>
}

interface GenericErrorProps {
  error?: Error|string;
}

function ErrorMessage({ error }: GenericErrorProps) {
  const errorMessage = useMemo(() => {
    if (error instanceof Error) {
      return error.message;
    }
    return error;
  }, [error]);

  if (error === undefined) {
    return <></>;
  }

  return <>{errorMessage && <div className={styles.error}>
    {errorMessage}
  </div>}</>
}

interface ResetPasswordLinkProps {
  email: string;
  onSent?: () => void;
}

function ResetPasswordLink({ email, onSent }: ResetPasswordLinkProps) {
  const [ buttonText, setButtonText ] = useState('Reset Password');

  async function handleClick() {
    setButtonText("Sending...");
    await firebaseResetPassword(email);
    setButtonText("Sent!");
    onSent?.();
  }

  return <Button variant="danger" className={styles.button} onClick={handleClick}>{buttonText}</Button>
}