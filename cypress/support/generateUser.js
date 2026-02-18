const { faker } = require('@faker-js/faker');

function generateUser() {
  let sex = faker.person.sexType();
  if (sex !== 'male' && sex !== 'female') {
    sex = 'other';
  }
  let firstName;
  if (sex === 'male' || sex === 'female') {
    firstName = faker.person.firstName(sex);
  } else {
    firstName = faker.person.firstName();
  }

  const lastName = faker.person.lastName();
  const email = faker.internet.email({ firstName, lastName });
  const first = '0';
  const phone = first + Array.from(
    { length: 9 }, () => Math.floor(Math.random() * 10)).join('');
  const streets = [
    'Baker street',
    'Manthettan',
    'Willington'
  ];
  const street = streets[
    Math.floor(Math.random() * streets.length)
  ] + ' ' + (Math.floor(Math.random() * 200) + 1);
  const postal = String(10000 + Math.floor(Math.random() * 90000));
  const stateCityMap = {
    NCR: ['Delhi', 'Gurgaon', 'Noida'],
    'Uttar Pradesh': ['Agra', 'Lucknow', 'Merrut'],
    Haryana: ['Karnal', 'Panipat'],
    Rajasthan: ['Jaipur', 'Jaiselmer']
  };
  const states = Object.keys(stateCityMap);
  const state = states[Math.floor(Math.random() * states.length)];
  const cities = stateCityMap[state];
  const city = cities[Math.floor(Math.random() * cities.length)];
  const address = `${street}, ${city}, ${postal}`;
  const hobbies = ['sports', 'reading', 'music'];
  const hobby = hobbies[
    Math.floor(Math.random() * 3)
  ];

  return {
    firstName,
    lastName,
    email,
    phone,
    address,
    sex,
    hobby,
    state,
    city
  };
}

module.exports = {
  generateUser
};
