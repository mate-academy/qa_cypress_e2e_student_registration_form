const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl: 'https://demoqa.com/automation-practice-form',
    env: {
      firstName: 'Mira',
      lastName: 'Johnsonyk',
      email: 'miratest123@ukr.net',
      gender: 'Female',
      mobile: '678456123',
      birthYear: '1990',
      birthMonth: 'January',
      birthDay: '01',
      subject: 'QA Engineering',
      hobbies: 'Sports',
      address: 'Old Town Jaipur',
      state: 'Rajasthan',
      city: 'Jaipur'
    }
  }
});
