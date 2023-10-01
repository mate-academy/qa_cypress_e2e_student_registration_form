const { getRandomIntegerNumber } = require('./getRandomIntegerNumber');
const { Hobbies } = require('./data');

function defineHobbies() {
  const hobbiesList = [
    { order: 1, hobby: Hobbies.SPORTS },
    { order: 2, hobby: Hobbies.READING },
    { order: 3, hobby: Hobbies.MUSIC }
  ];

  const hobbiesQuantity = getRandomIntegerNumber(1, 3);

  switch (hobbiesQuantity) {
    case 2:
      return hobbiesList
        .filter((hobbie, index) => index !== getRandomIntegerNumber(0, 2));
    case 1:
      return hobbiesList
        .filter((hobbie, index) => index === getRandomIntegerNumber(0, 2));
    default:
      return hobbiesList;
  }
}

module.exports = { defineHobbies };
