const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, ages) {
  // seu código aqui
  // console.log(data.species[0].residents[2].age)
for(let index = 0; index < data.species.length; index += 1) {
  if(data.species[index].name === animal) {
    
    const residentData = data.species[index].residents.every((resident) => {
      return resident.age >= ages
    });
    return residentData
  }
}

}

// console.log(getAnimalsOlderThan('otters', 7))
// console.log(getAnimalsOlderThan('penguins', 10));

module.exports = getAnimalsOlderThan;
