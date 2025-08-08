// 1. Named export  - Multiple (recommend)
// 2. Default export - one per file

const num = 1000;

const dbl = (n) => n * 2;

function sum(a, b) {
  return a + b;
}

// 1. Named export (Good practice)
export { num, dbl, sum };

// function useState(InitialValue) {
//   return [10, () => {}];
// }

// const [state, setState] = useState(10);
