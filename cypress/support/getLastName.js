const { faker } = require('@faker-js/faker');
const { Genders } = require('./data');

function getLastName(gender) {
  switch (gender) {
    case Genders.MALE:
      return faker.person.lastName('male');
    case Genders.FEMALE:
      return faker.person.lastName('female');
    default:
      return faker.person.lastName();
  }
}

module.exports = { getLastName };
