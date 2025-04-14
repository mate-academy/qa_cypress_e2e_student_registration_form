const { faker } = require('@faker-js/faker');

function generateUser() {
  const genders = ['Male', 'Female'];
  const randomIndex = Math.floor(Math.random() * 2);
  const hobbies = ['Reading', 'Sports', 'Music'];
  const hobbyIndex = Math.floor(Math.random() * hobbies.length);
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    gender: genders[randomIndex],
    phoneNumber: faker.phone.number('##########'),
    birth: {
      year: Math.floor(2000 + Math.random() * 20).toString(),
      month: faker.date.month(),
      day: Math.ceil(Math.random() * 27)
    },
    hobby: hobbies[hobbyIndex],
    address: faker.location.streetAddress()
  };
}

module.exports = { generateUser };
