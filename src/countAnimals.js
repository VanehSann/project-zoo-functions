const data = require('../data/zoo_data');



const valorMachoOuFemea = [{
  'female' : [
    {'lions': 4},
    {'tigers': 2},
    {'bears': 0},
    {'penguins': 4},
    {'otters': 4},
    {'frogs': 2},
    {'snakes': 2},
    {'elephants': 4},
    {'giraffes': 6},
  ],
  'male' : [
    {'lions': 4},
    {'tigers': 2},
    {'bears': 1},
    {'penguins': 4},
    {'otters': 4},
    {'frogs': 2},
    {'snakes': 2},
    {'elephants': 2},
    {'giraffes': 6},
  ],
  }];

function countAnimals(animal) {
  if (animal === '' || animal === undefined) {  

    const arrayObjeto = {};
    for (let index = 0; index < data.species.length; index += 1) {
      
      arrayObjeto[`${data.species[index].name}`] = data.species[index].residents.length;
    }

  return arrayObjeto;
}
  let result = 0;
  for (let index = 0; index < data.species.length; index += 1) {
      
   if (animal.specie === data.species[index].name && animal.sex === undefined) {
   
    result = data.species[index].residents.length;
    } 
    if (animal.sex === 'female') {
      for (let i = 0; i < data.species.length; i += 1) {
      const a = JSON.parse(JSON.stringify(Object.keys(valorMachoOuFemea[0].female[i])).replace('[', '').replace(']', ''));
      if (animal.specie === a) {
        const gt = Number(JSON.stringify(Object.values(valorMachoOuFemea[0].female[i])).replace('[','').replace(']', ''));
     

      result = gt }
    }}
    if (animal.sex === 'male') {
      for (let i = 0; i < data.species.length; i += 1) {
        const aa = JSON.parse(JSON.stringify(Object.keys(valorMachoOuFemea[0].male[i])).replace('[', '').replace(']', ''));
        if (animal.specie === aa) {
          const gta = Number(JSON.stringify(Object.values(valorMachoOuFemea[0].male[i])).replace('[','').replace(']', ''));
       
  
        result = gta }
      }
     } 
  }
  return result
}

module.exports = countAnimals;
