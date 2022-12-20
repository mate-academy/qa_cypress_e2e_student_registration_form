const faker = require('faker');

function generateUser() {
  const random = Math.random().toString().slice(2, 6);
  const firstName = faker.name.firstName('female');
  const lastName = faker.name.lastName('female');
  const fullName = `${firstName} ${lastName}`
  const email = `${firstName}_${lastName}@mail.com`;
  const password = 'Password_1';
  const phone = faker.phone.phoneNumber('066#######');
  const address = faker.address.country()
    + ', ' + faker.address.cityName()
    + ', ' + faker.address.streetAddress();

  return { firstName, lastName, email, password, phone, address, fullName };
}

module.exports = { generateUser };
