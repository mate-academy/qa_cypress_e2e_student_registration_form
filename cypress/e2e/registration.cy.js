/// <reference types="cypress" />

describe('Student Registration page', () => {
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('should fill out the form, submit, and verify modal data', () => {
    // Fill personal details
    cy.get('#firstName').type('John');
    cy.get('#lastName').type('Doe');
    cy.get('#userEmail').type('john.doe@example.com');

    // Select gender
    cy.get('label[for="gender-radio-1"]').click();

    // Mobile number
    cy.get('#userNumber').type('1234567890');

    // Date of Birth
    cy.get('#dateOfBirthInput').scrollIntoView();
    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__month-select').select('May');
    cy.get('.react-datepicker__year-select').select('1990');
    cy.get(
      '.react-datepicker__day--015:not(.react-datepicker__day--outside-month)'
    ).click();

    // Verify input format (exact modal format = "15 May,1990")
    cy.get('#dateOfBirthInput').should('have.value', '15 May,1990');

    // Subjects
    cy.get('#subjectsInput').type('Maths{enter}');
    cy.get('.subjects-auto-complete__multi-value')
      .should('contain.text', 'Maths');

    // Hobbies
    cy.get('label[for="hobbies-checkbox-1"]').click(); // Sports
    cy.get('label[for="hobbies-checkbox-2"]').click(); // Reading

    // Current address
    cy.get('#currentAddress').type('123 Main St');

    // State & City
    cy.get('#state').scrollIntoView();
    cy.get('#state').click();
    cy.get('#stateCity-wrapper').contains('NCR').click();

    cy.get('#city').scrollIntoView();
    cy.get('#city').click();
    cy.get('#stateCity-wrapper').contains('Delhi').click();

    // Submit
    cy.get('#submit').scrollIntoView();
    cy.get('#submit').should('be.visible');
    cy.get('#submit').click();

    // Assert modal is visible
    cy.get('.modal-content').should('be.visible');

    // Verify table contents safely
    cy.get('table').within(() => {
      const assertCell = (label, value) => {
        cy.contains('td', label).then(($el) => {
          cy.wrap($el.next()).should('have.text', value);
        });
      };

      assertCell('Student Name', 'John Doe');
      assertCell('Student Email', 'john.doe@example.com');
      assertCell('Gender', 'Male');
      assertCell('Mobile', '1234567890');
      assertCell('Date of Birth', '15 May,1990');
      assertCell('Subjects', 'Maths');
      assertCell('Hobbies', 'Sports, Reading');
      assertCell('Picture', '');
      assertCell('Address', '123 Main St');
      assertCell('State and City', 'NCR Delhi');
    });

    // Close modal and assert it is no longer visible
    cy.get('#closeLargeModal').click();
    cy.get('.modal-content').should('not.exist');
  });
});
