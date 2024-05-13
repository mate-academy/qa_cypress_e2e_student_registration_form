/* eslint-disable max-len */
/// <reference types='cypress'   />

describe('Student Registration page', () => {
  let user;
  beforeEach(() => {
    cy.visit('/');
    cy.task('generateUser').then((generateUser) => {
      user = generateUser;
    });
  });

  it('should register a new user', () => {
    cy.findByPlaceholder('First Name').type(user.firstName);
    cy.findByPlaceholder('Last Name').type(user.lastName);
    cy.get('#userEmail').type(user.email);
    cy.contains('.custom-control-label', user.gender).click();
    cy.findByPlaceholder('Mobile Number').type(user.mobileNumber);
    cy.get('#dateOfBirthInput').type('{selectall} 3 July 2001{enter}');
    cy.get('.subjects-auto-complete__value-container').type('en{enter}');
    cy.contains('.custom-control-label', user.hobby).click();

    cy.findByPlaceholder('Current Address').type(user.address);

    cy.get('#state').type('{downarrow}{enter}');
    cy.get('#city').type('{enter}');

    cy.get('#submit').click();

    cy.get('#example-modal-sizes-title-lg').should('contain', 'Thanks for submitting the form');
    cy.contains('tr', 'Student Name').should('contain', user.firstName);
    cy.contains('tr', 'Student Name').should('contain', user.lastName);
    cy.contains('tr', 'Student Email').should('be.visible', user.email);
    cy.contains('tr', 'Gender').should('be.visible', user.genders);
    cy.contains('tr', 'Mobile').should('be.visible', user.mobileNumber);
    cy.contains('tr', 'Date of Birth').should('contain', '3 July,2001');
    cy.contains('tr', 'Subjects').should('contain', 'English');
    cy.contains('tr', 'Hobbies').should('contain', user.hobby);
    cy.contains('tr', 'Picture').should('contain.text', '');
    cy.contains('tr', 'Address').should('contain', user.address);
    cy.contains('tr', 'State and City').should('contain', 'Uttar Pradesh Agra');
  });
});
