describe('Student Registration page', () => {
  beforeEach(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  const { generateNew } = require('../support/generate');

  describe('User registration', () => {
    // eslint-disable-next-line max-len
    it('should allow user to register filling all fields with valid data', () => {
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

      cy.get('.table-responsive').within(() => {
        cy.contains(`${firstName} ${lastName}`).should('exist');
        cy.contains(email).should('exist');
        cy.contains(gender).should('exist');
        cy.contains(mobile).should('exist');
        cy.contains('15 May,2000').should('exist');
        cy.contains(subject).should('exist');
        cy.contains(hobbies).should('exist');
        cy.contains(address).should('exist');
        cy.contains(`${state} ${city}`).should('exist');
      });
    });
  });
});
