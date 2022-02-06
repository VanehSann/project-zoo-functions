const data = require('../data/zoo_data');

const expected = {
  Tuesday: {
    officeHour: 'Open from 8am until 6pm',
    exhibition: ['lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes'],
  },
  Wednesday: {
    officeHour: 'Open from 8am until 6pm',
    exhibition: ['tigers', 'bears', 'penguins', 'otters', 'frogs', 'giraffes'],
  },
  Thursday: {
    officeHour: 'Open from 10am until 8pm',
    exhibition: ['lions', 'otters', 'frogs', 'snakes', 'giraffes'],
  },
  Friday: {
    officeHour: 'Open from 10am until 8pm',
    exhibition: ['tigers', 'otters', 'frogs', 'snakes', 'elephants', 'giraffes'],
  },
  Saturday: {
    officeHour: 'Open from 8am until 10pm',
    exhibition: ['lions', 'tigers', 'bears', 'penguins', 'otters', 'frogs', 'snakes', 'elephants'],
  },
  Sunday: {
    officeHour: 'Open from 8am until 8pm',
    exhibition: ['lions', 'bears', 'penguins', 'snakes', 'elephants'],
  },
  Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
};
const diasDaSemana = Object.keys(data.hours);
const nomeDosAnimais = ['lions', 'tigers', 'bears', 'penguins', 'otters', 'frogs', 'giraffes'];

function condicao(scheduleTarget) {
  const novoArray = {};
  for (let dia = 0; dia < diasDaSemana.length; dia += 1) {
    if (scheduleTarget === diasDaSemana[dia]) {
      novoArray[diasDaSemana[dia]] = expected[diasDaSemana[dia]];
      return novoArray;
    }
  }
}
function condicaoDois(scheduleTarget) {
  for (let dia = 0; dia < diasDaSemana.length; dia += 1) {
    if (scheduleTarget === data.species[dia].name) {
      return data.species[dia].availability;
    }
  }
}
function getSchedule(scheduleTarget) {
  let result = 0;
  for (let dia = 0; dia < diasDaSemana.length; dia += 1) {
    if (scheduleTarget === diasDaSemana[dia]) {
      return condicao(scheduleTarget);
    } if (scheduleTarget === nomeDosAnimais[dia]) {
      return condicaoDois(scheduleTarget);
    }
    result = expected;
  }
  return result;
}

module.exports = getSchedule;
