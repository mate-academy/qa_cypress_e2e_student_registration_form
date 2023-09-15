/// <reference types='cypress' />

describe('Student Registration page', () => {
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('Should register new user', () => {
    cy.viewport(1920, 1080);
    const firstName = 'Harry';
    const lastName = 'Raz';
    const email = 'cort53@gmail.com';
    const mobileNumber = '9632587419';
    const address = 'Rivne';
    const subjects = 'QA';

    cy.get('[placeholder="First Name"]').type(firstName);
    cy.get('[placeholder="Last Name"]').type(lastName);
    cy.get('[placeholder="name@example.com"]').type(email);
    cy.get('[for="gender-radio-1"]').click();
    cy.get('[placeholder="Mobile Number"]').type(mobileNumber);

    cy.get('[id="dateOfBirthInput"]').click();
    cy.get('.react-datepicker__year-select').select('2000');
    cy.get('.react-datepicker__month-select').select('October');
    cy.get('.react-datepicker__day--020').click();

    cy.get('.subjects-auto-complete__value-container').type(subjects);

    cy.get('.custom-checkbox [for="hobbies-checkbox-1"]').click();
    cy.get('[placeholder="Current Address"]').type(address);
    cy.get('#state').type('NC{enter}');
    cy.get('#city').type('Del{enter}');

    cy.get('[id="submit"]').click();

    cy.get('.modal-content').should('exist');
    cy.get('.modal-header').should('contain', 'Thanks for submitting the form');
    cy.get('.modal-body').should('contain', firstName);
    cy.get('.modal-body').should('contain', lastName);
    cy.get('.modal-body').should('contain', 'Student Email', email);
    cy.get('.modal-body').should('contain', 'Gender', 'male');
    cy.get('.modal-body').should('contain', 'Mobile', mobileNumber);
    cy.get('.modal-body').should('contain', 'Date of Birth', '20 Oct 2000');
    cy.get('.modal-body').should('contain', 'Hobbies', 'sport');
    cy.get('.modal-body').should('contain', 'Address', address);
    cy.get('.modal-body').should('contain', 'State', 'NCR');
    cy.get('.modal-body').should('contain', 'City', 'Delhi');

    cy.get('[id="closeLargeModal"]').click();
  });
});
