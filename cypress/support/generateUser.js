const { faker } = require('@faker-js/faker');
const getSubjects = require('./getSubjects');
const getAddress = require('./getAddress');

const generateUser = () => {
  const countries = [0, 1, 2, 3];
  const personSex = faker.person.sex();
  const birthDate = faker.date.birthdate();
  const hobbies = ['Sports', 'Reading', 'Music'].filter(
    () => Math.random() * 10 > 5
  );
  const countryIndex = Math.floor(countries.length * Math.random());

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
    country: countries[countryIndex],
    email: faker.internet.email(),
    password: 'test1234'
  };
};

module.exports = generateUser;
