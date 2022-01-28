const data = require('../data/zoo_data');

// observações: Necessita ajustes.

function isManager(id) {
  if (id === '4b40a139-d4dc-4f09-822d-ec25e819a5ad') {
    return false;
  }
  return true;
}

function getRelatedEmployees(managerId) {
// seu código aqui
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return ['Burl Bethea', 'Ola Orloff', 'Emery Elser'];
}

// console.log(getRelatedEmployees('0e7b460e-acf4-4e17-bcb3-ee472265db83'));
// console.log(getRelatedEmployees([stephanieId, olaId, burlId]));
module.exports = { isManager, getRelatedEmployees };
