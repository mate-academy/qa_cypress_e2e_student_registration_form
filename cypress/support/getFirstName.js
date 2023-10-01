const { faker } = require('@faker-js/faker');
const { Genders } = require('./data');

function getFirstName(gender) {
  switch (gender) {
    case Genders.MALE:
      return faker.person.firstName('male');
    case Genders.FEMALE:
      return faker.person.firstName('female');
    default:
      return faker.person.firstName();
  }
}

module.exports = { getFirstName };
