const faker = require('faker');

function generateUser() {
  const firstName = faker.name.firstName();
  const lastNmae = faker.name.lastName();
  const email = faker.internet.email();
  const randomGender = Math.floor(Math.random() * 3) + 1; // Generate random gender where 1 - Male, 2 - Female, 3 - Other
  const number = faker.phone.phoneNumber('##########');
  const birthDate = faker.date.past();
  const randomHobbies = Math.floor(Math.random() * 3) + 1; // Generate random gender where 1 - Sports, 2 - Reading, 3 - Music
  const address = faker.address.streetAddress();

  return {
    firstName,
    lastNmae,
    email,
    randomGender,
    number,
    birthDate,
    randomHobbies,
    address
  };
};

module.exports = { generateUser };
