/// <reference types='cypress' />

describe('User is able to', () => {
  let user;

  before(function () {
    cy.task("freshUser").then((freshUser) => {
        user = freshUser;
    }); 
  });

  it('fill and submit the practice form', () => {
    cy.visit("automation-practice-form");
    cy.get('#firstName')
    .type(user.firstName)
    .should('have.value', user.firstName);
    cy.get('#lastName')
    .type(user.lastName)
    .should('have.value', user.lastName);
    cy.get('#userEmail')
    .type(user.email)
    .should('have.value', user.email);
    cy.get('[for="gender-radio-2"]').click();
    cy.get('#userNumber')
    .type(user.mobileNumber)
    .should('have.value', user.mobileNumber);
    cy.get('#dateOfBirthInput')
    .type('{selectall}')
    .get('[class$="year-select"]')
    .select('1980')
    .get('[class$="month-select"]')
    .select('March')
    .get('[class$="datepicker__week"]')
    .contains('30').click();
    cy.get('#subjectsInput')
    .type(`Mat{enter}`);
    cy.get('[for="hobbies-checkbox-2"]').click();
    cy.get('#currentAddress')
    .type(user.currentAddress)
    .should('have.value', user.currentAddress);
    cy.get('#state').click().contains('Rajasthan').click();
    cy.get('#city').click().contains('Jaiselmer').click();
    cy.get('#submit').click();

    cy.contains('tbody tr', 'Student Name')
    .should('contain.text', `${user.firstName} ${user.lastName}`);
    cy.contains('tbody tr', 'Student Email')
    .should('contain.text', user.email);
    cy.contains('tbody tr', 'Gender')
    .should('contain.text', 'Female');
    cy.contains('tbody tr', 'Mobile')
    .should('contain.text', user.mobileNumber);
    cy.contains('tbody tr', 'Date of Birth')
    .should('contain.text', '30 March,1980');
    cy.contains('tbody tr', 'Subjects')
    .should('contain.text', 'Maths');
    cy.contains('tbody tr', 'Hobbies')
    .should('contain.text', 'Reading');
    cy.contains('tbody tr', 'Picture')
    .should('contain.text', '');
    cy.contains('tbody tr', 'Address')
    .should('contain.text', user.currentAddress);
    cy.contains('tbody tr', 'State and City')
    .should('contain.text', 'Rajasthan Jaiselmer');
  });
});
