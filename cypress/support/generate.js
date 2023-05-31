const faker = require('faker');

function generateUser() {
  const random = Math.random().toString().slice(2, 5)
  const genders = faker.random.arrayElement(['Male', 'Female', 'Other']);
  const subjects = faker.random.arrayElement(['English', 'Maths', 'Biology']);
  const hobbies = faker.random.arrayElement(['Sports', 'Reading', 'Music']);
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const email = faker.internet.email();
  const mobileNumber = faker.phone.phoneNumber('##########');
  
  
  return { genders, subjects, hobbies, firstName, lastName, email, mobileNumber, };
  
};

module.exports = { generateUser };