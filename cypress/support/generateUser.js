const { faker } = require('@faker-js/faker');

function generateUser() {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const email = faker.internet.email({ firstName, lastName });
  const gender = faker.helpers.arrayElement(['Male', 'Female', 'Other']);
  const mobileNumber = faker.string.numeric({ length: 10 });
  const dateOfBirth = faker.date.between(
    { from: '1970-01-01', to: '2005-12-31' }
  );
  const birthDay = dateOfBirth.getDate().toString();
  const birthMonth = dateOfBirth.toLocaleDateString('en-US', { month: 'long' });
  const birthYear = dateOfBirth.getFullYear().toString();
  const subjects = faker.helpers.arrayElements(
    ['English', 'Chemistry', 'History', 'Commerce', 'Hindi', 'Maths', 'Arts']
  );
  const hobbies = faker.helpers.arrayElements(['Sports', 'Reading', 'Music']);
  const picture = '';
  const currentAddress = faker.location.streetAddress(true);
  const locations = {
    NCR: ['Delhi', 'Gurgaon', 'Noida'],
    'Uttar Pradesh': ['Agra', 'Lucknow', 'Merrut'],
    Haryana: ['Karnal', 'Panipat'],
    Rajasthan: ['Jaipur', 'Jaiselmer']
  };
  const state = faker.helpers.arrayElement(Object.keys(locations));
  const city = faker.helpers.arrayElement(locations[state]);

  return {
    firstName,
    lastName,
    email,
    gender,
    mobileNumber,
    birthDate: { birthDay, birthMonth, birthYear },
    subjects,
    hobbies,
    picture,
    currentAddress,
    state,
    city
  };
}

module.exports = { generateUser };
