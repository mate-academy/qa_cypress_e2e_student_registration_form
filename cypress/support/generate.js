const faker = require('faker');

function generateUser() {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const email = faker.internet.email();
  const gender = faker.random.arrayElement(['Male', 'Female', 'Other']);
  const phone = faker.phone.phoneNumber('##########');
  const subjects = faker.random.arrayElement(['Arts', 'English', 'Commerce', 'Chemistry']);
  const hobby = faker.random.arrayElement(['Sports', 'Reading', 'Music']);
  const address = faker.address.streetAddress();

  return { firstName, lastName, email, gender, phone, subjects, hobby, address };
}

module.exports = { generateUser };