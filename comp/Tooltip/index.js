import styles from "./Styles.module.scss";

const Page = () => {
  return (
    <main>
      <div className={styles.example}>
        <h3>
          CSS only tooltip, including keyboard focus. <br /> same principle as{" "}
          <a href="/navbar">navbar</a>{" "}
        </h3>
        <div className={styles.container}>
          <button>Submit</button>
          <div className={styles.tip}>
            <p>Make sure your details are correct before you submit</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
