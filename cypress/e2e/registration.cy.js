/// <reference types='cypress' />

describe('Student Registration page', () => {
  let user;
  before(() => {
    cy.visit('/');
    cy.task('generateUser').then((generateUser) => {
      user = generateUser;
    });
  });

  it('should allow to register a new student', () => {
    cy.findByPlaceholder('First Name').type(user.firstName);
    cy.findByPlaceholder('Last Name').type(user.lastName);
    cy.get('#userEmail').type(user.email);

    cy.contains('.custom-control-label', user.gender).click();
    cy.findByPlaceholder('Mobile Number').type(user.mobileNumber);
    cy.get('#dateOfBirthInput').click();
    cy.pickDate('month-select').select(user.birth.month);
    cy.pickDate('year-select').select(`${user.birth.year}`);
    cy.pickDate('day').contains(user.birth.day).click();

    cy.get('.subjects-auto-complete__value-container')
      .type('en{enter}' + 'phy{enter}');
    cy.contains('.custom-control-label', user.hobby).click();
    cy.findByPlaceholder('Current Address').type(user.address);

    cy.get('#state').type('{downarrow}{enter}');
    cy.get('#city').type('{downarrow}{enter}');

    cy.get('#submit').click();

    cy.contains('tr', user.firstName).should('be.visible');
    cy.contains('tr', user.lastName).should('be.visible');
    cy.contains('tr', user.email).should('be.visible');
    cy.contains('tr', user.gender).should('be.visible');
    cy.contains('tr', user.mobileNumber).should('be.visible');
    cy.get('tbody > :nth-child(5) > :nth-child(2)').should('be.visible');
    cy.get('tbody > :nth-child(6) > :nth-child(2)').should('be.visible');
    cy.contains('tr', user.hobby).should('be.visible');
    cy.contains('tr', user.address).should('be.visible');
    cy.get('tbody > :nth-child(10) > :nth-child(2)').should('be.visible');
  });
});
