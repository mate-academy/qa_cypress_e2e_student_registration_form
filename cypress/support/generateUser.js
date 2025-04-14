const { faker } = require('@faker-js/faker');
const getSubjects = require('./getSubjects');
const getAddress = require('./getAddress');
const pickRandomly = require('./pickRandomly');

const generateUser = () => {
  const personSex = faker.person.sex();
  const birthDate = faker.date.birthdate();
  const hobbies = pickRandomly(['Sports', 'Reading', 'Music']);

  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    sex: personSex[0].toUpperCase() + personSex.slice(1),
    phone: faker.phone.number('##########'),
    birthDate: {
      day: birthDate.getDate().toString(),
      month: birthDate.toLocaleString('en-US', { month: 'long' }),
      year: birthDate.getFullYear().toString()
    },
    hobbies,
    address: getAddress(),
    subjects: getSubjects(),
    email: faker.internet.email()
  };
};

module.exports = generateUser;
