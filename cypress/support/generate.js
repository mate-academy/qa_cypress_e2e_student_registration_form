const faker = require('faker');

function generateUser() {
  const randomNumber = generateNumber(2);
  const genders = ['Male', 'Female', 'Other'];
  const subjects = ['English', 'Chemistry', 'Computer Science', 'Commerce',
    'Economics', 'Social Studies'];
  const hobbies = ['Sports', 'Reading', 'Music'];
  const states = ['NCR', 'Uttar Pradesh', 'Haryana', 'Rajasthan'];

  const firstName = faker.internet.userName() + '_' + randomNumber;
  const lastName = faker.internet.userName() + '_' + randomNumber;
  const email = `${lastName}@mail.com`;
  const gender = generateSomeOption(genders, genders.length);
  const hobby = generateSomeOption(hobbies, hobbies.length);
  const mobile = generateNumber(10);
  const birth = generateBirthDate();
  const subjectRandom = generateSomeOption(subjects, subjects.length);
  const address = faker.address.streetAddress();
  const state = generateSomeOption(states, states.length);
  const city = generateCity(state);

  return {
    firstName,
    lastName,
    email,
    gender,
    hobby,
    mobile,
    birth,
    subjectRandom,
    address,
    state,
    city
  };
}

function generateCity(state) {
  const cityForNcr = ['Delhi', 'Gurgaon', 'Noida'];
  const cityForUttar = ['Agra', 'Lucknow', 'Merrut'];
  const cityForHaryana = ['Karnal', 'Panipat'];
  const cityForRajasthan = ['Jaipur', 'Jaiselmer'];

  switch (state) {
    case 'NCR': return generateSomeOption(cityForNcr,
      cityForNcr.length);
    case 'Uttar Pradesh': return generateSomeOption(cityForUttar,
      cityForUttar.length);
    case 'Haryana': return generateSomeOption(cityForHaryana,
      cityForHaryana.length);
    case 'Rajasthan': return generateSomeOption(cityForRajasthan,
      cityForRajasthan.length);
  }
}

function generateNumber(numberOfdigits) {
  let randomNumber = '';
  for (let i = 0; i < numberOfdigits; i++) {
    randomNumber += Math.floor(Math.random() * numberOfdigits);
  }

  return randomNumber;
}

function generateBirthDate() {
  const today = new Date();
  const currentYear = today.getFullYear();
  const minPossibleYear = currentYear - 50;
  const maxPossibleYear = currentYear - 16;
  const randomYear = Math.floor(Math.random() *
  (maxPossibleYear - minPossibleYear + 1)) + minPossibleYear;
  const monthAbbr = faker.date.month({ abbr: true });
  const randomMonthForDays = Math.floor(Math.random() * 12) + 1;
  const daysInMonth = new Date(randomYear, randomMonthForDays, 0).getDate();
  const randomDay = Math.floor(Math.random() * daysInMonth) + 1;

  return {
    year: randomYear,
    month: monthAbbr,
    day: randomDay
  };
}

function generateSomeOption (arrayOfOptions, lengthArray) {
  const randomIndex = Math.floor(Math.random() * lengthArray);
  const randomOption = arrayOfOptions[randomIndex];

  return randomOption;
}

module.exports = { generateUser };
