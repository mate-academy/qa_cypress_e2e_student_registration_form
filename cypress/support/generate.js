// function generateUser() {
//   const firstName = " ";
//   const LastName = " ";
//   const email = `('')@mail.com`;
// return {email, firstName, lastName}
// };

// module.exports = {generateUser};

const { Faker } = require('@faker-js/faker');

function generateUser() {
  let randomIndex = Math.floor(Math.random() * 2);
  let genders = ['Male', 'Female', 'Other'];
  return {
    firstName: Faker.name.firstName(),
    lastName: Faker.name.lastName(),
    email: Faker.internet.email(),
    gender: genders[randomIndex],
    mobileNumber: Faker.phone.phoneNumberFormat(),
    birthDate: Faker.date.past(30),
  };
}

module.exports = { generateUser };