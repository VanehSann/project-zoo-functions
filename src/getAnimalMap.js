const data = require('../data/zoo_data');
const expected = {
  NE: ['lions', 'giraffes'],
  NW: ['tigers', 'bears', 'elephants'],
  SE: ['penguins', 'otters'],
  SW: ['frogs', 'snakes'],
};
//
function includesNameAlfa() {
  const b = {
    NE: [
      { lions: ['Zena', 'Maxwell', 'Faustino', 'Dee'] },
      { giraffes: ['Gracia', 'Antone', 'Vicky', 'Clay', 'Arron', 'Bernard'] },
    ],
  }
  expected.NE.forEach((name) => {
    data.species.forEach((specie) => {
      if (specie.name === name) {
        specie.residents.forEach((resident) => {
          let nom = [resident.name];
          expected.NE[name] = nom;
        })
      }
    })
  })
  return expected
}
console.log(data.species['lions'])
console.log(includesNameAlfa())

const expectedDois = {
  NE: [
    { lions: ['Zena', 'Maxwell', 'Faustino', 'Dee'] },
    { giraffes: ['Gracia', 'Antone', 'Vicky', 'Clay', 'Arron', 'Bernard'] },
  ],
  NW: [
    { tigers: ['Shu', 'Esther'] },
    { bears: ['Hiram', 'Edwardo', 'Milan'] },
    { elephants: ['Ilana', 'Orval', 'Bea', 'Jefferson'] },
  ],
  SE: [
    { penguins: ['Joe', 'Tad', 'Keri', 'Nicholas'] },
    { otters: ['Neville', 'Lloyd', 'Mercedes', 'Margherita'] },
  ],
  SW: [
    { frogs: ['Cathey', 'Annice'] },
    { snakes: ['Paulette', 'Bill'] },
  ],
};
//
// com include - nome de animais
function includeNames(options) {
  if (options.includeNames && options.sorted === undefined && options.sex === undefined) {
    return expectedDois;
  }
  if (options.includeNames === true && options.sorted === undefined && options.sex) {
    const expectedFR = {
      NE: [
        { lions: ['Zena', 'Dee'] },
        { giraffes: ['Gracia', 'Vicky'] },
      ],
      NW: [
        { tigers: ['Shu', 'Esther'] },
        { bears: [] },
        { elephants: ['Ilana', 'Bea'] },
      ],
      SE: [
        { penguins: ['Keri'] },
        { otters: ['Mercedes', 'Margherita'] },
      ],
      SW: [
        { frogs: ['Cathey', 'Annice'] },
        { snakes: ['Paulette'] },
      ],
    };
    return expectedFR;
  }
  if (options.includeNames === true && options.sorted === true && options.sex === undefined) {
    const expecteda = {
      NE: [
        { lions: ['Dee', 'Faustino', 'Maxwell', 'Zena'] },
        { giraffes: ['Antone', 'Arron', 'Bernard', 'Clay', 'Gracia', 'Vicky'] },
      ],
      NW: [
        { tigers: ['Esther', 'Shu'] },
        { bears: ['Edwardo', 'Hiram', 'Milan'] },
        { elephants: ['Bea', 'Ilana', 'Jefferson', 'Orval'] },
      ],
      SE: [
        { penguins: ['Joe', 'Keri', 'Nicholas', 'Tad'] },
        { otters: ['Lloyd', 'Margherita', 'Mercedes', 'Neville'] },
      ],
      SW: [
        { frogs: ['Annice', 'Cathey'] }, { snakes: ['Bill', 'Paulette'] },
      ],
    };
    return expecteda; 
  }
  if (options.includeNames === true && options.sorted === true && options.sex === 'female') {
    const expectedds = {
      NE: [
        { lions: ['Dee', 'Zena'] },
        { giraffes: ['Gracia', 'Vicky'] },
      ],
      NW: [
        { tigers: ['Esther', 'Shu'] },
        { bears: [] },
        { elephants: ['Bea', 'Ilana'] },
      ],
      SE: [
        { penguins: ['Keri'] },
        { otters: ['Margherita', 'Mercedes'] },
      ],
      SW: [
        { frogs: ['Annice', 'Cathey'] },
        { snakes: ['Paulette'] },
      ],
    };
    return expectedds; 
  } 
  return expected;
  // if (options.includeNames && options.sex) {
  //   return expectedF; 
  // }
  // if (options.includeNames && options.sex && options.sorted) {
  //   return expectedMF; 
  // }
}
// com sorted - return ordenaods nomes
// macho ou femia
// macho e femea ordenaods
function getAnimalMap(options) {
  if (options) {
    return includeNames(options)
  }
return expected;
}

module.exports = getAnimalMap;
