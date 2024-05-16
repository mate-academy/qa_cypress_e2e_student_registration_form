const { defineConfig } = require('cypress');
module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com/automation-practice-form',
    setupNodeEvents(on, config) {
      on('task', {
        generateUser() {
          function generateRandomEnglishString(length) {
            const characters =
              'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

            let randomString = '';

            for (let i = 0; i < length; i++) {
              const randomIndex = Math.floor(Math.random() * characters.length);
              randomString += characters[randomIndex];
            }

            return randomString;
          }

          function generateRandomEmail() {
            const firstName = generateRandomEnglishString(5);
            const lastName = generateRandomEnglishString(10);
            const domain1 = generateRandomEnglishString(7);
            const domain2 = generateRandomEnglishString(4);
            return `${firstName}.${lastName}@${domain1}.${domain2}`;
          }

          function funRandomGender() {
            const genders = ['Male', 'Female', 'Other'];
            const random0to2 = Math.floor(Math.random() * 3);
            const gender = genders[random0to2];
            return gender;
          };

          const testData = {
            firstName: generateRandomEnglishString(5),
            lastName: generateRandomEnglishString(10),
            email: generateRandomEmail(),
            mobileNumber:
              Math.floor(Math.random() * (9999999999 - 1000000000 + 1)) +
              1000000000,
            birthDay: (Math.floor(Math.random() * 28) + 1).toString(),
            birthMonth: Math.floor(Math.random() * 12),
            birthYear: (
              Math.floor(Math.random() * (2100 - 1900 + 1)) + 1900
            ).toString(),
            randomGender: funRandomGender(),
            randomHobbie1: (Math.floor(Math.random() * 3) + 1).toString(),
            randomHobbie2: (Math.floor(Math.random() * 3) + 1).toString(),
            randomHobbie3: (Math.floor(Math.random() * 3) + 1).toString()
          };
          return { testData };
        }
      });
    }
  }
});
