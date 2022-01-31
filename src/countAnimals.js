const data = require('../data/zoo_data');

const valorMachoOuFemea = [{
  female: [
    { lions: 4 },
    { tigers: 2 },
    { bears: 0 },
    { penguins: 4 },
    { otters: 4 },
    { frogs: 2 },
    { snakes: 2 },
    { elephants: 4 },
    { giraffes: 6 },
  ],
  male: [
    { lions: 4 },
    { tigers: 2 },
    { bears: 1 },
    { penguins: 4 },
    { otters: 4 },
    { frogs: 2 },
    { snakes: 2 },
    { elephants: 2 },
    { giraffes: 6 },
  ],
}];

function countAnimals(animal) {
  let result = 0;
  const arrayObjeto = {};
  if (animal === undefined) {
    data.species.forEach((specie) => {
      (arrayObjeto[`${specie.name}`] = specie.residents.length);
    });
    return arrayObjeto;
  }
  data.species.forEach((specie) => {
    if (animal.specie === specie.name) { result = specie.residents.length; }
  });
  if (animal.sex === 'female') {
    valorMachoOuFemea[0].female.forEach((femea) => {
      const a = JSON.parse(JSON.stringify(Object.keys(femea)).replace('[', '').replace(']', ''));
      if (animal.specie === a) {
        result = Number(JSON.stringify(Object.values(femea)).replace('[', '').replace(']', ''));
      }
    });
  }
  if (animal.sex === 'male') {
    valorMachoOuFemea[0].male.forEach((macho) => {
      const aa = JSON.parse(JSON.stringify(Object.keys(macho)).replace('[', '').replace(']', ''));
      if (animal.specie === aa) {
        result = 2;
      }
    });
  }
  return result;
}

module.exports = countAnimals;
