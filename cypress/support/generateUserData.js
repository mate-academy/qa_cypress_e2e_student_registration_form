const { faker } = require('@faker-js/faker');

function generateUserData () {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const email = faker.internet.email();
  const genderId = Math.floor(Math.random() * 3) + 1;
  const genderIdMapping =
      {
        1: 'Male',
        2: 'Female',
        3: 'Other'
      };
  const mobile = Array.from({ length: 10 }, () =>
    Math.floor(Math.random() * 10)).join('');
  const dateOfBirth = generateRandomBirthDate();
  const subjects = randomSubject();
  const hobbiesId = Math.floor(Math.random() * 3) + 1;
  const currentAddress = faker.location.streetAddress();
  const { city, state } = randomStateCity();

  return {
    firstName,
    lastName,
    email,
    genderId,
    mobile,
    dateOfBirth,
    subjects,
    hobbiesId,
    currentAddress,
    city,
    state,
    genderIdMapping
  };
}

function randomSubject() {
  const subjects = [
    'Chemistry', 'Maths', 'Computer Science', 'Commerce',
    'Economics', 'Physics', 'Accounting', 'Arts', 'Social Studies',
    'History', 'Biology', 'English', 'Hindi', 'Civics'
  ];
  const randomIndex = Math.floor(Math.random() * subjects.length);

  return subjects[randomIndex];
}

function randomStateCity() {
  const stateAndCity = [
    {
      state: 'NCR',
      cities: ['Delhi', 'Gurgaon', 'Noida']
    },
    {
      state: 'Uttar Pradesh',
      cities: ['Agra', 'Lucknow', 'Merrut']
    },
    {
      state: 'Haryana',
      cities: ['Karnal', 'Panipat']
    },
    {
      state: 'Rajasthan',
      cities: ['Jaipur', 'Jaiselmer']
    }
  ];

  const statesLength = stateAndCity.length;
  const randomState = Math.floor(Math.random() * statesLength);
  const cityLength = stateAndCity[randomState].cities.length;
  const randomCity = Math.floor(Math.random() * cityLength);
  const state = stateAndCity[randomState].state;
  const city = stateAndCity[randomState].cities[randomCity];

  return { state, city };
}

function generateRandomBirthDate() {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const year = Math.floor(Math.random() * (2025 - 1950 + 1)) + 1950;
  const monthIndex = Math.floor(Math.random() * 12);
  const day = Math.floor(Math.random() * 28) + 1;

  return `${day} ${months[monthIndex]},${year}`;
}

module.exports = { generateUserData };
