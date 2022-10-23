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

const ShoppingItem = ({ name, q }) => {
  const increase = useShopping((st) => st.increase);
  const clear = useShopping((st) => st.clear);

  return (
    <li className={styles.itemrow}>
      <div>
        {name} : {q}
      </div>
      <button onClick={() => increase(name)}>add</button>
      <button onClick={() => clear(name)}>clear</button>
    </li>
  );
};

const Shopping = () => {
  const shoppingList = useShopping((st) => st.list);
  const print = useShopping((st) => st.print);

  const list = Object.entries(shoppingList);
  const filtered = list.filter((li) => li[1] > 0);
  const rest = list.filter((li) => li[1] === 0);

  return (
    <div>
      <h2>Shopping List</h2>
      <ul>
        {filtered.map((item, i) => (
          <ShoppingItem key={i} name={item[0]} q={item[1]} />
        ))}
      </ul>
      <h3>Finished</h3>
      <ul>
        {rest.map((item, i) => (
          <ShoppingItem key={i} name={item[0]} q={item[1]} />
        ))}
      </ul>
      <AddItem />
      <div>
        <button onClick={print}>Print</button>
      </div>
    </div>
  );
};

const useShopping = create((set, get) => ({
  list: {
    apple: 1,
    pairs: 3,
  },
  print: () => {
    const list = get().list;
    const txt = Object.entries(list)
      .map((it) => ` * ${it[0]} : ${it[1]}`)
      .join("\n");

    alert("====PRINT=====\n" + txt);
    console.log("====PRINT=====\n" + txt);
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
