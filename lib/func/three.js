import { compose, curry, IO } from "./appendix";

const map = curry((f, anyFunctor) => anyFunctor.map(f));
let res;

const readFile = () =>
  new IO(
    () => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
`
  );

const print = (x) =>
  new IO(() => {
    console.log(x);
    return x;
  });

// const cat = compose(map(print), readFile);
// cat(".git/config");

const log = (x) => console.log("log: ", x);

const thing = compose(map(print), readFile);

res = thing("x");
console.log(" a ", res);
