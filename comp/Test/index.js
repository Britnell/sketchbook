import Newsletter from "./newsletter";
import Counter from "./counter";

const Page = () => {
  return (
    <main>
      <h1>Test</h1>
      <div>
        <p>Lorem Ipsum dimsum pick some</p>
        <a href="/login">Login</a>
      </div>
      <Newsletter />
      <Counter />
    </main>
  );
};
export default Page;
