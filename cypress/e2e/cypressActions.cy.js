/// <reference types='cypress' />
const { generateUser } = require('../support/generate');

describe('Automation practice form', () => {
  beforeEach(() => {
    cy.visit('/automation-practice-form');
  });

  it('user should be able to register with valid credentials', () => {
    const user = generateUser();
    
    cy.contains('.group-header', "Widgets").click();
    cy.get('[id=firstName]').type(user.firstName);
    cy.get('[id=lastName]').type(user.lastName);
    cy.get('[id=userEmail]').type(user.email);
    cy.genderSelector(user.gender);
    cy.get('[id=userNumber]').type(user.mobile);
    cy.get('[id=dateOfBirth]').type(`{selectall}${user.birthDay} ${user.birthMonth} ${user.birthYear}{enter}`);
    cy.get('.subjects-auto-complete__value-container').type(`Co{enter} Ma{enter}`);
    cy.get('[for=hobbies-checkbox-2]').click();
    cy.get('[for=hobbies-checkbox-3]').click();
    cy.get('[id=currentAddress]').type(user.address);
    cy.get('[id=state]').type('NCR{enter}'); 
    cy.get('[id=city]').type('Delhi{enter}'); 
    cy.get('[id=submit]').click({force:true});

    cy.contains('tr', 'Student Name').should('contain', `${user.firstName} ${user.lastName}`);
    cy.contains('tr', 'Student Email').should('contain', user.email);
    cy.contains('tr', 'Gender').should('contain', user.gender);
    cy.contains('tr', 'Mobile').should('contain', user.mobile);
    cy.contains('tr', 'Date of Birth').should('contain', `${user.birthDay} ${user.birthMonth},${user.birthYear}`);
    cy.contains('tr', 'Subjects').should('contain', 'Computer Science, Maths');
    cy.contains('tr', 'Hobbies').should('contain', 'Reading, Music');
    cy.contains('tr', 'Address').should('contain', user.address);
    cy.contains('tr', 'State and City').should('contain', 'NCR Delhi');
  });
});