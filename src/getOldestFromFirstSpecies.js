const data = require('../data/zoo_data');

const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';



// função para coletar primeiro nome do animal
function firstAnimalIdByEmployee(id){
for(let i = 0; i < 8; i += 1) {
  if(id === data.employees[i].id) {
  return data.employees[i].responsibleFor[0] // 0938aa23-f153-4937-9f88-4858b24d6bce resultIdAnimal
  }
}
}
// função para coletar o a idade maior, entre os animais de mesmo tipo.
function criandoUmArrayComOMaior(result) { 
  const arrayMaior = [];
  data.species.forEach((specie) => {
    if (specie.id === result)
      specie.residents.forEach((resident) => {
          arrayMaior.push(resident.age)
      })
  })
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/max
  return Math.max(...arrayMaior) //retorna o numero maior
}
// console.log(criandoUmArrayComOMaior('0938aa23-f153-4937-9f88-4858b24d6bce'))
// retorna valor vinal
function criandoArrayDosAnimais(nomeDoAnimalD, idadeMaiorD) { 
  const arrayMaiorIdade = [];
  data.species.forEach((specie) => {
    // console.log(specie.id + '-->' + nomeDoAnimal)
    // console.log(specie.name + '-->' + nomeDoAnimal)
    if (specie.id === nomeDoAnimalD)  { 
      specie.residents.forEach((resident) => {
        // console.log(resident.age + '-->' + idadeMaior)
        if (idadeMaiorD === resident.age){
        arrayMaiorIdade.push(resident.name, resident.sex, resident.age)
        // console.log(arrayMaiorIdade)
      }
      })
    }
  })
  // console.log(arrayMaiorIdade)
    return arrayMaiorIdade; 
}
// console.log('Testando se pega: ',criandoArrayDosAnimais('0938aa23-f153-4937-9f88-4858b24d6bce', 15))
// função principal
function getOldestFromFirstSpecies(id) {
 const nomeDoAnimal = firstAnimalIdByEmployee(id);
//  console.log('nomeDoAnimal:', nomeDoAnimal)
 const idadeMaior = criandoUmArrayComOMaior(nomeDoAnimal);
//  console.log('idadeMaior:', idadeMaior)
 const valorFinal = criandoArrayDosAnimais(nomeDoAnimal, idadeMaior);
//  console.log(valorFinal)
 return valorFinal;

}

// console.log(firstAnimalIdByEmployee('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1')) // OK
// console.log(criandoUmArrayComOMaior('lions')) // Recebe lions e retorna 15 OK (2)
// console.log(criandoArrayDosAnimais('0938aa23-f153-4937-9f88-4858b24d6bce')) // recebe id do animal, pelo id do funcionario (1)
// console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1')) // junto tudo
// console.log(getOldestFromFirstSpecies(stephanieId))
// console.log(getOldestFromFirstSpecies(burlId))

// console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1')) // junto tudo
// console.log(getOldestFromFirstSpecies(burlId))
// console.log(getOldestFromFirstSpecies(olaId))
// console.log(getOldestFromFirstSpecies('56d43ba3-a5a7-40f6-8dd7-cbb05082383f'))
// console.log(getOldestFromFirstSpecies(stephanieId))
// console.log(getOldestFromFirstSpecies('4b40a139-d4dc-4f09-822d-ec25e819a5ad'))
// console.log(getOldestFromFirstSpecies('c1f50212-35a6-4ecd-8223-f835538526c2'))
// console.log(getOldestFromFirstSpecies('b0dc644a-5335-489b-8a2c-4e086c7819a2'))


module.exports = getOldestFromFirstSpecies;

