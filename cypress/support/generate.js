const faker = require('faker');

function generateUser() {
  //const random = Math.random().toString().slice(2, 6);
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const email = `${lastName}@mail.com`;
  //const password = '12345Qwert!';
  const gender = faker.random.arrayElement(['Male', 'Female', 'Other']);
  const mobileNumber = faker.phone.phoneNumber('##########');
  const subject = faker.random.arrayElement(['Chemistry', 'English', 'Computer Science']);
  const hobby = faker.random.arrayElement(['Sports', 'Reading', 'Music']);
  const address = faker.address.streetAddress();


  return { firstName, lastName, email, gender, mobileNumber, subject, hobby, address };
  
}

module.exports = { generateUser };