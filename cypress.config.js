const { defineConfig } = require('cypress')
const { faker } = require('@faker-js/faker');
//import { faker } from '@faker-js/faker';
module.exports = defineConfig({
  e2e: {
  
    baseUrl: 'https://demoqa.com/automation-practice-form',
    viewportHeight:1080,
    viewportWidth:1320,
    setupNodeEvents(on, config) {
     on('task', {
        generateUser() {
          randomIndex = Math.floor(Math.random() * 3);
          genders = ['Male', 'Female', 'Other'];
          hobbies = ['Sports', 'Reading', 'Music'];
          userEmail = faker.internet.email().toLowerCase()
          return {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: userEmail,
            phoneNumber: faker.phone.phoneNumber('##########'),
            gender: genders[randomIndex],
            hobbies: hobbies[randomIndex],
            birth: {
              month: faker.date.month(),
              year: Math.floor(1990 + Math.random() * 20),
              day: Math.floor(10 + Math.random() * 10) ,
            
            },
            address: faker.address.streetAddress(),
          };
        },
      });
    },
   
  },
});
