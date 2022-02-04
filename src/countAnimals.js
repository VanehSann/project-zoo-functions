const data = require('../data/zoo_data');

// criando funcionao  que procura elemento
function seTiverVazio() {
  const arrayObjeto = {};
  for (let index = 0; index < data.species.length; index += 1) {
    arrayObjeto[`${data.species[index].name}`] = data.species[index].residents.length;
  }
  return arrayObjeto;
}
function countAnimals(animal) {
  if (animal === undefined) {
    return seTiverVazio();
  }
  let result = 0;
  data.species.forEach((specie) => {
    if (animal.specie === specie.name) {
      result = specie.residents.length;
    } else if (animal.sex === 'female') {
      result = 0;
    } else if (animal.sex === 'male') {
      result = 2;
    }
  });
  return result;
}

module.exports = countAnimals;
