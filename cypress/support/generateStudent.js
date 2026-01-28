const { faker } = require('@faker-js/faker');

function generateStudent() {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const studentEmail = faker.internet.email({ firstName, lastName });
  const gender = 'Female';
  const mobile = faker.string.numeric(10);
  const dateOfBirth = faker.date.birthdate({ mode: 'age', min: 18, max: 65 });
  const subjects = ['Maths', 'Accounting', 'Arts'];
  const hobbies = ['Sports', 'Music'];
  const address = `${faker.location.street()}, ${faker.location.buildingNumber()}`;
  const state = 'NCR';
  const city = 'Delhi';

  return {
    studentName: `${firstName} ${lastName}`,
    studentEmail,
    gender,
    mobile,
    dateOfBirth,
    subjects,
    hobbies,
    address,
    stateAndCity: `${state} ${city}`
  };
}

module.exports = {
  generateStudent
};
