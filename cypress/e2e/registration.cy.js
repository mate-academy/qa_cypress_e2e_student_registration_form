/// <reference types='cypress' />
/// ---
function generateRandomEnglishString(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

  let randomString = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomString += characters[randomIndex];
  }

  return randomString;
};

function generateRandomEmail() {
  const firstName = generateRandomEnglishString(5);
  const lastName = generateRandomEnglishString(10);
  const domain1 = generateRandomEnglishString(7);
  const domain2 = generateRandomEnglishString(4);
  return `${firstName}.${lastName}@${domain1}.${domain2}`;
};

const testData = {
  firstName: generateRandomEnglishString(5),
  lastName: generateRandomEnglishString(10),
  email: generateRandomEmail(),
  mobileNumber: Math.floor(Math.random() * 9999999999) + 999999999,
  birthDay: (Math.floor(Math.random() * 28) + 1).toString(),
  birthMonth: Math.floor(Math.random() * 12),
  birthYear: (Math.floor(Math.random() * (2100 - 1900 + 1)) + 1900).toString(),
  randomGender: (Math.floor(Math.random() * 3) + 1).toString(),
  randomHabbit1: (Math.floor(Math.random() * 3) + 1).toString(),
  randomHabbit2: (Math.floor(Math.random() * 3) + 1).toString(),
  randomHabbit3: (Math.floor(Math.random() * 3) + 1).toString()
};
/// ---
describe('Student Registration page', () => {
  beforeEach(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('shoud register a new student', () => {
    cy.get('#firstName').type(testData.firstName);
    cy.get('#lastName').type(testData.lastName);
    cy.get('#userEmail').type(testData.email);

    cy.get(`[for="gender-radio-${testData.randomGender}"]`).click();

    cy.get('#userNumber').type(testData.mobileNumber);

    cy.get('#dateOfBirthInput').click();
    cy.birthDate('month-select').select(testData.birthMonth);
    cy.birthDate('year-select').select(testData.birthYear);
    cy.birthDate('month').contains(testData.birthDay).click();

    cy.get('.subjects-auto-complete__value-container').type(
      'En{downarrow}{enter}' + 'En{enter}'
    );

    cy.hobbies(testData.randomHabbit1).click();
    cy.hobbies(testData.randomHabbit2).click();
    cy.hobbies(testData.randomHabbit3).click();

    cy.get('#currentAddress').type(
      `Name:${testData.firstName} ${testData.lastName};
email:${testData.email}; mobile:${testData.mobileNumber};
birthDay:${testData.birthDay}; birthMonth:${testData.birthMonth};
birthYear:${testData.birthYear}; Gender:${testData.randomGender};
Habbits:${testData.randomHabbit1},${testData.randomHabbit2},${testData.randomHabbit3}`
    );

    cy.get('#state').type('{downarrow}{enter}');
    cy.get('#city').type('{downarrow}{enter}');

    // cy.get('#submit').click();
  });
});
