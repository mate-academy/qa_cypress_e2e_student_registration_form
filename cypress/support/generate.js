const faker = require('faker');

function generateUser() {
  const random = Math.random().toString().slice(2, 9);
  const numberofphone = '067' + random;
  const username = faker.internet.userName();
  const userlastname = faker.internet.userName();
  const email = `${username}@gmail.com`;
  const password = '12345Qwert!';

  return { email, password, username, userlastname, numberofphone };
}

module.exports = { generateUser };