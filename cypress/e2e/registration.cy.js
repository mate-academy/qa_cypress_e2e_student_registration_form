/// <reference types='cypress' />

describe('Student registration page', () => {
  before(() => {
    let user;

    beforeEach(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
    cy.task('generateUser').then(generatedUser => {
      user = generatedUser;
    });
    });
 
  it('', () => {

  it('Fill all fields in forms except "picture"', () => {
    cy.viewport(550, 750);
    // cy.findByPlaceholder('First Name').type(user.firstName);
    cy.get('#firstName').type(user.firstName);
    // cy.findByPlaceholder('Last Name').type(user.lastName);
    cy.get('#lastName').type(user.lastName);
    cy.get('#userEmail').type(user.email);
    cy.findByType('radio').check(user.gender, { force: true });
    // cy.findByPlaceholder('Mobile Number').type(user.mobileNumber);
    cy.get('#userNumber').type(user.mobileNumber);
    cy.get('#dateOfBirthInput').click()
    cy.get('#dateOfBirthInput').type('{selectAll}'+user.birthDate+'{enter}');
    cy.get('.subjects-auto-complete__value-container').type('Com{enter} ph{enter}');
    cy.contains('.custom-control-label', user.hobby).click();
    // cy.findByPlaceholder('Current Address').type(user.address);
    cy.get('#currentAddress').type(user.address);
    cy.get('#state').type('Ra{enter}');
    cy.get('#city').type('Ja{enter}');
    cy.get('#submit').click();
    cy.get('.modal-body')
    .should('contain.text', user.firstName)
    .should('contain.text', user.email)
    .should('contain.text', user.gender)
    .should('contain.text', user.mobileNumber)
    .should('contain.text', user.birthDate)
    .should('contain.text', 'Computer Science')
    .should('contain.text', user.hobby)
    .should('contain.text', user.address)
    .should('contain.text', 'Rajasthan Jaipur');
  });
  });
  });
 });
 