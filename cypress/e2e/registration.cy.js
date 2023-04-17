/// <reference types='cypress' />

describe('Student Registration page', () => {
  let user;

  before(() => {
    cy.visit('/');
    cy.task('generateUser').then(generatedUser => {
      user = generatedUser;
    });
  });
 

  it('Should allow to register a new student', () => {
    
    cy.viewport(550, 750);
    
    cy.findByPlaceholder('First Name').type(user.firstName);
    cy.findByPlaceholder('Last Name').type(user.lastName);
    cy.get('#userEmail').type(user.email);
    cy.findByType('radio').check(user.gender, { force: true });
    cy.findByPlaceholder('Mobile Number').type(user.mobileNumber);
    cy.get('#dateOfBirthInput').type('{selectAll}11 Apr 1992 {enter}');
    cy.get('.subjects-auto-complete__value-container').type('Comm{enter} ph{enter}');
    cy.contains('.custom-control-label', user.hobby).click();
    cy.findByPlaceholder('Current Address').type(user.address);
    cy.get('#state').type('Ha{enter}');
    cy.get('#city').type('Ka{enter}');
    cy.get('#submit').click();

    cy.get('.modal-content').should('contain.text', 'Thanks')
    .should('contain', `${user.firstName} ${user.lastName}`)
    .should('contain', `${user.email}`)
    .should('contain', `${user.gender}`)
    .should('contain', `${user.mobileNumber}`)
    .should('contain', '11 April,1992')
    .should('contain', 'Commerce, Physics')
    .should('contain', `${user.hobby}`)
    .should('contain', `${user.address}`)
    .should('contain', 'Haryana Karnal');
   });
});
