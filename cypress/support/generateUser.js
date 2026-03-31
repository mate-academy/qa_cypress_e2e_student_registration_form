const { faker } = require('@faker-js/faker');

function generateUser() {
  const userName = faker.internet.userName();
  const email = `${userName}@gmail.com`;
  const birthdate = faker.date.birthdate();
  const address = faker.location.streetAddress();

  return { userName, email, birthdate, address };
}

module.exports = { generateUser };
