const faker = require('faker');

const genders = ['Male', 'Female', 'Other'];
const subjects = ['Chemistry', 'English', 'Computer Science'];
const hobbies = ['Sports', 'Reading', 'Music'];

function generateUser() {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const email = faker.internet.email();
  const gender = faker.random.arrayElement(genders);
  const mobileNumber = faker.phone.phoneNumber('##########');
  const birth = {
    year: Math.floor(1960 + Math.random() * 60),
    month: Math.floor(Math.random() * 12),
    day: Math.floor(10 + Math.random() * 15),
  };
  const subject = faker.random.arrayElement(subjects);
  const hobby = faker.random.arrayElement(hobbies);
  const address = faker.address.streetAddress();

  return { firstName, lastName, email, gender, mobileNumber, birth, subject, hobby, address };
};

module.exports = { generateUser };