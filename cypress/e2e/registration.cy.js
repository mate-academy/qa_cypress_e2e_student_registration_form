/// <reference types='cypress' />

const faker = require('faker');
const name = faker.name.firstName();
const lastNmae = faker.name.lastName();
const email = faker.internet.email();
const currentAddress = faker.address.streetAddress();
const fakePhoneNumber = 1234567890;
describe('Student Registration page', () => {
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
    cy.viewport(1920, 1080);
  });

  it('Fill all required fields', () => {
    cy.get('[placeholder="First Name"]').type(name);
    cy.get('[placeholder="Last Name"]').type(lastNmae);
    cy.get('[placeholder="name@example.com"]').type(email);
    cy.get('[for="gender-radio-3"]').click();
    cy.get('[placeholder="Mobile Number"]').type(fakePhoneNumber);
    cy.get('[id="dateOfBirthInput"]').click();
    cy.get('[class="react-datepicker__year-select"]').select('1990');
    cy.get('[class="react-datepicker__month-select"]').select('August');
    cy.get(
      '[class="react-datepicker__day react-datepicker__day--013"]'
    ).click();
    cy.get('[class="subjects-auto-complete__input"]').type('ajsdojad');
    cy.get('.custom-checkbox [for="hobbies-checkbox-3"]').click();
    cy.get('[placeholder="Current Address"]').type(currentAddress);
    cy.get('#state').type('Haryana{enter}');
    cy.get('#city').type('Panipat{enter}');
    cy.get('#submit').click();

    cy.get('.modal-content').should('exist');
    cy.get('.modal-header').should(
      'contain',
      'Thanks for submitting the form'
    );
    cy.get('.modal-body').should('contain', email);
    cy.get('.modal-body').should('contain', name);
    cy.get('.modal-body').should('contain', 'Other');
    cy.get('.modal-body').should('contain', fakePhoneNumber);
    cy.get('.modal-body').should('contain', 'Music');
    cy.get('.modal-body').should('contain', currentAddress);
    cy.get('.modal-body').should('contain', 'Haryana Panipat');
  });
});
