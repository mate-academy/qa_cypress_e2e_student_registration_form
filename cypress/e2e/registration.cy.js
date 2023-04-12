/// <reference types='cypress' />

describe('Student Registration page', () => {
  let user;

  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
    cy.task('generateUser').then(generatedUser => {
      user = generatedUser;
    })
  });

  it('Should be able to register', () => {
    cy.viewport(1000, 1200);

    cy.findByPlaceholder('First Name')
      .type(user.firstName);
    cy.findByPlaceholder('Last Name')
      .type(user.lastName);
    cy.findByPlaceholder('name@example.com')
      .type(user.email);
    cy.findByType('radio')
      .check(user.gender, { force: true });
    cy.findByPlaceholder('Mobile Number')
      .type(user.mobile);
    cy.get('#dateOfBirthInput')
      .type('{selectAll}' + user.dateOfBirth + '{enter}');
    cy.get('.subjects-auto-complete__value-container')
      .type('math{enter}');
    cy.contains('.custom-checkbox', user.hobby).click();
    cy.findByPlaceholder('Current Address')
      .type(user.address);
    cy.get('#state').type('har{enter}');
    cy.get('#city').type('ka{enter}');
    cy.get('#submit').click();

    cy.confirmMessage(1, `${user.firstName} ${user.lastName}`);
    cy.confirmMessage(2, user.email);
    cy.confirmMessage(3, user.gender);
    cy.confirmMessage(4, user.mobile);
    cy.confirmMessage(7, user.hobby);
    cy.confirmMessage(9, user.address);
  });
});
