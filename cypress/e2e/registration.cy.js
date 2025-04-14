/// <reference types='cypress' />

describe('Student Registration page', () => {
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('should register the user', () => {
    cy.get('.text-center')
      .should('contain', 'Practice Form');

    cy.get('[placeholder="First Name"]')
      .type('Ryan');

    cy.get('[placeholder="Last Name"]')
      .type('Gosling');

    cy.get('#userEmail')
      .type('fallguy24@gmail.com');

    cy.get('label[for="gender-radio-1"]').click();

    cy.get('[placeholder="Mobile Number"]')
      .type('0987654321');

    cy.get('#dateOfBirthInput').click();

    cy.get('.react-datepicker__month-select').select('November');
    cy.get('.react-datepicker__year-select').select('1980');
    cy.get('[aria-label="Choose Wednesday, November 12th, 1980"]')
      .click();

    cy.get('#subjectsContainer')
      .type('comp{enter}');

    cy.get('label[for="hobbies-checkbox-1"]').click();
    cy.get('label[for="hobbies-checkbox-2"]').click();
    cy.get('label[for="hobbies-checkbox-3"]').click();

    cy.get('#currentAddress').type('My address');

    cy.get('#state').click();
    cy.get('#react-select-3-option-1').click(); // Uttar Pradesh

    cy.get('#city').click();
    cy.get('#react-select-4-option-1').click(); // Lucknow

    cy.get('#submit').click();

    cy.get('.modal-header')
      .should('contain.text', 'Thanks for submitting the form');
    cy.get('.table-responsive tbody tr').eq(0).within(() => {
      cy.get('td').eq(0).should('have.text', 'Student Name');
      cy.get('td').eq(1).should('have.text', 'Ryan Gosling');
    });
    cy.get('.table-responsive tbody tr').eq(1).within(() => {
      cy.get('td').eq(0).should('have.text', 'Student Email');
      cy.get('td').eq(1).should('have.text', 'fallguy24@gmail.com');
    });
    cy.get('.table-responsive tbody tr').eq(2).within(() => {
      cy.get('td').eq(0).should('have.text', 'Gender');
      cy.get('td').eq(1).should('have.text', 'Male');
    });
    cy.get('.table-responsive tbody tr').eq(3).within(() => {
      cy.get('td').eq(0).should('have.text', 'Mobile');
      cy.get('td').eq(1).should('have.text', '0987654321');
    });
    cy.get('.table-responsive tbody tr').eq(4).within(() => {
      cy.get('td').eq(0).should('have.text', 'Date of Birth');
      cy.get('td').eq(1).should('have.text', '12 November,1980');
    });
    cy.get('.table-responsive tbody tr').eq(5).within(() => {
      cy.get('td').eq(0).should('have.text', 'Subjects');
      cy.get('td').eq(1).should('have.text', 'Computer Science');
    });
    cy.get('.table-responsive tbody tr').eq(6).within(() => {
      cy.get('td').eq(0).should('have.text', 'Hobbies');
      cy.get('td').eq(1).should('have.text', 'Sports, Reading, Music');
    });
    cy.get('.table-responsive tbody tr').eq(8).within(() => {
      cy.get('td').eq(0).should('have.text', 'Address');
      cy.get('td').eq(1).should('have.text', 'My address');
    });
    cy.get('.table-responsive tbody tr').eq(9).within(() => {
      cy.get('td').eq(0).should('have.text', 'State and City');
      cy.get('td').eq(1).should('have.text', 'Uttar Pradesh Lucknow');
    });
  });
});
