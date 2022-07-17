import styles from "./Styles.module.scss";

const Page = () => {
  return (
    <>
      <p>As per Lea Verou's "Even MORE css secrets"</p>
      <p>A CSS only navbar is made keyboard friendly (also with CSS only) </p>
      <p>By the power of focus within</p>
      <header className={styles.header}>
        <nav>
          <div>
            <a href="#">Home</a>
          </div>
          <div className={styles.dropdown}>
            <a href="#">Products</a>
            <div className={styles.more}>
              <ul>
                <li>
                  <a href="#">A</a>
                </li>
                <li>
                  <a href="#">B</a>
                </li>
                <li>
                  <a href="#">C</a>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.dropdown}>
            <a href="#">Page</a>
            <div className={styles.more}>
              <ul>
                <li>
                  <a href="#">X</a>
                </li>
                <li>
                  <a href="#">Y</a>
                </li>
                <li>
                  <a href="#">Z</a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <a href="#">account</a>
          </div>
        </nav>
      </header>
      <main>
        <p>Lorem Ipsum Page Some </p>
        <p>Lorem Ipsum Page Some </p>
        <p>Lorem Ipsum Page Some </p>
        <p>Lorem Ipsum Page Some </p>
        <p>Lorem Ipsum Page Some </p>
      </main>
    </>
  );
};

export default Page;
