const { faker } = require('@faker-js/faker');

function generateNew() {
  const index = Math.floor(Math.random() * 3);
  const indexState = Math.floor(Math.random() * 4);
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const email = faker.internet.email();
  const password = faker.internet.password();
  const mobile = faker.phone.number('##########');
  const gender = ['Male', 'Female', 'Other'];
  const hobbies = ['Sports', 'Reading', 'Music'];
  const address = faker.location.streetAddress();
  const subject = 'English';
  const state = ['NCR', 'Uttar Pradesh', 'Haryana', 'Rajasthan'];
  const cities = {
    NCR: ['Delhi', 'Gurgaon', 'Noida'],
    'Uttar Pradesh': ['Agra', 'Lucknow', 'Merrut'],
    Haryana: ['Karnal', 'Panipat'],
    Rajasthan: ['Jaipur', 'Jaiselmer']
  };

  const cityIndex = Math.floor(Math.random() *
  cities[state[indexState]].length);
  const randomCity = cities[state[indexState]][cityIndex];
  return {
    firstName,
    lastName,
    email,
    password,
    mobile,
    gender: gender[index],
    hobbies: hobbies[index],
    address,
    subject,
    state: state[indexState],
    city: randomCity
  };
}

module.exports = { generateNew };
