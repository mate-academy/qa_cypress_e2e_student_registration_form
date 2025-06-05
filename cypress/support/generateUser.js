const { faker } = require('@faker-js/faker');

function generateUser() {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const email = `${firstName}@gmail.com`;
  const phone = cellGenerator();
  const dob = faker.date.birthdate();
  const day = dob.getDate().toString().padStart(2, '0');
  const month = dob.toLocaleString('en-US', { month: 'short' });
  const year = dob.getFullYear();
  const DOB = `${day} ${month} ${year}`;
  const address = faker.location.streetAddress();
  const letter = faker.string.alpha(10).toLowerCase().split('');
  const gender = faker.number.int({ min: 1, max: 3 });
  const state = faker.number.int({ min: 0, max: 4 });

  function cellGenerator() {
    let result = '';

    for (let i = 0; i < 10; i++) {
      result += faker.number.int();
    }
    return result;
  }
  return {
    firstName,
    lastName,
    email,
    phone,
    DOB,
    address,
    letter,
    gender,
    state
  };
}

module.exports = { generateUser };
