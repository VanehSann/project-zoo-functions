const data = require('../data/zoo_data');

function countAnimals(animal) {
  // seu código aqui

 if (animal === '' || animal === undefined) { 
  //  const tt = {};
   for (let index = 0; index < data.species.length; index += 1) {
  // return tt.`${data.species[index].name}: ${data.species[index].popularity}`);
  console.log(`${data.species[index].name}: ${data.species[index].popularity}`)
      }
// tt.replace('[','{').replace(']','}')
// return tt
}

// if (animal === `penguins`) {
//   return 4;
// }
// if (animal === `giraffes`) {
//   return 6;
// }
// if (animal === `bears', sex: 'female`) {
//   return 0;
// }
// if (animal === `elephants', sex: 'male`) {
//   return 2;
// }
}
console.log(countAnimals())

module.exports = countAnimals;
