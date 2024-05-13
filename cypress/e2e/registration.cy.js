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
  randomNum1to3: (Math.floor(Math.random() * 3) + 1).toString()
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

    cy.get(`[for="gender-radio-${testData.randomNum1to3}"]`).click();

    cy.get('#userNumber').type(testData.mobileNumber);

    /// --

    // cy.get('#dateOfBirthInput').click();
    // cy.get('.react-datepicker__month-select').select(testData.birthMonth);
    // cy.get('.react-datepicker__year-select').select(testData.birthYear);
    // cy.get('.react-datepicker__month').contains(testData.birthDay).click();

    // cy.get('.subjects-auto-complete__value-container').type(
    //   'En{downarrow}{enter}' + 'En{enter}'
    // );

    // cy.get('[for="hobbies-checkbox-1"]').click();
    // cy.get('[for="hobbies-checkbox-2"]').click();
    // cy.get('[for="hobbies-checkbox-3"]').click();

    // cy.get('#currentAddress').type('Test Addres');

    // cy.get('#state').type('{downarrow}{enter}');
    // cy.get('#city').type('{downarrow}{enter}');

    // cy.get('#submit').click();
  });
});
