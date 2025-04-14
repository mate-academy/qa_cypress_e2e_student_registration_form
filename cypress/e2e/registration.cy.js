/// <reference types='cypress' />
let user;
describe('Student Registration page', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.task('generateUser').then((generateUser) => {
      user = generateUser;
    });
  });

  it('Shound register new user', () => {
    cy.findByPlaceholder('#firstName').type(user.firstName);
    cy.findByPlaceholder('#lastName').type(user.lastName);
    cy.findByPlaceholder('#userEmail').type(user.email);
    cy.findByPlaceholder(`#genterWrapper > .col-md-9 > :nth-child(${user.randomGenderIndex}) > .custom-control-label`).click();
    cy.findByPlaceholder('#userNumber').type(user.mobileNumber);

    cy.get('#dateOfBirthInput').click();
    cy.selectDate('month-select').select(user.birth.month);
    cy.selectDate('year-select').select(`${user.birth.year}`);
    cy.selectDate('day').contains(user.birth.day).click();
    cy.get('.subjects-auto-complete__value-container')
      .type('en{enter}' + 'ph{enter}');

    cy.findByPlaceholder(`#hobbiesWrapper > .col-md-9 > :nth-child(${user.randomGenderIndex}) > .custom-control-label`).click();

    cy.findByPlaceholder('#currentAddress').type(user.address);
    cy.get('#state').type('{downarrow}{enter}');
    cy.get('#city').type('{downarrow}{enter}');
    cy.findByPlaceholder('#submit').click();

    cy.get('#example-modal-sizes-title-lg')
      .should('contain', 'Thanks for submitting the form');

    cy.get('tbody > :nth-child(2) > :nth-child(2)')
      .should('contain', user.email);
  });
});
