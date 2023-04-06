/// <reference types='cypress' />
const { generateData } = require('../support/generate');

describe('Student Registration page', () => {
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form')
  });

  it('should allow to register', () => {
    const {
      firstName,
      lastName,
      email,
      mobileNumber,
      currentAddress
    } = generateData();

    cy.findByPlaceholder('First Name').type(firstName);
    cy.findByPlaceholder('Last Name').type(lastName);
    cy.findByPlaceholder('name@example.com').type(email);

    cy.findByType('radio').check('Other', { force: true });
    cy.findByType('radio').check('Female', { force: true });
    cy.findByType('radio').check('Male', { force: true });

    cy.findByPlaceholder('Mobile Number').type(mobileNumber);

    cy.get('#dateOfBirthInput').click()
      .get('.react-datepicker__navigation--previous').click().click().click()
      .get('.react-datepicker__month-select').select('September')
      .get('.react-datepicker__year-select').select('2000')
      .get('.react-datepicker__day--011').click();

    cy.get('.subjects-auto-complete__value-container').type('com{enter} p{enter}');

    cy.findByType('checkbox').check('1', { force: true });
    cy.findByType('checkbox').check('3', { force: true });

    cy.findByPlaceholder('Current Address').type(currentAddress);

    cy.get('#state > .css-yk16xz-control').click()
      .get('#react-select-3-option-2').click();

    cy.get('#city > .css-yk16xz-control').click()
      .get('#react-select-4-option-0').click();

    cy.focused().type('{enter}')

    cy.get('#closeLargeModal').click();
  });
});
