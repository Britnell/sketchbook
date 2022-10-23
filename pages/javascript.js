import React from "react";
// t3's example https://www.youtube.com/watch?v=hRSwSAr-gok

const Maps = () => {
  const users = new Map([
    ["tom", { id: 3, status: "online" }],
    ["suzy", { id: 15, status: "offline" }],
  ]);

  users.set("jim", { id: 42, status: "online " });

  // loops over [key,value] pairs
  for (const user of users) {
    const [name, { id, status }] = user;
    console.log(`[#${id}]  ${name} is ${status} !`);
  }

  // Loops over values array
  users.forEach((user) => {
    const { id, status } = user;
    console.log(` user #${id} us ${status}`);
  });

  // Set to remove duplicate values
  const usersOnline = [3, 1, 15, 3, 42, 3];
  const userSet = new Set(usersOnline);
  console.log("unique Set : ", usersOnline, " > ", [...userSet]);

  userSet.add(99);
  userSet.delete(15);
  console.log(" add and delete > ", [...userSet]);

  // Timer
  console.time("looper");
  for (let x = 0; x < 10000; x++) {}
  console.timeEnd("looper");

  // online.clear()
  // bool : online.has(42)

  // Arrays

  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  let portion = numbers.slice(4, 6); // (start,end)
  let first = numbers.shift();
  let last = numbers.pop();
  numbers.unshift(0);
  numbers.push(99);

  let alphabet = Array.from("acdexghi");
  let _alpha = Array.from(alphabet);
  let __lpha = [...alphabet];

  // + splice          ( index, deleteCount, insert... )
  alphabet.splice(1, 0, "b");
  alphabet.splice(5, 1, "f");

  const flattened = [
    [1, 2],
    [3, 4],
  ].flat();

  // Iterator

  // * Loop arrays
  const abc = ["a", "b", "c"];

  // + forEach
  abc.forEach((val, i) => {});

  // + values
  var iterator = abc.values();
  for (const val of iterator) {
  }

  // + entries
  iterator = abc.entries(); // creates arrays of [key,value] pairs
  let _a, _b;
  let [i, __a] = iterator.next().value; // [0, "a"]
  let [j, __b] = iterator.next().value; // [1, "b"]

  return (
    <div>
      <h1>Maps</h1>
      <h4>Users</h4>
      <ul>
        {[...users].map((user) => {
          const [name, { id, status }] = user;
          return (
            <li key={id}>
              {name} is {status} - (#{id})
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default function Page() {
  return (
    <div>
      <h1>This is a js example, see console & code </h1>
      <Maps />
    </div>
  );
}
