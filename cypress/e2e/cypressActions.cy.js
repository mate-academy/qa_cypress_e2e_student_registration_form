/// <reference types='cypress' />

describe('Student is able to', () => {
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('Register fulfilling all the data', () => {
    cy.get('[id="firstName"]').type('Sergio');
    cy.get('[id="lastName"]').type('Grisero');
    cy.get(`[id="userEmail"]`).type('loomloom@qa.test.com');
    cy.get(`[id="gender-radio-1"]`).click({force: true});
    cy.get(`[id="userNumber"]`).type('13131313');
    cy.get(`[id="dateOfBirthInput"]`).type('{selectall}').type('01 FEB 1961 {enter}');
    cy.get(`[id="subjectsInput"]`).type('Math{enter}').type('comp{enter}');
    cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(1) > .custom-control-label').click();
    cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(3) > .custom-control-label').click();
    cy.get(`[id="currentAddress"]`).type('1 Avenu, 13131 New-York');
    cy.contains('Widgets').click();
    cy.get(`[id="state"]`).type('NCR{enter}');
    cy.get(`[id="city"]`).type('Delhi{enter}');
    cy.get(`[id="submit"]`).click({force:true});
  });

  it('Checking the fields from the table', () => {
    cy.contains('tr', 'Student Name').should('contain', 'Sergio Grisero');
    cy.contains('tr', 'Student Email').should('contain', 'loomloom@qa.test.com');
    cy.contains('tr', 'Gender').should('contain', 'Male');
    cy.contains('tr', 'Mobile').should('contain', '13131313');
    cy.contains('tr', 'Date of Birth').should('contain', '01 February,1961');
    cy.contains('tr', 'Subjects').should('contain', 'Maths, Computer Science');
    cy.contains('tr', 'Hobbies').should('contain', 'Sports, Music');
    cy.contains('tr', 'Address').should('contain', '1 Avenu, 13131 New-York')
    cy.contains('tr', 'State and City').should('contain', 'NCR Delhi');
    cy.get(`[id="closeLargeModal"]`).click();
  }); 
});
