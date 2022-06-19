import styles from "./Transition.module.scss";

const delayLink = (ev) => {
  ev.preventDefault();
  ev.target.classList.add(styles.clicked);
  console.log(ev);
  setTimeout(() => {
    window.location.href = ev.target.href;
  }, 600);
};
const Transition = () => {
  return (
    <div>
      <header className={styles.header}>
        <h1>
          <div className={styles.blob}>&nbsp;</div>Transition
        </h1>
        <a href="/transition" className={styles.tag} onClick={delayLink}>
          Login
        </a>
      </header>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <h3>Sub heading</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <div>
        <a href="/transition" className={styles.tag} onClick={delayLink}>
          Buy Now
        </a>
      </div>
    </div>
  );
};

export default Transition;
