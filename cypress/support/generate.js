import { faker } from '@faker-js/faker';

function generateUser () {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const email = `${firstName}_${lastName}@gmail.com`;
  const phone = faker.phone.number('41########');
  const address = faker.address.streetAddress();

  return { firstName, lastName, email, phone, address }
};

module.exports = { generateUser };