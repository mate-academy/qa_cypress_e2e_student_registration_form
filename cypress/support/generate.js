const faker = require('faker');

function generateUser() {
  const randomIndex = Math.floor(Math.random() * 3);
  const genders = ['Male', 'Female', 'Other'];
  const hobbies = ['Sports', 'Reading', 'Music'];
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const fullName = `${firstName} ${lastName}`;
  const email = faker.internet.email();
  const phoneNumber = faker.phone.phoneNumberFormat().replace(/[-]/g, '');
  const gender = genders[randomIndex];
  const hobby = hobbies[randomIndex];
  const month = faker.date.month();
  const year = Math.floor(Math.random() * 50) + 1950;
  const day = Math.floor(Math.random() * 28) + 1;
  const birthDate = day < 10
    ? `0${day} ${month},${year}`
    : `${day} ${month},${year}`;

  const address = faker.address.streetAddress();

  return {
    firstName,
    lastName,
    email,
    gender,
    hobby,
    phoneNumber,
    birthDate,
    address,
    fullName
  };
}

module.exports = { generateUser };
