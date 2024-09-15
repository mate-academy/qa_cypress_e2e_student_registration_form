const { defineConfig } = require('cypress');
const faker = require('faker');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com/automation-practice-form',
    viewportHeight: 1380,
    viewportWidth: 1280,
    setupNodeEvents(on, config) {
      on('task', {
        generateUser() {
          const randomIndex = Math.floor(Math.random() * 2);
          const genders = ['Male', 'Female', 'Other'];
          const randomDay = Math.floor(Math.random() * 28) + 1;
          const randomMonth = Math.floor(Math.random() * 12);
          const randomYear = Math.floor(Math.random() * 100) + 1923;
          const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
          const randomIndexVowels = Math.floor(Math.random() * 5);
          const hobbies = ['Sports', 'Reading', 'Music'];
          const months = ['January', 'February', 'March', 'April', 'May',
            'June', 'July', 'August', 'September', 'October', 'November',
            'December'];

          return {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            gender: genders[randomIndex],
            phone: faker.phone.phoneNumber('##########'),
            birthDate: `${randomDay} ${months[randomMonth]},${randomYear}`,
            vowel: vowels[randomIndexVowels],
            hobbie: hobbies[randomIndex],
            address: faker.address.streetAddress()
          };
        }
      });
    }
  }
});
