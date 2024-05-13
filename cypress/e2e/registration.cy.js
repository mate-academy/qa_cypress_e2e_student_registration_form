/// <reference types='cypress' />

describe('Student Registration page', () => {
  const userName = `User${Math.floor(Math.random() * 1000)}`;
  const userSurname = `LastName${Math.floor(Math.random() * 1000)}`;
  const email = `user${Math.floor(Math.random() * 1000)}@example.com`;
  const subject = 'Physics';
  const mobileNumber = `3809${Math.floor(Math.random() * 100000000)}`;
  const address = `Some Random Address ${Math.floor(Math.random() * 1000)}`;

  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('should successfully register the user with valid credentials', () => {
    cy.viewport(1280, 900);
    cy.get('[placeholder="First Name"]').type(userName);
    cy.get('[placeholder="Last Name"]').type(userSurname);
    cy.get('[placeholder="name@example.com"]').type(email);
    cy.get('[for="gender-radio-2"]').click();
    cy.get('[placeholder="Mobile Number"]').type(mobileNumber);
    cy.get('[id="dateOfBirthInput"]').click();
    cy.get('.react-datepicker__year-select').select('1990');
    cy.get('.react-datepicker__day--022').click();

    cy.get('#subjectsInput').type(subject);
    cy.get('.subjects-auto-complete__menu-list').contains(subject).click();

    cy.get('[for="hobbies-checkbox-2"]').click({ force: true });
    cy.get('[placeholder="Current Address"]').type(address);

    cy.get('#state').type('S{downArrow}{enter}');

    cy.get('#city').type('{downArrow}{enter}');

    cy.get('[id="submit"]').click();

    cy.get('.modal-content').should('exist');
    cy.get('.modal-header').should('contain', 'Thanks for submitting the form');
    cy.get('.modal-body').should('contain', userName);
    cy.get('.modal-body').should('contain', userSurname);
    cy.get('.modal-body').should('contain', email);

    cy.get('.modal-body').should('contain', 'Gender', 'female');
    cy.get('.modal-body').should('contain', 'Mobile', mobileNumber);
    cy.get('.modal-body').should('contain', 'Date of Birth', '22 May');
    cy.get('.modal-body').should('contain', 'Hobbies', 'Music');
    cy.get('.modal-body').should('contain', 'Address', address);
    cy.get('.modal-body').should('contain', 'State');
    cy.get('.modal-body').should('contain', 'City');

    cy.get('[id="closeLargeModal"]').click();
  });
});
