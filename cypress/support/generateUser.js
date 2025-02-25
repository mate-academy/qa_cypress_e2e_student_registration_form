const { faker } = require('@faker-js/faker');

function generateUser() {
  const userName = faker.internet.userName();
  const email = faker.internet.email();
  const mobile = Math.random().toString().slice(2, 12);
  const subject = 'Maths';
  const currentAddress = 'Volkova str 1';
  const state = 'NCR';
  const city = 'Noida';

  return {
    userName,
    email,
    mobile,
    subject,
    currentAddress,
    state,
    city
  };
}

module.exports = { generateUser };
