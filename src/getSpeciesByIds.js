const data = require('../data/zoo_data');

function teste(K, KK, KKK) {
  if (K !== undefined && KK === undefined) {
    data.species.forEach((specie) => {
      if (K === specie.id) {
        KKK.push(specie);
        return KKK;
      }
    });
  }
}
//
function testeR(K, KK, KKK) {
  data.species.forEach((specie) => {
    if (K === specie.id) { KKK.push(specie); }
    if (KK === specie.id) { KKK.push(specie); }
  });
}
//
function getSpeciesByIds(ids, id2) {
  const arrayGetSpec = [];
  teste(ids, id2, arrayGetSpec);
  if (ids !== undefined && id2 !== undefined) {
    testeR(ids, id2, arrayGetSpec);
    return arrayGetSpec;
  }
  return arrayGetSpec;
}

module.exports = getSpeciesByIds;
