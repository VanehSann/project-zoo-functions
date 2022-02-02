const data = require('../data/zoo_data');

// função para coletar primeiro nome do animal
function firstAnimalIdByEmployee(id) {
  for (let i = 0; i < 8; i += 1) {
    if (id === data.employees[i].id) {
      return data.employees[i].responsibleFor[0];
    }
  }
}
// função para coletar o a idade maior, entre os animais de mesmo tipo.
function criandoUmArrayComOMaior(result) {
  const arrayMaior = [];
  data.species.forEach((specie) => {
    if (specie.id === result) {
      specie.residents.forEach((resident) => {
        arrayMaior.push(resident.age);
      });
    }
  });
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/max
  return Math.max(...arrayMaior);
}
// retorna valor vinal
function criandoArrayDosAnimais(nomeDoAnimalD, idadeMaiorD) {
  const arrayMaiorIdade = [];
  data.species.forEach((specie) => {
    if (specie.id === nomeDoAnimalD) {
      specie.residents.forEach((resident) => {
        if (idadeMaiorD === resident.age) {
          arrayMaiorIdade.push(resident.name, resident.sex, resident.age);
        }
      });
    }
  });
  return arrayMaiorIdade;
}
// função principal
function getOldestFromFirstSpecies(id) {
  const nomeDoAnimal = firstAnimalIdByEmployee(id);
  const idadeMaior = criandoUmArrayComOMaior(nomeDoAnimal);
  const valorFinal = criandoArrayDosAnimais(nomeDoAnimal, idadeMaior);
  return valorFinal;
}

module.exports = getOldestFromFirstSpecies;
