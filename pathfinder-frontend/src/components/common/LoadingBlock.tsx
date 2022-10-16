import {Spinner} from "react-bootstrap";

function LoadingBlock() {
  return (
      <div className={"h-100 align-items-center"}>
        <Spinner animation={"border"}>
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>);
}

export default LoadingBlock;