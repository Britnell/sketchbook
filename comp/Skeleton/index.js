import styles from "./Styles.module.scss";

const Card = ({ title, paragraph, subtitle, skeleton = false }) => {
  return (
    <div className={`${styles.card} ${skeleton ? styles.skeleton : " "}`}>
      <h3 className={styles.title}>{title}</h3>
      <h4 className={styles.subtitle}>{subtitle}</h4>
      <p className={styles.paragraph}>{paragraph}</p>
    </div>
  );
};

const Page = () => {
  return (
    <main>
      <div>
        <h1>Easy Skeleton Fallback component with CSS</h1>
      </div>
      <p>Card Component</p>
      <Card
        title="Blog post"
        subtitle="a post from the blog"
        paragraph="Lorem Ipsum dimsum appsum dolor si ahmet .."
      />
      <p>reduce lineheight and animate background gradient </p>
      <Card skeleton />
    </main>
  );
};

export default Page;
