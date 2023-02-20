const { faker } = require('@faker-js/faker');

function generateUser() {
  const randomIndex = Math.floor(Math.random() * 3);
  const genders = ['Male', 'Female', 'Other'];
  const hobbies = ['Sports', 'Reading', 'Music'];

  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const email = faker.internet.email(firstName, lastName);
  const phoneNumber = faker.phone.number('##########');
  const dateOfBirth = faker.date.birthdate()
    .toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: '2-digit' });
  const dayOfBirth = dateOfBirth.slice(-8, -6);
  const monthOfBirth = dateOfBirth.slice(0, -9);
  const yearOfBirth = dateOfBirth.slice(-4);
  const address = faker.address.streetAddress();
  const gender = genders[randomIndex];
  const hobby = hobbies[randomIndex];

  return {
    firstName,
    lastName,
    email,
    phoneNumber,
    dateOfBirth,
    dayOfBirth,
    monthOfBirth,
    yearOfBirth,
    address,
    gender,
    hobby,
  };
}

module.exports = { generateUser };
