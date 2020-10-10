const _ = require("lodash");

const users = [{ id: 1, nombre: "felipe", apellido: "pérez" }];

const head = (x) => x[0];

const capitalizaNombreYApellido = (x) => ({
  nombre: _.upperFirst(x.nombre),
  apellido: _.upperFirst(x.apellido),
});

const generaNombre = (x) => `${x.nombre} ${x.apellido}`;

const getNombreCompleto = (_users) => {
  const primero = head(_users);
  const capitalizados = capitalizaNombreYApellido(primero);

  return generaNombre(capitalizados);
};

const getNombreCompletoMejor = (_users) =>
  generaNombre(capitalizaNombreYApellido(head(_users)));

const x1 = getNombreCompleto(users);
const x2 = getNombreCompletoMejor(users);
console.log(x1, x2);

const compose = (...fns) => (x) => fns.reduceRight((y, f) => f(y), x);

const getNombreCompletoMejorQueMejor = compose(
  generaNombre,
  capitalizaNombreYApellido,
  head
);

const x3 = getNombreCompletoMejorQueMejor(users);
console.log(x3);
