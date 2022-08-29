const faker = require('faker');

function generateUser() {
  const random = Math.random().toString().slice(2, 6);
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const email = `${firstName}@mail.com`;
  const mobile = '0701234567';
  const adress = faker.lorem.word();

  return { firstName, lastName, email, mobile, adress };
}

module.exports = { generateUser };