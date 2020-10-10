// function reducer
//const reducer = (acumulador, valorActual) => nuevoAcumulador

//const reducido = [].reduce((acc, el) => acc + el, 0)

const numeros = [1, 2, 3, 4, 5];
const resultado = numeros.reduce((acc, el) => acc + el, 0);
console.log(resultado);

const mascotas = [
  { nombre: "Pelusa", edad: 12, tipo: "gato" },
  { nombre: "Puchini", edad: 12, tipo: "perro" },
  { nombre: "Pulga", edad: 10, tipo: "perro" },
  { nombre: "Chanchito Feliz", edad: 3, tipo: "perro" },
];

// indexar el array de mascotas
const indexed = mascotas.reduce(
  (acc, el) => ({
    ...acc,
    [el.nombre]: el,
  }),
  {}
);

console.log(indexed);

const animado = [1, [2, 3], 4, [5]]; // [1, 2, 3, 4, 5]

const plano = animado.reduce((acc, el) => {
  console.log(el, acc);
  return acc.concat(el);
}, []);
console.log(plano);
