const { faker } = require('@faker-js/faker');

module.exports = registerNewUser;

function registerNewUser() {
  const randomIndex = Math.floor(Math.random() * 3);
  const randomStateIndex = Math.floor(Math.random() * 4);
  const genders = ['Male', 'Female', 'Other'];
  const randomDay = Math.floor(Math.random() * 29);
  const months = ['January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August', 'September', 'October',
    'November', 'December'];
  const randomMonthIndex = Math.floor(Math.random() * 12);
  const randomYear = Math.floor(Math.random() * 38 + 1980);
  const subjects = ['Math', 'Science', 'History',
    'Reading', 'Writing', 'Music', 'Foreign language',
    'Geography', 'Art', 'Physics', 'Chemistry'];
  const hobbie = ['Sports', 'Reading', 'Music'];
  const state = ['NCR', 'Uttar Pradesh', 'Haryana', 'Rajasthan'];
  const cities = {
    NCR: ['Delhi', 'Gurgaon', 'Noida'],
    'Uttar Pradesh': ['Agra', 'Lucknow', 'Merrut'],
    Haryana: ['Karnal', 'Panipat'],
    Rajasthan: ['Jaipur', 'Jaiselmer']
  };
  const randomCityIndex = Math.floor(
    Math.random() * cities[state[randomStateIndex]].length);

  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    gender: genders[randomIndex],
    mobile: faker.phone.number('##########'),
    dateOfBirth: `${randomDay} ${months[randomMonthIndex]},${randomYear}`,
    subjects: subjects[randomMonthIndex],
    hobbie: hobbie[randomIndex],
    address: faker.location.streetAddress(),
    state: state[randomStateIndex],
    city: cities[state[randomStateIndex]][randomCityIndex]
  };
}
