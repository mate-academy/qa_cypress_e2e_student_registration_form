const { faker } = require('@faker-js/faker');

function generateUserData() {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const email = faker.internet.email();
  const mobile = faker.phone.number('38067#####');
  const dateOfBirth = faker.date.birthdate();

  const gender = faker.helpers.arrayElement(['Male', 'Female', 'Other']);
  const hobby = faker.helpers.arrayElement(['Sports', 'Reading', 'Music']);
  const subject = faker.helpers.arrayElement(['Maths', 'English', 'Hindi']);

  const states = ['NCR', 'Uttar Pradesh', 'Haryana', 'Rajasthan'];
  const citiesByState = {
    NCR: ['Delhi', 'Gurgaon', 'Noida'],
    'Uttar Pradesh': ['Agra', 'Lucknow', 'Merrut'],
    Haryana: ['Karnal', 'Panipat'],
    Rajasthan: ['Jaipur', 'Jaiselmer']
  };
  const state = faker.helpers.arrayElement(states);
  const city = faker.helpers.arrayElement(citiesByState[state]);

  return {
    firstName,
    lastName,
    email,
    mobile,
    dateOfBirth,
    subject,
    gender,
    hobby,
    state,
    city
  };
}

module.exports = { generateUserData };
