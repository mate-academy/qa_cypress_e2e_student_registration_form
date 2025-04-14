/// <reference types='cypress' />

describe('should register new student', () => {
  let user;

  before(() => {
    cy.task('generateUser').then((generatedUser) => {
      user = generatedUser;
    });
  });

  it('should register new student', () => {
    // Fill form with student data
    cy.visit('/automation-practice-form');
    cy.findByPlaceholder('First Name').type(user.firstName);
    cy.findByPlaceholder('Last Name').type(user.lastName);
    cy.findByPlaceholder('name@example.com').type(user.email);
    cy.get('.custom-control').contains(user.gender, { matchCase: false })
      .click();
    cy.findByPlaceholder('Mobile Number').type(user.phoneNumber);
    cy.get('#dateOfBirthInput')
      .type('{selectAll}' + '17 Dec 2023' + '{enter}');
    cy.get('#subjectsContainer').type('ec{enter}');
    cy.get('#hobbiesWrapper').contains('Music').click();
    cy.findByPlaceholder('Current Address', 'textarea').type(user.address);
    cy.get('#stateCity-wrapper').contains('Select State').type('R{enter}');
    cy.get('#stateCity-wrapper').contains('Select City').type('Jaip{enter}');
    // Submit form
    cy.get('button').contains('Submit').click();
    cy.get('.modal-content').should('be.visible');
    // Verify submited data
    cy.get('.modal-content').get('table')
      .contains('Student Name').next('td')
      .should('have.text', `${user.firstName} ${user.lastName}`);
    cy.get('.modal-content').get('table')
      .contains('Student Email').next('td')
      .should('have.text', `${user.email}`);
    cy.get('.modal-content').get('table')
      .contains('Gender').next('td')
      .invoke('text').then((text) => {
        expect(text.toLowerCase()).to.equal(user.gender.toLowerCase());
      });
    cy.get('.modal-content').get('table')
      .contains('Mobile').next('td')
      .should('have.text', `${user.phoneNumber}`);
    cy.get('.modal-content').get('table')
      .contains('Date of Birth').next('td')
      .should('have.text', `17 December,2023`);
    cy.get('.modal-content').get('table')
      .contains('Subjects').next('td')
      .should('have.text', 'Economics');
    cy.get('.modal-content').get('table')
      .contains('Hobbies').next('td')
      .should('have.text', 'Music');
    cy.get('.modal-content').get('table')
      .contains('Address').next('td')
      .should('have.text', `${user.address}`);
    cy.get('.modal-content').get('table')
      .contains('State and City').next('td')
      .should('have.text', '');
  });
});
