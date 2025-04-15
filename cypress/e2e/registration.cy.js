/// <reference types='cypress' />

describe('Student Registration page', () => {
  let user;
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
    cy.task('generateUser').then((generateUser) => {
      user = generateUser;
    });
  });

  it('should provide possibility to register with valid data', () => {
    cy.findByPlaceholder('First Name').type(user.firstName);
    cy.findByPlaceholder('Last Name').type(user.lastName);
    cy.findByPlaceholder('name@example.com').type(user.email);
    cy.get(`#gender-radio-${user.randomIndex}`).check({ force: true });
    cy.findByPlaceholder('Mobile Number').type(user.mobileNumber);

    cy.get('#dateOfBirthInput').click();
    cy.pickDate('month-select').select(user.birth.month);
    cy.pickDate('year-select').select(`${user.birth.year}`);
    cy.pickDate('day').contains(user.birth.day).click();

    cy.get('#subjectsContainer').type('maths{enter}' + 'chemistry{enter}');
    cy.get(`#hobbies-checkbox-${user.randomIndex}`).click({ force: true });
    cy.findByPlaceholder('Current Address').type(user.currentAdress);
    cy.get('#state').type(' {downarrow}{enter}');
    cy.get('#city').type(' {downarrow}{enter}');

    cy.get('#submit').click();

    cy.get('#example-modal-sizes-title-lg')
      .should('contain', 'Thanks for submitting the form');
    cy.get('.table-responsive').should('contain', `${user.firstName} ${user.lastName}`);
  });
});
