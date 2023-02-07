import { faker } from '@faker-js/faker';

function generateUser() {
  const randomindex = Math.floor(1 + Math.random() * 3);
  const gender = ['', 'Male', 'Female', 'Other'];
  const hobby = ['', 'Sports', 'Reading', 'Music'];

  const firstname = faker.name.firstName();
  const lastname = faker.name.lastName();
  const email = faker.internet.email();
  const phone = faker.phone.number('##########');
  const address = faker.address.streetAddress();

  return { firstname, lastname, email, phone, address, gender, hobby, randomindex };
} 

module.exports = { generateUser };
