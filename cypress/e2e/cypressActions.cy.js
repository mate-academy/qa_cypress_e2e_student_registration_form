/// <reference types='cypress' />
const { newUser } = require('/home/maryana/cypress_third_hw/cypress/e2e/user');

describe('Name of the group', () => {
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form')
    cy.viewport(600, 1000);
  });

  it('should fill and submit the registration form', () => {
    const { firstName, lastName, email, mobile, address} = newUser();

    cy.findByPlaceholder('First Name')
    .type(firstName);

    cy.findByPlaceholder('Last Name')
    .type(lastName);

    cy.findByPlaceholder('name@example.com')
    .type(email);

    cy.get('[for="gender-radio-2"]')
    .click();

    cy.findByPlaceholder('Mobile Number')
    .type(mobile);

    cy.get('#dateOfBirthInput')
    .click();

    cy.get('.react-datepicker__year-select')
    .select('2004');

    cy.get('.react-datepicker__day--029')
    .click();

    cy.get('.subjects-auto-complete__value-container')
    .type('Maths{enter}');


    cy.get('div.custom-checkbox:nth-child(2) > label:nth-child(2)')
    .click();

    cy.findByPlaceholder('Current Address')
    .type(address);

    cy.get('#state > .css-yk16xz-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer')
    .type('NCR{enter}')

    cy.get ('[id="city"]')
    .type('Delhi{enter}');

    cy.get('[class="btn btn-primary"]')
    .click();

    cy.contains('Thanks for submitting the form')
    .should('be.visible');

    cy.get('.modal-body')
    .should('contain', firstName)
    .and('contain', lastName)
    .and('contain', email)
    .and('contain', 'Female')
    .and('contain', mobile)
    .and('contain', '29 August,2004')
    .and('contain', 'Maths')
    .and('contain', 'Reading')
    .and('contain', address)
    .and('contain', 'NCR Delhi');









  });
});
