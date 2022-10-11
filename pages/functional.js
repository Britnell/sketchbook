/* 
  https://github.com/MostlyAdequate/mostly-adequate-guide
  
  https://mostly-adequate.gitbook.io/mostly-adequate-guide/
  
*/

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

// ##
let res;
const modulo = (x) => x % 2;
const isZero = (x) => x === 0;

const isOdd = compose(isZero, modulo);
res = isOdd(2);

const carA = {
  name: "Aston Martin One-77",
  horsepower: 750,
  dollar_value: 1850000,
  in_stock: true,
};
const carB = {
  name: "x-77",
  horsepower: 600,
  dollar_value: 3390000,
  in_stock: true,
};

const last = (xs) => xs[xs.length - 1];
const prop = curry((p, obj) => obj[p]);
const inStock = prop("in_stock");

//
const cars = [carA, carB];
const isXStock = compose(inStock, last);
res = isXStock(cars);
console.log(" > is last in stock ", cars, res);

//
const add = (a, b) => a + b;
const reduce = (f, init, xs) => xs.reduce(f, init);
const average = (xs) => reduce(add, 0, xs) / xs.length;

const map = curry((f, xs) => xs.map(f));
const averageVal = compose(average, map(prop("dollar_value")));

//
res = averageVal(cars);
console.log(" > average ", cars, res);
