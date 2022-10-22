import styles from "./Page.module.css";
import useCounter from "./counter";

const Display = () => {
  const count = useCounter((st) => st.count);
  return <h2>Counter : {count}</h2>;
};

const Counter = () => (
  <div className={styles.counter}>
    <Display />
    <Controls />
  </div>
);
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
    </main>
  );
};

const Controls = () => {
  const increment = useCounter((st) => st.increment);
  const decrement = useCounter((st) => st.decrement);

  return (
    <>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  );
};

const Shopping = () => {
  return (
    <div>
      <h2>Shopping List</h2>
      <div>asdasd</div>
    </div>
  );
};
export default Page;
