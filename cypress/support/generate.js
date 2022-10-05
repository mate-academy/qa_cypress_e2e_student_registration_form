const faker = require('faker');

function generateUser() {
  const random = Math.random().toString().slice(2, 6);
  const gender = faker.name.gender(true);
  const firstName = faker.name.firstName(gender);
  const lastName = faker.name.lastName(gender);
  const username = faker.internet.userName(firstName, lastName) + '_' + random;
  const email = `${username}@mail.com`;
  const password = '12345Qwert!';
  const mobile = faker.phone.phoneNumber('##########');
  const birthDay = faker.datatype.number({min: 10, max:29});
  const birthMonth = faker.date.month();
  const birthYear = faker.datatype.number({min: 1922, max: 2022})
  const address = faker.address.streetAddress();

  return { gender, email, password, username, firstName, lastName, mobile, birthDay, birthMonth, birthYear, address};
}

module.exports = { generateUser };