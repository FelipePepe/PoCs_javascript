// const suma = (number, sum = 0) =>
//   number === 0 ? sum : suma(number - 1, sum + number);

// const r = suma(1000000);

// console.log(r);

const trampoline = (fn) => (...args) => {
  let result = fn(...args);
  while (typeof result === "function") {
    result = result();
  }
  return result;
};

const suma = (number, sum = 0) =>
  number === 0 ? sum : () => suma(number - 1, sum + number);

const tsuma = trampoline(suma);
const r = tsuma(900000000000);
console.log(r);
