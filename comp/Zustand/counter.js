import create from "zustand";
import styles from "./Page.module.css";

const useCounter = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));

const Counter = () => (
  <div className={styles.counter}>
    <Display />
    <Controls />
  </div>
);

const Display = () => {
  const count = useCounter((st) => st.count);
  return <h2>Counter : {count}</h2>;
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

export default Counter;
