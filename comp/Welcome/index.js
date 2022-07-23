import styles from "./Styles.module.scss";

const Page = () => {
  return (
    <main>
      <div className={styles.welcome}>
        <h1>Welcome to my skechbook</h1>
        <p>
          I have always kept a sketchbook (I mean in paper), so it made sense to
          have one as a web developer too. A place to play with ideas, to keep
          code and style references, to try out things I see online.
        </p>
      </div>
    </main>
  );
};

export default Page;
