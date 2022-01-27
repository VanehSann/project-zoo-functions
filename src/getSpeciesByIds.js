const data = require('../data/zoo_data');
// const lionId = '0938aa23-f153-4937-9f88-4858b24d6bce';
// console.log(data.species.length)
let arrayReturnt = [];
function getSpeciesByIds(ids, id2) {
  let teste = [];
  if(ids !== undefined && id2 === undefined) {

    for(let i = 0; i < 9; i += 1) {
    /* console.log(species[i].id) */
    if(ids === data.species[i].id) {
    
     return [data.species[i]]
    
    }
    
     
   
    }
   
  }
  if(ids !== undefined && id2 !== undefined) {
    for(let i = 0; i < 2; i += 1) {
    /* console.log(species[i].id) */
    if(ids === data.species[i].id) {
     teste.push(data.species[i]);
    }
    if(id2 === data.species[i].id) {
     teste.push(data.species[i])
    }
    // else{}
    }
     
     
    return teste
    
    }
return teste
}
// console.log(getSpeciesByIds())
module.exports = getSpeciesByIds;
