/// <reference types='cypress' />

describe('Student Registration page', () => {
  let user;

  before(() => {
    cy.task('generateUser').then((generatedUser) => {
      user = generatedUser;
    });
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('should generate new user', () => {
    cy.get('input[placeholder="First Name"]').type(user.userName);
    cy.get('input[placeholder="Last Name"]').type(user.userSurname);
    cy.get('input[placeholder="name@example.com"]').type(user.email);
    cy.get('input[placeholder="Mobile Number"]').type(user.phone);
    cy.get('#genterWrapper')
      .contains(user.genderr, { matchCase: false }).click();
    // date picker
    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__year-select').select('1989');
    cy.get('.react-datepicker__month-select').select('August');
    cy.get('.react-datepicker__day--015').click();
    cy.get('[for="hobbies-checkbox-1"]').click();
    cy.get('#currentAddress').type(user.address);
    cy.get('#subjectsInput').type('Math{enter}');
    cy.get('#stateCity-wrapper').contains('Select State').type('NCR{enter}');
    cy.get('#stateCity-wrapper').contains('Select City').type('Delhi{enter}');
    cy.get('#submit').click();
    // modal window
    cy.get('.modal-content').contains('Student Name').next('td')
      .should('have.text', user.userName + ' ' + user.userSurname);
    cy.get('.modal-content').contains('Student Email').next('td')
      .should('have.text', user.email);
    cy.get('.modal-content').contains('Gender').next('td')
      .contains(user.genderr, { matchCase: false }).should('exist');
    cy.get('.modal-content').contains('Mobile').next('td')
      .should('have.text', user.phone);
    cy.get('.modal-content').contains('Date of Birth').next('td')
      .should('have.text', '15 August,1989');
    cy.get('.modal-content').contains('Subjects').next('td')
      .should('have.text', 'Maths');
    cy.get('.modal-content').contains('Hobbies').next('td')
      .should('have.text', 'Sports');
    cy.get('.modal-content').contains('Address').next('td')
      .should('have.text', user.address);
    cy.get('.modal-content').contains('State and City').next('td')
      .should('have.text', 'NCR Delhi');
  });
});
