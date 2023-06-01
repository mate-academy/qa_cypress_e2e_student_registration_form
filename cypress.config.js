const { defineConfig } = require('cypress')
const faker = require('faker')

const genders = ['Male', 'Female', 'Other'];
const subjects = ['Chemistry', 'English', 'Computer Science'];
const hobbies = ['Sports', 'Reading', 'Music'];

module.exports = defineConfig({
  e2e: {
    viewportHeight: 1080,
    viewportWidth: 1980,
    baseUrl: 'https://demoqa.com/automation-practice-form' , 
    setupNodeEvents(on, config) {
      on("task", {
        
        generateUser() {
      
          return {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            gender: faker.random.arrayElement (genders),
            mobileNumber: faker.phone.phoneNumber('##########'),
            birth: {
                    year: Math.floor(1960 + Math.random() * 60),
                    month: Math.floor(Math.random() * 12),
                    day: Math.floor(10 + Math.random() * 28),
            },
            subject: faker.random.arrayElement (subjects),
            hobby: faker.random.arrayElement (hobbies),
            address: faker.address.streetAddress (),
          };
        },
      });
    },
  },
});
