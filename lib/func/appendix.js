/*
    https://mostly-adequate.gitbook.io/mostly-adequate-guide/appendix_b#maybe
 */

export function curry(fn) {
  const arity = fn.length;

  return function $curry(...args) {
    if (args.length < arity) {
      return $curry.bind(null, ...args);
    }

    return fn.call(null, ...args);
  };
}

export const compose =
  (...fns) =>
  (...args) =>
    fns.reduceRight((res, fn) => [fn.call(null, ...res)], args)[0];

/*

*/
export class Map {
  constructor(x) {
    this.$value = x;
  }

  // [util.inspect.custom]() {
  //   return `Map(${inspect(this.$value)})`;
  // }

  insert(k, v) {
    const singleton = {};
    singleton[k] = v;
    return Map.of(Object.assign({}, this.$value, singleton));
  }

  reduceWithKeys(fn, zero) {
    return Object.keys(this.$value).reduce(
      (acc, k) => fn(acc, this.$value[k], k),
      zero
    );
  }

  // ----- Functor (Map a)
  map(fn) {
    return this.reduceWithKeys((m, v, k) => m.insert(k, fn(v)), new Map({}));
  }

  // ----- Traversable (Map a)
  sequence(of) {
    return this.traverse(of, identity);
  }

  traverse(of, fn) {
    return this.reduceWithKeys(
      (f, a, k) =>
        fn(a)
          .map((b) => (m) => m.insert(k, b))
          .ap(f),
      of(new Map({}))
    );
  }
}

export class Maybe {
  get isNothing() {
    return this.$value === null || this.$value === undefined;
  }

  get isJust() {
    return !this.isNothing;
  }

  constructor(x) {
    this.$value = x;
  }

  // [util.inspect.custom]() {
  //   return this.isNothing ? "Nothing" : `Just(${inspect(this.$value)})`;
  // }

  // ----- Pointed Maybe
  static of(x) {
    return new Maybe(x);
  }

  // ----- Functor Maybe
  map(fn) {
    return this.isNothing ? this : Maybe.of(fn(this.$value));
  }

  // ----- Applicative Maybe
  ap(f) {
    return this.isNothing ? this : f.map(this.$value);
  }

  // ----- Monad Maybe
  chain(fn) {
    return this.map(fn).join();
  }

  join() {
    return this.isNothing ? this : this.$value;
  }

  // ----- Traversable Maybe
  sequence(of) {
    return this.traverse(of, identity);
  }

  traverse(of, fn) {
    return this.isNothing ? of(this) : fn(this.$value).map(Maybe.of);
  }
}

export class IO {
  constructor(fn) {
    this.unsafePerformIO = fn;
  }

  // [util.inspect.custom]() {
  //   return "IO(?)";
  // }

  // ----- Pointed IO
  static of(x) {
    return new IO(() => x);
  }

  // ----- Functor IO
  map(fn) {
    return new IO(compose(fn, this.unsafePerformIO));
  }

  // ----- Applicative IO
  ap(f) {
    return this.chain((fn) => f.map(fn));
  }

  // ----- Monad IO
  chain(fn) {
    return this.map(fn).join();
  }

  join() {
    return new IO(() => this.unsafePerformIO().unsafePerformIO());
  }
}
