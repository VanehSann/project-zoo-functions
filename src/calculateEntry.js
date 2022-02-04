const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  let countChild = 0;
  let countAdult = 0;
  let countSenior = 0;
  entrants.forEach((entrant) => {
    if (entrant.age < 18) {
      countChild += 1;
    } else if (entrant.age >= 18 && entrant.age < 50) {
      countAdult += 1;
    } else if (entrant.age >= 50) {
      countSenior += 1;
    }
  });
  return { adult: countAdult, child: countChild, senior: countSenior };
}

function calculateEntry(entrants) {
  if(entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
}

module.exports = { calculateEntry, countEntrants };

// Referências::
// Object.keys(obj).length == 0 :: link abaixo ::
// https://pt.stackoverflow.com/questions/83588/em-javascript-como-verificar-que-um-objeto-est%C3%A1-vazio-sem-jquery
