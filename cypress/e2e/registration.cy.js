/// <reference types='cypress' />

describe('Student Registration page', () => {
  let user;

  before(() => {
    cy.visit('/');
    cy.task('generateUser').then((generateUser) => {
      user = generateUser;
    });
  });

  it('should register a new student', () => {
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

    cy.get('#example-modal-sizes-title-lg')
      .should('contain', 'Thanks for submitting the form');
    cy.contains('tr', 'Student Name')
      .should('contain', user.firstName);
    cy.contains('tr', 'Student Name')
      .should('contain', user.lastName);
    cy.contains('tr', 'Student Email')
      .should('contain', user.email);
    cy.contains('tr', 'Gender')
      .should('contain', user.gender);
    cy.contains('tr', 'Mobile')
      .should('contain', user.mobileNumber);
    cy.contains('tr', 'Date of Birth')
      .should('contain', user.birth.day);
    cy.contains('tr', 'Date of Birth')
      .should('contain', user.birth.month);
    cy.contains('tr', 'Date of Birth')
      .should('contain', user.birth.year);
    cy.contains('tr', 'Subjects')
      .should('contain', 'English', 'Phisics');
    cy.contains('tr', 'Hobbies')
      .should('contain', user.hobby);
    cy.contains('tr', 'Address')
      .should('contain', user.address);
  });
});
