import styles from "./Page.module.css";
import Counter from "./counter";
import Shopping from "./Shopping";

const Page = () => {
  return (
    <main>
      <h1>
        <a href="https://www.npmjs.com/package/zustand">Zustand</a>
        &nbsp; demo
      </h1>
      <p>
        Create a store that is state-machine like, with all the functions to
        manipulate it included. Individual parts of this can be accessed
        individually, and only componnets that use it will re-render when it
        changes. E.g. counter below
      </p>
      <Counter />
      <Shopping />
      <p>
        Actually something dynamic like a shopping list with a dynamic list of
        items is not the best example for this. The list counts as one zustand
        item and everything that uses the list re-renders anyway
      </p>
    </main>
  );
};

export default Page;
