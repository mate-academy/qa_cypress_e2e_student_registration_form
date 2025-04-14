const { defineConfig } = require('cypress');
const faker = require('faker');
const ncrCities = ['Delhi', 'Gurgaon', 'Noida'];
const uttarCities = ['Agra', 'Lucknow', 'Merrut'];
const haryanaCities = ['Karnal', 'Panipat'];
const rajastanCities = ['Jaipur', 'Jaiselmer'];

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com',
    setupNodeEvents(on, config) {
      on('task', {
        generateUser() {
          const randomIndex = Math.floor(Math.random() * 3);
          const anotherRandomIndex = Math.floor(Math.random() * 3);
          const genders = ['Male', 'Female', 'Other'];
          const hobbies = ['Sports', 'Reading', 'Music'];
          const months = [
            'January', 'February', 'March', 'April',
            'May', 'June', 'July',
            'August', 'September', 'October',
            'November', 'December'
          ];
          const day = zeroToDigitAddatinator(Math.floor(Math.random() * 30));
          const month = months[Math.floor(Math.random() * 12)];
          const year = Math.floor(Math.random() * 30 + 1997);
          const subjects = [
            'English', 'Chemistry', 'Computer Sience', 'Commers',
            'Economics', 'Social Studies', 'Arts', 'History', 'Accounting'
          ];
          const states = ['NCR', 'Uttar Pradesh', 'Haryana', 'Rajasthan'];
          const randomState = states[Math.floor(Math.random() * states.length)];
          return {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            mobile: faker.phone.phoneNumber('##########'),
            password: '12345Qwert!',
            address: faker.address.streetAddress(),
            gender: genders[randomIndex],
            hobby: hobbies[anotherRandomIndex],
            birth: day + ' ' + month + ' ' + year,
            birthAccertFormat: `${day} ${month},${year}`,
            subject: takeRandomAmount(subjects),
            state: randomState,
            city: cityStrategy(randomState)
          };
        }
      });
    }
  }
});

function takeRandomAmount(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  const randomSubjects = [];

  for (let i = 0; i <= randomIndex; i++) {
    const anotherRandomIndex = Math.floor(Math.random() * array.length);
    randomSubjects.push(array[anotherRandomIndex]);
  }

  const set = new Set(randomSubjects);
  const noDuplicates = Array.from(set);

  return noDuplicates;
}

function cityStrategy(state) {
  switch (state) {
    case 'NCR':
      return ncrCities[Math.floor(Math.random() * ncrCities.length)];
    case 'Uttar Pradesh':
      return uttarCities[Math.floor(Math.random() * uttarCities.length)];
    case 'Haryana':
      return haryanaCities[Math.floor(Math.random() * haryanaCities.length)];
    default:
      return rajastanCities[Math.floor(Math.random() * rajastanCities.length)];
  }
}

function zeroToDigitAddatinator(day) {
  if (day.length === 1) {
    day = '0' + day;
  }
  return day;
}
