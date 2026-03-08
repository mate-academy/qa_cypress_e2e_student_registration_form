describe('DemoQA Practice Form', () => {
  it('fills the form and validates modal data', () => {
    cy.visit('https://demoqa.com/automation-practice-form');

    // --- Fill text fields ---
    cy.get('#firstName').type('John');
    cy.get('#lastName').type('Doe');
    cy.get('#userEmail').type('john.doe@example.com');

    // --- Gender ---
    cy.contains('label', 'Male').click();

    // --- Mobile ---
    cy.get('#userNumber').type('1234567890');

    // --- Date of Birth ---
    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__year-select').select('1990');
    cy.get('.react-datepicker__month-select').select('May');
    cy.get('.react-datepicker__day--015').click();

    // --- Subjects ---
    cy.get('#subjectsInput').type('Math{enter}');
    cy.get('#subjectsInput').type('English{enter}');

    // --- Hobbies ---
    cy.contains('label', 'Sports').click();
    cy.contains('label', 'Reading').click();

    // --- Current Address ---
    cy.get('#currentAddress').type('123 Cypress Lane');

    // --- State & City ---
    cy.get('#state').click();
    cy.contains('#state div', 'NCR').click();

    cy.get('#city').click();
    cy.contains('#city div', 'Delhi').click();

    // --- Submit ---
    cy.get('#submit').click();

    // --- Assertions in Modal ---
    cy.get('.modal-content').should('be.visible');

    cy.get('td').contains('Student Name')
      .next().should('have.text', 'John Doe');

    cy.get('td').contains('Student Email')
      .next().should('have.text', 'john.doe@example.com');

    cy.get('td').contains('Gender')
      .next().should('have.text', 'Male');

    cy.get('td').contains('Mobile')
      .next().should('have.text', '1234567890');

    cy.get('td').contains('Date of Birth')
      .next().should('contain.text', '15 May,1990');

    cy.get('td').contains('Subjects')
      .next().should('contain.text', 'Math')
      .and('contain.text', 'English');

    cy.get('td').contains('Hobbies')
      .next().should('contain.text', 'Sports')
      .and('contain.text', 'Reading');

    cy.get('td').contains('Address')
      .next().should('have.text', '123 Cypress Lane');

    cy.get('td').contains('State and City')
      .next().should('have.text', 'NCR Delhi');
  });
});
