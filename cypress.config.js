const { defineConfig } = require('cypress');

function generateUser() {
  const randomNumber = Math.floor(Math.random() * 1000000);
  const firstName = `TestFirstName${randomNumber}`;
  const lastName = `TestLastName${randomNumber}`;
  const email = `test${randomNumber}@example.com`;
  const mobile = `678${Math.floor(1000000 + Math.random() * 9000000)}`;
  const birthYear = '1990';
  const birthMonth = 'January';
  const birthDay = '01';
  const subject = 'QA Engineering';
  const hobbies = 'Sports';
  const address = 'Old Town Jaipur';
  const state = 'Rajasthan';
  const city = 'Jaipur';

  return {
    firstName,
    lastName,
    email,
    gender: 'Female',
    mobile,
    birthYear,
    birthMonth,
    birthDay,
    subject,
    hobbies,
    address,
    state,
    city
  };
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Тут можна додати обробники подій
    },
    baseUrl: 'https://demoqa.com/automation-practice-form',
    env: generateUser()
  }
});
