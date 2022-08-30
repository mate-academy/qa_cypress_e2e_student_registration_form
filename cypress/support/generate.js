const faker = require('faker');

function generateUser() {
  const random = Math.random().toString().slice(2, 6);
  const username = faker.internet.userName() + '_' + random;
  const userFirstName = faker.name.firstName();
  const userLastName = faker.name.lastName();
  const email = `${username}@mail.com`;
  const mobileNumber = Math.random().toString().slice(2, 12);
  const birthDate = '01 Aug 1992';
  const subject = 'Physics';
  const adress = faker.address.streetAddress();
  const state = 'NCR';
  const city = 'Delhi';
  const gender = 'Female';
  const hobby = 'Sports';
  


  return { userFirstName, userLastName, email, mobileNumber, birthDate, subject, adress, state, city, gender, hobby };
}

module.exports = { generateUser };