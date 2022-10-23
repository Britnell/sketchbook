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

  // online.clear()
  // bool : online.has(42)

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
