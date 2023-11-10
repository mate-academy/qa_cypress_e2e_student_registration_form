const { faker } = require('@faker-js/faker');

function generateUser() {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const email = `${firstName}${lastName}@gmail.com`;
  const mobile = faker.string.numeric(10);
  const address = faker.location.streetAddress();

  return { firstName, lastName, email, mobile, address };
}

module.exports = { generateUser };
