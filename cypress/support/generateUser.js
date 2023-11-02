const { faker } = require('@faker-js/faker');

function generateUser() {
  const randomNumber = faker.string.numeric(10);
  const email = faker.internet.email();
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const address = faker.address.streetAddress();
  return { email, firstName, lastName, randomNumber, address };
}
module.exports = { generateUser };
