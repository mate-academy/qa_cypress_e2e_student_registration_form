const { faker } = require('@faker-js/faker');

export function generateUser() {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const email = faker.internet.email();
  const mobile = Math.random().toString().slice(2, 12);
  const birthday = faker.date.birthdate().toDateString().slice(3);
  const address = faker.address.streetAddress();

  return { firstName, lastName, email, mobile, birthday, address };
}

module.exports = { generateUser };