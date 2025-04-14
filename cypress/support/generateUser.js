const { faker } = require('@faker-js/faker');

function generateUser() {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const email = faker.internet.email();
  const mobile = +faker.number.int().toString().slice(0, 10);
  const subjects = 'JavaScript, TypeScript';
  const address = 'Example str, 42, Example city, 60-573';

  return { firstName, lastName, email, mobile, subjects, address };
}

module.exports = { generateUser };
