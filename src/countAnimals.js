const data = require('../data/zoo_data');

// console.log(data.species[0].name)
// console.log(data.species[0].residents) // pecorre
// console.log(data.species[0].residents[0].sex) // === a female return contador
// criando funcao  que procura elemento
function elemento(nomeDoAnimal) {
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
function elemento2(nomeDoAnimal) {
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
      result = elemento(animal.specie);
    } else if (animal.sex === 'male') {
      result = elemento2(animal.specie);
    }
  });
  return result;
}

module.exports = countAnimals;
