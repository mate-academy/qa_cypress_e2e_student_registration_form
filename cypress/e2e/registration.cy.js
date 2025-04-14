/// <reference types='cypress' />

const { generateUser } = require('../support/generate');

describe('Student Registration page', () => {
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
    cy.viewport(1000, 1200);
  });

  it('should be able to register new student', () => {
    const { firstName, lastName, email, phoneNumber, adress } = generateUser();

    cy.get('#firstName').type(firstName);
    cy.get('#lastName').type(lastName);
    cy.get('#userEmail').type(email);
    // eslint-disable-next-line cypress/no-force
    cy.get('input#gender-radio-3').check({ force: true });
    cy.get('#userNumber').type(phoneNumber);
    cy.get('#dateOfBirthInput').click();
    cy.get('select.react-datepicker__month-select').select('March');
    cy.get('select.react-datepicker__year-select').select('1990');
    cy.get('.react-datepicker__day--018').click();
    // eslint-disable-next-line cypress/unsafe-to-chain-command
    cy.get('#subjectsContainer').click().type('Maths{enter}');
    // eslint-disable-next-line cypress/no-force
    cy.get('input#hobbies-checkbox-1').check({ force: true });
    // eslint-disable-next-line cypress/no-force
    cy.get('input#hobbies-checkbox-3').check({ force: true });
    cy.get('#currentAddress').type(adress);
    cy.get('#state').click();
    cy.get('#react-select-3-option-0').click();
    cy.get('#city').click();
    cy.get('#react-select-4-option-0').click();
    cy.get('#submit').click();
    // asserting inputed data in modal window
    cy.get('.modal-body').should('contain.text', `${firstName} ${lastName}`);
    cy.get('.modal-body').should('contain.text', `${email}`);
    cy.get('.modal-body').should('contain.text', 'Other');
    cy.get('.modal-body').should('contain.text', `${phoneNumber}`);
    cy.get('.modal-body').should('contain.text', '18 March,1990');
    cy.get('.modal-body').should('contain.text', 'Maths');
    cy.get('.modal-body').should('contain.text', 'Sports, Music');
    cy.get('.modal-body').should('contain.text', `${adress}`);
    cy.get('.modal-body').should('contain.text', 'NCR Delhi');
  });
});
