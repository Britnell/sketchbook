import { useState } from "react";
import create from "zustand";
import styles from "./Page.module.css";

const AddItem = () => {
  const create = useShopping((st) => st.create);
  const [name, setName] = useState("");
  const add = (ev) => {
    ev.preventDefault();
    create(name);
    setName("");
  };

  return (
    <div>
      <form onSubmit={add}>
        <label>
          Add Item :
          <input
            type="text"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
          />
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

const Shopping = () => {
  const shoppingList = useShopping((st) => st.list);
  const increase = useShopping((st) => st.increase);
  const clear = useShopping((st) => st.clear);

  return (
    <div>
      <h2>Shopping List</h2>
      <ul>
        {Object.entries(shoppingList).map((item, i) => (
          <li key={i} className={styles.itemrow}>
            {console.log(item)}
            <div>
              {item[0]} : {item[1]}
            </div>
            <button onClick={() => increase(item[0])}>add</button>
            <button onClick={() => clear(item[0])}>clear</button>
          </li>
        ))}
      </ul>
      <AddItem />
    </div>
  );
};

const useShopping = create((set) => ({
  list: {
    apple: 1,
    pairs: 3,
  },
  increase: (name) =>
    set((st) => ({
      list: { ...st.list, [name]: st.list[name] + 1 },
    })),
  clear: (name) =>
    set((st) => ({
      list: {
        ...st.list,
        [name]: 0,
      },
    })),
  create: (name) =>
    set((st) => ({
      list: { ...st.list, [name]: 1 },
    })),
}));

export default Shopping;
