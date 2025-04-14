/// <reference types='cypress' />

describe('Student Registration page', () => {
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('should register the user with valid data', () => {
    cy.viewport(1920, 1080);

    const firstName = 'Bella';
    const lastName = 'Hadid';
    const email = 'malinator123@gmail.com';
    const mobileNumber = '8907664365';
    const address = 'Hollywood';
    const subjects = 'Quality Assurance';
    cy.get('[placeholder="First Name"]').type(firstName);
    cy.get('[placeholder="Last Name"]').type(lastName);
    cy.get('[placeholder="name@example.com"]').type(email);
    cy.get('[for="gender-radio-2"]').click();
    cy.get('[placeholder="Mobile Number"]').type(mobileNumber);

    cy.get('[id="dateOfBirthInput"]').click();
    cy.get('.react-datepicker__year-select').select('1996');
    cy.get('.react-datepicker__month-select').select('July');
    cy.get('.react-datepicker__day--022').click();

    cy.get('.subjects-auto-complete__value-container').type(subjects);

    cy.get('.custom-checkbox [for="hobbies-checkbox-1"]').click();
    cy.get('[placeholder="Current Address"]').type(address);
    cy.get('#state').type('Har{enter}');
    cy.get('#city').type('Kar{enter}');

    cy.get('[id="submit"]').click();

    cy.get('.modal-content').should('exist');
    cy.get('.modal-header').should('contain', 'Thanks for submitting the form');
    cy.get('.modal-body').should('contain', firstName);
    cy.get('.modal-body').should('contain', lastName);
    cy.get('.modal-body').should('contain', email);
    cy.get('.modal-body').should('contain', 'Gender', 'female');
    cy.get('.modal-body').should('contain', mobileNumber);
    cy.get('.modal-body').should('contain', 'Date of Birth', '22 Jul 1996');
    cy.get('.modal-body').should('contain', 'Hobbies', 'sport');
    cy.get('.modal-body').should('contain', address);
    cy.get('.modal-body').should('contain', 'State', 'Haryana');
    cy.get('.modal-body').should('contain', 'City', 'Karnal');

    cy.get('[id="closeLargeModal"]').click();
  });
});
