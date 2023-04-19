/// <reference types='cypress' />

describe( 'Student Registration page', () => {
  
  let user;

  before(() => {
    cy.visit('/')
    cy.task('generateUser').then(generatedUser => {
      user = generatedUser;
    });
  });

  it('This form should allow to register a new user', () => {
    
    cy.viewport(750, 600);

    cy.findByPlaceholder('First Name').
    type(user.firstName);

    cy.findByPlaceholder('Last Name')
    .type(user.lastName);

    cy.get('#userEmail')
    .type(user.email);

    cy.get('[type="radio"]')
    .check(user.gender, {force: true});

    cy.findByPlaceholder('Mobile Number')
    .type(user.mobileNumber);

    cy.get('#dateOfBirthInput')
    .type('{selectAll}' + user.dateOfBirth + '{enter}');

    cy.get('.subjects-auto-complete__value-container')
    .type('Ph'+ '{enter}' + 'Co' + '{enter}' + 'Ar' + '{enter}');

    cy.get('[type="checkbox"]')
    .check(user.hobbies, {force: true});

    cy.findByPlaceholder('Current Address')
    .type(user.currentAddress);

    cy.get('#state').click().type('Raj{enter}');

    cy.get('#city').click().type('Jaip{enter}');

    cy.get('#submit')
    .click();

    cy.get('.modal-content')
    .should('contain.text', 'Thanks for submitting the form');

    cy.get('.modal-content').should('contain', user.firstName);

    cy.get('.modal-content').should('contain', user.lastName);

    cy.get('.modal-content').should('contain', user.email);

    cy.get('.modal-content').should('contain.text', 'Gender');

    cy.get('.modal-content').should('contain', user.mobileNumber);

    cy.get('.modal-content').should('contain.text', 'Date of Birth');

    cy.get('.modal-content').should('contain.text', 'Physics, Computer Science, Arts');

    cy.get('.modal-content').should('contain.text', 'Sports, Reading, Music');

    cy.get('.modal-content').should('contain', user.currentAddress);

    cy.get('tbody > :nth-child(10) > :nth-child(2)').should('contain.text', 'Rajasthan Jaipur');
  });
});
