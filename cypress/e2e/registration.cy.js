/// <reference types='cypress' />

describe('Student Registration Form', () => {
  it('should fill and submit the form', () => {
    cy.visit('/automation-practice-form');

    // Удаляем баннер и футер
    cy.get('#fixedban').invoke('remove');
    cy.get('footer').invoke('remove');

    // Personal info
    cy.get('#firstName').type('Daria');
    cy.get('#lastName').type('Orlova');
    cy.get('#userEmail').type('daria@example.com');
    cy.get('label[for="gender-radio-2"]').click(); // Female
    cy.get('#userNumber').type('0991234567');

    // Date of Birth
    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__year-select').select('1995');
    cy.get('.react-datepicker__month-select').select('June');
    cy.get(
      '.react-datepicker__day--015:not(.react-datepicker__day--outside-month)'
    ).click();

    // Subjects
    cy.get('#subjectsInput').type('Math{enter}');

    // Hobbies
    cy.get('label[for="hobbies-checkbox-1"]').click(); // Sports
    cy.get('label[for="hobbies-checkbox-2"]').click(); // Reading

    // Address
    cy.get('#currentAddress').type('123 Main Street');

    // State and City
    cy.get('#state').parent().click();
    cy.get('.css-26l3qy-menu')
      .should('be.visible')
      .contains('NCR')
      .click({ force: true });

    cy.get('#city').should('not.have.attr', 'disabled');
    cy.get('#city').parent().click();
    cy.get('.css-26l3qy-menu')
      .should('be.visible')
      .contains('Delhi')
      .click({ force: true });

    // Submit
    cy.get('#submit').click({ force: true });

    // Assertions in the modal
    cy.get('.modal-content').should('be.visible');
    cy.get('td').contains('Daria Orlova').should('exist');
    cy.get('td').contains('daria@example.com').should('exist');
    cy.get('td').contains('Female').should('exist');
    cy.get('td').contains('0991234567').should('exist');
    cy.get('td').contains('15 June,1995').should('exist');
    cy.get('td').contains('Math').should('exist');
    cy.get('td').contains('Sports, Reading').should('exist');
    cy.get('td').contains('123 Main Street').should('exist');
    cy.get('td').contains('NCR Delhi').should('exist');
  });
});
