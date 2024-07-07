import styles from "./LoadingBlock.module.scss";

function LoadingBlock() {
  return <div className={styles.loading}>
          <div/>
          <div/>
          <div/>
        </div>

  //return <div class="spinner-border" role="status">
  //   <span class="visually-hidden">Loading...</span>
  // </div>
}

export default LoadingBlock;