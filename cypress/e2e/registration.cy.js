/// <reference types='cypress' />

const { RandomModule } = require("@faker-js/faker");
describe('Student Registration page', () => {
  let user;
  before(() => {
    cy.visit('/');
    cy.task('generateUser').then(generateUser => {
      user = generateUser;
    });
  });
  it('should register a new student', () => {
    cy.findByPlaceholder('First Name').type(user.firstName);
    cy.findByPlaceholder('Last Name').type(user.lastName);
    cy.findByPlaceholder('name@example.com').type(user.email);
    cy.get(`#gender-radio-${user.randomGenderIndex}`).check({ force: true });
    cy.findByPlaceholder('Mobile Number').type(user.mobileNumber);
    cy.get('#dateOfBirthInput').click();
    cy.pickDate('month-select').select(user.birth.month);
    cy.pickDate('year-select').select(`${user.birth.year}`);
    cy.pickDate('day').contains(user.birth.day).click();
    cy.get('.subjects-auto-complete__value-container').type('en{enter}' + 
'ph{enter}');
    cy.get('.custom-control-label').contains(user.hobby).click();
    cy.findByPlaceholder('Current Address').type(user.address);
    cy.get('#state').type(' {downarrow}{enter}');
    cy.get('#city').type(' {downarrow}{enter}');
    cy.get('#submit').click();
    cy.contains('tr', 'Student Name').should('contain', user.firstName).and
('contain', user.lastName);
    cy.contains('tr', 'Student Email').should('contain', user.email);
  });
});
