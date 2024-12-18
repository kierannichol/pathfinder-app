import {Link, useNavigate} from "react-router-dom";
import {useActiveUser} from "@/app/auth.tsx";
import styles from "./Navigation.module.css";
import {BiLogOut} from "react-icons/bi";

export default function Navigation() {
  const navigate = useNavigate();
  const activeUser = useActiveUser();

  return (
      <ul className={styles.nav}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li className={styles.spacer}></li>
        <li>
        {activeUser && <a
            className={styles.logoutButton}
            style={{ color: "white" }}
            onClick={() => {
              activeUser?.logout().then(() => navigate('/login'));
            }}><BiLogOut /> Logout</a>}
        </li>
      </ul>
  );
}