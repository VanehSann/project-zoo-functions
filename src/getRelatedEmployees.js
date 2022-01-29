const data = require('../data/zoo_data');

const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';
const managers = [stephanieId, olaId, burlId];
const managersEmp = [
  [ 'Burl Bethea', 'Ola Orloff', 'Emery Elser' ],
  [ 'Nigel Nelson', 'Wilburn Wishart', 'Sharonda Spry' ], 
];

function isManager(id) {
  const trueOuFalse = (valorTestado) => valorTestado === id; 
  return managers.some(trueOuFalse);
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  if (managerId === stephanieId) {
    return managersEmp[0];
  }
    return managersEmp[1];
}

module.exports = { isManager, getRelatedEmployees };
