/// <reference types='cypress' />

describe('Student Registration page', () => {
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });
  const userName = 'userFirstName';
  const userSurname = 'userLastName';
  const email = 'useremail@gmail.com';
  const subject = 'No subkects';
  it('should successfully register the user with valid credentials', () => {
    cy.viewport(1920, 1080);

    cy.get('[placeholder="First Name"]').type(userName);

    cy.get('[placeholder="Last Name"]').type(userSurname);

    cy.get('[placeholder="name@example.com"]').type(email);

    cy.get('[for="gender-radio-1"]').click();

    cy.get('[placeholder="Mobile Number"]').type('3809761337');

    cy.get('[id="dateOfBirthInput"]').click();

    cy.get('.react-datepicker__year-select').select('1991');

    cy.get('.react-datepicker__day--028').click();

    cy.get('[id="subjectsContainer"]').type(subject);

    cy.get('[for="hobbies-checkbox-2"]').click();

    cy.get('[placeholder="Current Address"]').type('Lviv');

    cy.get('#state').type('Utt{enter}');

    cy.get('#city').type('Ag{enter}');

    cy.get('[id="submit"]').click();

    cy.get('.modal-content').should('exist');

    cy.get('.modal-header').should('contain', 'Thanks for submitting the form');

    cy.get('.modal-body').should('contain', 'userFirstName');

    cy.get('.modal-body').should('contain', 'userLastName');

    cy.get('.modal-body').should('contain', 'email');

    cy.get('.modal-body').should('contain', 'Gender', 'male');

    cy.get('.modal-body').should('contain', 'Mobile', '3809761337');

    cy.get('.modal-body').should('contain', 'Date of Birth', '28 September');

    cy.get('.modal-body').should('contain', 'Hobbies', 'Reading');

    cy.get('.modal-body').should('contain', 'Address', 'Lviv');

    cy.get('.modal-body').should('contain', 'State', 'Uttar Pradesh');

    cy.get('.modal-body').should('contain', 'City', 'Agra');

    cy.get('[id="closeLargeModal"]').click();
  });
});
