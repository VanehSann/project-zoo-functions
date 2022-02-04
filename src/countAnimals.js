const data = require('../data/zoo_data');

function countFemaleSex(nomeDoAnimal) {
  let contador = 0;
  data.species.forEach((specie) => {
    if (specie.name === nomeDoAnimal) {
      specie.residents.forEach((resident) => {
        if (resident.sex === 'female') {
          contador += 1;
        }
      });
    }
  });
  return contador;
}
function countMaleSex(nomeDoAnimal) {
  let contador = 0;
  data.species.forEach((specie) => {
    if (specie.name === nomeDoAnimal) {
      specie.residents.forEach((resident) => {
        if (resident.sex === 'male') {
          contador += 1;
        }
      });
    }
  });
  return contador;
}

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
      result = countFemaleSex(animal.specie);
    } else if (animal.sex === 'male') {
      result = countMaleSex(animal.specie);
    }
  });
  return result;
}

module.exports = countAnimals;
