/*
    https://mostly-adequate.gitbook.io/mostly-adequate-guide/ch08
 */
import { Maybe, compose, curry } from "./appendix";

const match = (patt) => (str) => str.match(patt);
const map = curry((f, anyFunctor) => anyFunctor.map(f));

const log = (x) => {
  console.log(x);
  return x;
};

let res;
console.log(" \n 2. Functors, Containers, Maybes \n ");

// A Functor is a type that implements map and obeys some laws

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

//  https://mostly-adequate.gitbook.io/mostly-adequate-guide/ch08#use-cases

const withdraw = curry((amount, { balance }) =>
  Maybe.of(balance >= amount ? { balance: balance - amount } : null)
);

const updateLedger = (account) => account;
const remainingBalance = ({ balance }) => `Your balance is $${balance}`;
const finishTransaction = compose(remainingBalance, updateLedger);

const getTwenty = compose(map(finishTransaction), withdraw(20));

// When invalid, this returns NULL and the program stops executing

res = getTwenty({ balance: 200.0 });
console.log(" getTwnety : 200  ", res.$value);

res = getTwenty({ balance: 10.0 });
console.log(" getTwnety : 10  ", res.$value);

//  ================================ Maybe =============================

const map_maybe = curry((v, f, m) => {
  if (m.isNothing) {
    return v;
  }
  return f(m.$value);
});

const getTwenty_maybe = compose(
  map_maybe("You're broke!", finishTransaction),
  withdraw(20)
);

/* 
  instead of return null, this returns a backupt value
   We will now either return a static value 
   (of the same type that finishTransaction returns) 
   or continue on merrily finishing up the transaction sans Maybe
*/

res = getTwenty_maybe({ balance: 200.0 });
console.log(" get Twenty w maybe : 200  -  \t ", res);

res = getTwenty_maybe({ balance: 10.0 });
console.log(" get Twenty w maybe : 10  -  \t ", res);

/* 
IO / Maybe / Task / Either
 -
I recommend using functor instances from folktale, ramda or fantasy-land 
as they provide the correct of method as well as nice constructors 
that don't rely on new.
*/
