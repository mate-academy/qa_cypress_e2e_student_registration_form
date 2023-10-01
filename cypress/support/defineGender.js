const { getRandomIntegerNumber } = require('./getRandomIntegerNumber');
const { Genders } = require('./data');

function defineGender() {
  const genders = [Genders.MALE, Genders.FEMALE, Genders.OTHER];
  const index = getRandomIntegerNumber(0, 2);

  return {
    order: index + 1,
    gender: genders[index]
  };
}

module.exports = { defineGender };
