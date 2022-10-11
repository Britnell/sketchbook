import { contramap, Eq, struct } from "fp-ts/Eq";
import { getEq } from "fp-ts/Array";

// https://dev.to/gcanti/getting-started-with-fp-ts-setoid-39f3

console.log("\n\n Equality ");

let res;

// Equals - Number

const eqN: Eq<number> = {
  equals: (x, y) => x === y,
};

res = eqN.equals(1, 1);
console.log(" eq num : ", res);

//  Using an equals

function inArray<A>(E: Eq<A>): (a: A, as: Array<A>) => boolean {
  return (a, as) => as.some((item) => E.equals(item, a));
}
const inArrayN = inArray(eqN);

res = inArrayN(1, [1, 2, 3]);
console.log(" in array : ", res);

// eq complex types

type Point = {
  x: number;
  y: number;
};

let eqPoint: Eq<Point> = {
  equals: (p1, p2) => p1.x === p2.x && p1.y === p2.y,
};
eqPoint = struct({
  x: eqN,
  y: eqN,
});
res = eqPoint.equals({ x: 0, y: 1 }, { x: 0, y: 1.0 });
console.log(" points : ", res);

// Equals array

const eqArray: Eq<number[]> = getEq(eqN);
res = eqArray.equals([0, 1, 3], [0, 1, 3]);
console.log(" array : ", res);

// Equals User

type User = {
  userId: number;
  name: string;
};
const eqUser = contramap((user: User) => user.userId)(eqN);
res = eqUser.equals(
  { userId: 1, name: "Giulio" },
  { userId: 1, name: "Giulio Canti" }
);

console.log(" user : ", res);
