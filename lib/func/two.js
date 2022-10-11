/*
    https://mostly-adequate.gitbook.io/mostly-adequate-guide/ch08
 */
import Maybe from "./maybe";

function curry(fn) {
  const arity = fn.length;

  return function $curry(...args) {
    if (args.length < arity) {
      return $curry.bind(null, ...args);
    }

    return fn.call(null, ...args);
  };
}

const compose =
  (...fns) =>
  (...args) =>
    fns.reduceRight((res, fn) => [fn.call(null, ...res)], args)[0];

const match = (patt) => (str) => str.match(patt);
const map = curry((f, anyFunctor) => anyFunctor.map(f));

const log = (x) => {
  console.log(x);
  return x;
};

let res;
console.log(" \n 2. Containers and Maybes \n ");

// maybes type check

res = Maybe.of("Malkovich Malkovich").map(match(/a/gi));
console.log(" valid maybe :  ", res);

res = Maybe.of(null).map(match(/a/gi));
console.log(" null maybe  ", res);

//

// example
const prop = (p) => (obj) => obj[p];

const getAddr = prop("address");
const safeAddr = (o) => Maybe.of(getAddr(o));

const matchNumber = match(/\d/g);
const streetNumber = compose(map(matchNumber), safeAddr);

res = streetNumber({ address: "1 asdfghjkl" });

console.log(
  " safe with maybe's :  ",
  res.$value ? `found street number!` : " ERROR - couldnt find",
  res.$value
);

// https://mostly-adequate.gitbook.io/mostly-adequate-guide/ch08#use-cases
