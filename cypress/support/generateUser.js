const faker = require('faker');

function generateUser() {
  const randomNumber = faker.phone.phoneNumber('##########');
  const email = faker.internet.email();
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const genders = ['Male', 'Female', 'Other'];
  const gender = genders[Math.floor(Math.random() * genders.length)];
  const month = faker.date.month();
  const year = Math.floor(1990 + Math.random() * 10);
  const day = Math.ceil(Math.random() * 28);
  const subject = 'English';
  const hobbyOptions = ['Sports', 'Reading', 'Music'];
  const hobby = hobbyOptions[Math.floor(Math.random() * hobbyOptions.length)];
  const currentAddress = faker.address.streetAddress();

  return {
    email,
    firstName,
    lastName,
    gender,
    randomNumber,
    month,
    year,
    day,
    subject,
    hobby,
    currentAddress
  };
}
module.exports = { generateUser };
