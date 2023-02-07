import { faker } from '@faker-js/faker';

function generateUser() {
  const username = faker.internet.userName();
  const email = faker.internet.email();
  const phone = faker.phone.number('##########');
  const address = faker.address.streetAddress();

  return { username, email,phone,address };
} 

module.exports = { generateUser };