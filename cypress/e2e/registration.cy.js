/// <reference types='cypress' />

describe('Student Registration page', () => {
  let user;

  before(() => {  
    cy.task('generateUser').then(generatedUser => {
      user = generatedUser;
    })
  });

  it('should register new user', () => {
    // Verify registration form
    cy.visit('/automation-practice-form');
    cy.get('.main-header').contains('Practice Form').should('be.visible');
    cy.get('body form').should('have.id', 'userForm');
    //Fill in the the form
    cy.get('[placeholder="First Name"]').type(user.firstName);
    cy.get('[placeholder="Last Name"]').type(user.lastName);
    cy.get('[placeholder="name@example.com"]').type(user.email);
    cy.contains('#genterWrapper', user.gender, { matchCase: false }).click();
    cy.get('[placeholder="Mobile Number"]').type(user.phoneNumber);
    cy.get('#dateOfBirthInput').type('{selectAll}' + '07 Dec 1978' + '{enter}');
    cy.get('#subjectsInput').type('che{enter} comp{enter}');
    cy.get('#hobbiesWrapper').contains('Music').click();
    cy.get('#hobbiesWrapper').contains('Reading').click();
    cy.get('[placeholder="Current Address"]').type(user.currentAddress);
    cy.get('#react-select-4-input').should('be.disabled');
    cy.get('#stateCity-wrapper').contains('Select State').type('n{enter}');
    cy.get('#react-select-4-input').should('be.enabled');
    cy.get('#stateCity-wrapper').contains('Select City').type('de{enter}');
    // Press the submit [button]
    cy.get('button').contains('Submit').click();
    // Assertion
    cy.get('td').should('contain.text', user.firstName);
    cy.get('td').should('contain.text', user.lastName);
    cy.get('td').should('contain.text', user.email);
    cy.get('td').should('contain.text', Number(user.phoneNumber));
    cy.get('td').should('contain.text', '07 December,1978');
    cy.get('td').should('contain.text', 'Chemistry');
    cy.get('td').should('contain.text', 'Computer Science');
    cy.get('td').should('contain.text', 'Music');
    cy.get('td').should('contain.text', 'Reading');
    cy.get('td').should('contain.text', user.currentAddress);
    cy.get('td').should('contain.text', 'NCR');
    cy.get('td').should('contain.text', 'Delhi');
  });
});

