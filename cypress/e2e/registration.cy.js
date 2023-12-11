/// <reference types='cypress' />

describe('Student Registration page', () => {
  before(() => {
    // Site open
    cy.visit('/');
    cy.viewport(1800, 1200);
  });

  it('Registration form and validation', () => {
    // Filling data
    cy.findByPlaceholder('First Name').type('Patrick');
    cy.findByPlaceholder('Last Name').type('Paul');
    cy.findByPlaceholder('name@example.com').type('john.paul2@vatican.com');
    cy.get('label').contains('Other').click();
    cy.findByPlaceholder('Mobile Number').type('1234567890');
    cy.get('#dateOfBirthInput').type('{selectall}');
    cy.get('#dateOfBirthInput').type('20 OCT 2020');
    cy.get('#dateOfBirthInput').type('{enter}');
    cy.get('#subjectsContainer').type('English');
    cy.get('#react-select-2-option-0').click();
    cy.get('#currentAddress').type('33 3rd Ave, New York, NY 10003, USA');
    // Validation
    cy.get('#submit').click();
    // Inputed data form exist check
    cy.get('body').should('contain', 'Thanks for submitting the form');
    cy.get('table').should('exist');
    // Inputed data keys check
    cy.get('table').should('contain', 'Student Name');
    cy.get('table').should('contain', 'Student Email');
    cy.get('table').should('contain', 'Gender');
    cy.get('table').should('contain', 'Mobile');
    cy.get('table').should('contain', 'Date of Birth');
    cy.get('table').should('contain', 'Subjects');
    cy.get('table').should('contain', 'Hobbies');
    cy.get('table').should('contain', 'Picture');
    cy.get('table').should('contain', 'Address');
    cy.get('table').should('contain', 'State and City');
    // inputted data values check
    cy.get('table').should('contain', 'Patrick Paul');
    cy.get('table').should('contain', 'john.paul2@vatican.com');
    cy.get('table').should('contain', 'English');
  });
});
