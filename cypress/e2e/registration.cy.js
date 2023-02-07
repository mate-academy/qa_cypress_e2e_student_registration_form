/// <reference types='cypress' />

describe('Student Registration page', () => {
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form')
  });

  it('Registration with valid data', () => {
    cy.get('[placeholder="First Name"]').type('Roman');
    cy.get('[placeholder="Last Name"]').type('Horpyniuk');
    cy.get('[placeholder="name@example.com"]').type('romadegrom@gmail.com');
    cy.contains('.custom-control-label', 'Male').click();
    cy.get('[placeholder="Mobile Number"]').type('0123456789');
    cy.get('[id="dateOfBirthInput"]').type('{selectAll}03 Feb 1995{enter}');
    cy.get('.subjects-auto-complete__value-container').type('En{enter}');
    cy.contains('.custom-control-label', 'Reading').click();
    cy.get('[placeholder="Current Address"]').type('Odesa, Malinovskiy 12');
    cy.contains('.css-1wa3eu0-placeholder', 'Select State').type('{downArrow}{enter}');
    cy.contains('.css-1wa3eu0-placeholder', 'Select City').type('{downArrow}{enter}');
    cy.get('[id="submit"]').click();
    cy.contains('tr', 'Student Name').should('contain', 'Roman Horpyniuk');
    cy.contains('tr', 'Student Email').should('contain', 'romadegrom@gmail.com');
    cy.contains('tr', 'Gender').should('contain', 'Male');
    cy.contains('tr', 'Mobile').should('contain', '0123456789');
    cy.contains('tr', 'Date of Birth').should('contain', '03 February,1995');
    cy.contains('tr', 'Subjects').should('contain', 'English');
    cy.contains('tr', 'Address').should('contain', 'Odesa, Malinovskiy 12');
    cy.contains('tr', 'State and City').should('contain', 'Uttar Pradesh Lucknow');

  });
});
