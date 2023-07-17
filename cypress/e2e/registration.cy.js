/// <reference types='cypress' />

describe('Student Registration page', () => {
  let user;
  before(() => {
    cy.visit('/');
    cy.task('generateUser')
      .then((generateUser) => {
        user = generateUser;
      });
  });

  it('should register a new student', () => {
    cy.findByPlaceholder('First Name').type(user.firstName);
    cy.findByPlaceholder('Last Name').type(user.lastName);
    cy.get('#userEmail').type(user.email);
    cy.contains('.custom-control-label', user.gender).click();
    cy.findByPlaceholder('Mobile Number').type(user.phoneNumber);
    cy.get('#dateOfBirthInput').type('{selectAll}17 July 2023{enter}');
    cy.get('.subjects-auto-complete__value-container').type('ma{enter}' + 'ar{enter}');
    cy.contains('.custom-control-label', user.hobby).click();
    cy.findByPlaceholder('Current Address').type(user.address);
    cy.contains('Select State').type('{downarrow}{enter}');
    cy.contains('Select City').type('{downarrow}{enter}');

    cy.get('#submit').click();

    cy.contains('#example-modal-sizes-title-lg', 'Thanks for submitting the form');

    cy.contains('tr', 'Student Name').should('contain', user.firstName);
    cy.contains('tr', 'Student Name').should('contain', user.lastName);
    cy.contains('tr', 'Student Email').should('contain', user.email);
    cy.contains('tr', 'Gender').should('contain', user.gender);
    cy.contains('tr', 'Mobile').should('contain', user.phoneNumber);
    cy.contains('tr', 'Date of Birth').should('contain', '17 July,2023');
    cy.contains('tr', 'Subjects').should('contain', 'Maths, Arts');
    cy.contains('tr', 'Hobbies').should('contain', user.hobby);
    cy.contains('tr', 'Address').should('contain', user.address);
    cy.contains('tr', 'State and City').should('contain', 'Uttar Pradesh Lucknow');
  });
});
