import { faker } from '@faker-js/faker';

function generateUser() {
  const username = faker.internet.userName();
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const phone = faker.phone.number();
  const address = faker.location.streetAddress();
  const email = `${username}@mail.com`;

  return { email, firstName, lastName, phone, address };
}

module.exports = { generateUser };
