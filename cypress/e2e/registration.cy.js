/// <reference types='cypress' />

describe('Student Registration page', () => {
  let user

  before(() => {
    cy.visit('/')
    cy.task('generateUser').then(generatedUser => {
      user = generatedUser
    });
  });

  it('should allow to register a new user', () => {

    cy.findByPlaceholder('First Name').type(user.firstName)
    cy.findByPlaceholder('Last Name').type(user.lastName);
    cy.findByPlaceholder('name@example.com').type(user.email)
    cy.contains('.custom-control-label', user.gender).click()
    cy.findByPlaceholder('Mobile Number').type(user.phoneNumber)
    cy.get('#dateOfBirthInput').type('{selectAll} + user.birthDate + {enter}')
    cy.get('.subjects-auto-complete__value-container').type('phy{enter}')
    cy.contains('.custom-control-label', user.hobby).click()
    cy.findByPlaceholder('Current Address').type(user.address)
    cy.get('#state').type('{downArrow}{enter}')
    cy.get('#city').type('{downArrow}{enter}')
    cy.get('#submit').click()
    cy.contains('tr', 'Student Name').should('contain', user.firstName).and('contain', user.lastName)
  });
});
