import { faker } from '@faker-js/faker';

function generateUser() {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const email = firstName.toLowerCase() + "@gmail.com";
  const phoneNumber = Math.floor(Math.random() * 10000000000);
  const address = faker.address.streetAddress();
  const password = "12345Qwert!";

  return { firstName, lastName, email, password, phoneNumber, address };
}

module.exports = { generateUser };