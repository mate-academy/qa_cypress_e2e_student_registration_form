describe('Student Registration Form', () => {
  it('fills the form (without picture), submits and asserts modal data', () => {
    cy.visit('/automation-practice-form');

    // Fill basic fields
    cy.get('#firstName').type('John');
    cy.get('#lastName').type('Doe');
    cy.get('#userEmail').type('john.doe@example.com');

    // Select gender by clicking label (no force)
    cy.get('label[for="gender-radio-1"]').click();

    cy.get('#userNumber').type('1234567890');

    // Date of Birth
    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__year-select').select('1990');
    cy.get('.react-datepicker__month-select').select('May');
    cy.get('.react-datepicker__day--015').click();

    // Subjects
    cy.get('#subjectsInput').type('Maths{enter}');

    // Hobbies
    cy.get('label[for="hobbies-checkbox-1"]').click(); // Sports

    // Address
    cy.get('#currentAddress').type('123 Test Street');

    // State & City
    cy.get('#state').click();
    cy.contains('NCR').click();
    cy.get('#city').click();
    cy.contains('Delhi').click();

    // Submit (no force)
    cy.get('#submit').click();

    // Assert modal content
    cy.get('.modal-content').should('be.visible');

    cy.get('td')
      .contains('Student Name')
      .next()
      .should('have.text', 'John Doe');

    cy.get('td')
      .contains('Student Email')
      .next()
      .should('have.text', 'john.doe@example.com');

    cy.get('td')
      .contains('Gender')
      .next()
      .should('have.text', 'Male');

    cy.get('td')
      .contains('Mobile')
      .next()
      .should('have.text', '1234567890');

    cy.get('td')
      .contains('Date of Birth')
      .next()
      .should('contain.text', '15 May,1990');

    // ✅ Additional assertions
    cy.get('td')
      .contains('Subjects')
      .next()
      .should('have.text', 'Maths');

    cy.get('td')
      .contains('Hobbies')
      .next()
      .should('have.text', 'Sports');

    cy.get('td')
      .contains('Address')
      .next()
      .should('have.text', '123 Test Street');

    cy.get('td')
      .contains('State and City')
      .next()
      .should('have.text', 'NCR Delhi');
  });
});
