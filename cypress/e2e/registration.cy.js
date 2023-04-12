/// <reference types='cypress' />

describe('Student Registration page', () => {
  let user;
  before(() => {
    cy.visit('/');
    cy.task('generateUser').then(generatedUser => {
      user = generatedUser;
      user.birthDate = '05 August,1978';
    });
  });

  it('should allow to register', () => {
    cy.viewport(550, 750);
    cy.findByPlaceholder('First Name').type(user.firstName);
    cy.findByPlaceholder('Last Name').type(user.lastName);
    cy.get('#userEmail').type(user.email);
    cy.findByType('radio').check(user.gender, { force: true });
    cy.findByPlaceholder('Mobile Number').type(user.mobileNumber);
    cy.get('#dateOfBirthInput').type('{selectAll} ' + user.birthDate + '{esc}');
    cy.get('.subjects-auto-complete__value-container').type('Com{enter}');
    cy.contains('.custom-control-label', user.hobby).click();
    cy.get('#currentAddress').type(user.adress);
    cy.get('#state').click().type('Ha{enter}');
    cy.get('#city').click().type('Ka');
    cy.focused().type('{enter}');
    cy.get('#submit').click();
    cy.get('#example-modal-sizes-title-lg').should('contain.text', 'Thanks for submitting the form');
    cy.get('tbody > :first-child').should('contain', `${user.firstName} ${user.lastName}`)
    cy.get('tbody > :nth-child(2)').should('contain', user.email)
    cy.get('tbody > :nth-child(3)').should('contain', user.gender)
    cy.get('tbody > :nth-child(4)').should('contain', user.mobileNumber)
    cy.get('tbody > :nth-child(5)').should('contain', user.birthDate)
    cy.get('tbody > :nth-child(6)').should('contain', 'Computer Science')
    cy.get('tbody > :nth-child(7)').should('contain', user.hobby)
    cy.get('tbody > :nth-child(9)').should('contain', user.adress)
    cy.get('tbody > :nth-child(10)').should('contain', 'Haryana Karnal')
  });
});
