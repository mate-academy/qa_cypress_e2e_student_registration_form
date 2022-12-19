const faker = require('faker');

function generateUser() {
  const random = Math.random().toString().slice(2, 6);
  const first_name = faker.name.firstName();
  const last_name = faker.name.lastName();
  const email = `${first_name}${random}@mail.com`;
  const phone_number = faker.phone.phoneNumber('063#######');
  const street = faker.address.streetName();
 
  return { random, email, first_name, last_name, phone_number, street };
}

module.exports = { generateUser };