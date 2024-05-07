/// <reference types='cypress' />
beforeEach(() => {
  cy.visit('/automation-practice-form');
});

const { generateNew } = require('../support/generate');

describe('Student Registration page', () => {
  it('should allow user to register filling all fields with valid data',
    () => {
      const {
        firstName,
        lastName,
        email,
        mobile,
        subject,
        hobbies,
        gender,
        address,
        state,
        city
      } = generateNew();

      cy.get('input[placeholder*="First Name"]')
        .should('exist')
        .type(firstName);

      cy.get('input[placeholder*="Last Name"]')
        .should('exist')
        .type(lastName);

      cy.get('input[placeholder*="name@example.com"]')
        .should('exist')
        .type(email);

      cy.get('.custom-control-label')
        .contains(gender)
        .click();

      cy.get('input[placeholder*="Mobile Number"]')
        .should('exist')
        .type(mobile);

      cy.get('.subjects-auto-complete__value-container')
        .should('exist')
        .type(subject + '{enter}');

      cy.get('.custom-control-label')
        .contains(hobbies) // if we want to chose only one, in another way it's better to clicks on all (few) options.
        .click();

      cy.get('#dateOfBirthInput')
        .should('exist')
        .click();

      cy.get('.react-datepicker__month-select')
        .should('exist')
        .select('May');

      cy.get('.react-datepicker__year-select')
        .should('exist')
        .select('2000');

      cy.get('.react-datepicker__day--015')
        .click();

      cy.get('#currentAddress')
        .should('exist')
        .type(address);

      cy.get('.css-1wa3eu0-placeholder')
        .should('exist')
        .contains('Select State')
        .type(state + '{enter}');

      cy.get('.css-1wa3eu0-placeholder')
        .should('exist')
        .contains('Select City')
        .type(city + '{enter}');

      cy.get('#submit')
        .should('exist')
        .contains('Submit')
        .click();

      cy.get('.table-responsive')
        .should('contain.text', `${firstName} ${lastName}`);
      cy.get('.table-responsive')
        .should('contain', email);
      cy.get('.table-responsive')
        .should('contain', gender);
      cy.get('.table-responsive')
        .should('contain', mobile);
      cy.get('.table-responsive')
        .should('contain', '15 May,2000');
      cy.get('.table-responsive')
        .should('contain', subject);
      cy.get('.table-responsive')
        .should('contain', hobbies);
      cy.get('.table-responsive')
        .should('contain', address);
      cy.get('.table-responsive')
        .should('contain', `${state} ${city}`);
    });
});
