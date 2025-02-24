const { faker } = require('@faker-js/faker');

function generateRegistrationInput() {
  const firstName = 'A' + faker.person.firstName();
  const lastName = 'A' + faker.person.lastName();
  const email = faker.internet.email();
  const number = '0981324564';
  const address = faker.location.streetAddress();
  const subject = faker.lorem.sentences().slice(2, 11);
  
  return {
    firstName,
    lastName,
    email,
    number,
    address,
    subject
  };
}

module.exports = { generateRegistrationInput };