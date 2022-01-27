const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) {
    return {};
  }
  for (let index = 0; index < data.employees.length; index += 1) {
    if (data.employees[index].firstName === employeeName
      || data.employees[index].lastName === employeeName) {
      return data.employees[index];
    }
  }
}

// console.log(getEmployeeByName('Emery'))
// console.log(getEmployeeByName('Wishart'))

module.exports = getEmployeeByName;
