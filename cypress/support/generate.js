
const faker = require('faker');

function generateUser() {
  const random = Math.random().toString().slice(2, 6);
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const phoneNumber = faker.phone.phoneNumber('380#########');
  const email = `${firstName}.${lastName}${random}@qa.team`;
  const password = '12345Qwert!';
  const gender = faker.random.arrayElement(['Male', 'Female', 'Other']);
  const hobby = faker.random.arrayElement(['Sports', 'Reading', 'Music']);
  const subject = faker.random.arrayElement(['English', 'Physics', 
  'Maths', 'Chemistry', 'Economics', 'Commerce', 'History', 'Arts']);
  const birth = {
    year: Math.floor(1950 + Math.random() * 60),
    month: Math.floor(Math.random() * 12),
    day: Math.floor(10 + Math.random() * 15),
  };
  const address = faker.address.streetAddress();
  return { firstName, lastName, phoneNumber, email, password, gender, hobby, subject, birth, address };
}

module.exports = { generateUser };