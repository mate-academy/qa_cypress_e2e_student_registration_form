const { faker } = require('@faker-js/faker');

const gender = {
  1: 'Male',
  2: 'Female',
  3: 'Other'
};

function generateUser() {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const email = faker.internet.email();
  const genderId = Math.floor(Math.random() * 3) + 1;
  const mobile = faker.string.numeric(10);
  const date = faker.date.past({ years: 20 });
  const day = date.getDate().toString().padStart(2, '0');
  const month = date.toLocaleString('en-US', { month: 'long' });
  const year = date.getFullYear().toString();
  const subjects = ['Chemistry', 'Maths'];
  const hobbies = ['Sports', 'Reading', 'Music'];
  const address = faker.location.streetAddress();
  const state = 'NCR';
  const city = 'Delhi';

  return {
    firstName,
    lastName,
    email,
    genderId,
    mobile,
    day,
    month,
    year,
    subjects,
    hobbies,
    address,
    state,
    city
  };
}

module.exports = {
  generateUser,
  gender
};
