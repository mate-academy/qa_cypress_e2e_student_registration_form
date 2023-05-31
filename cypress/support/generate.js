const faker = require('faker');

function generateUser() {
  const random = Math.random().toString().slice(2, 6);
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const phoneNumber = faker.phone.phoneNumber('380#######');
  const email = `${firstName}.${lastName}${random}@qa.team`;
  const password = '12345Qwert!';
  const gender = faker.random.arrayElement(['Male', 'Female', 'Other']);
  const hobbie = faker.random.arrayElement(['Sports', 'Reading', 'Music']);
  const subject = faker.random.arrayElement(['English', 'Physics', 'Maths']);

  return { firstName, lastName, phoneNumber, email, password, gender, hobbie, subject, };
}

module.exports = { generateUser };
