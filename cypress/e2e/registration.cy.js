/// <reference types='cypress' />

describe('Student Registration page', () => {
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });
  const userName = 'Bohdan';
  const userSurname = 'Svystun';
  const email = 'randomemail@gmail.com';
  const subject = 'Biology';
  const mobile = '3809761337';
  const gender = 'male';
  const city = 'Agra';
  const state = 'Uttar Pradesh';
  const address = 'Lviv';
  it('should successfully register the user with valid credentials', () => {
    cy.viewport(1920, 1080);
    cy.get('[placeholder="First Name"]').should('exist').type(userName);

    cy.get('#firstName:invalid').should('not.exist');

    cy.get('[placeholder="Last Name"]').should('exist').type(userSurname);

    cy.get('#lastName:invalid').should('not.exist');

    cy.get('[placeholder="name@example.com"]').should('exist').type(email);

    cy.get('[for="gender-radio-1"]').should('exist').click();

    cy.get('[for="gender-radio-1"]:invalid').should('not.exist');

    cy.get('[placeholder="Mobile Number"]').should('exist').type(mobile);

    cy.get('#userNumber:invalid').should('not.exist');

    cy.get('[id="dateOfBirthInput"]').should('exist').click();

    cy.get('.react-datepicker__year-select').should('exist').select('1991');

    cy.get('.react-datepicker__day--028').should('exist').click();

    cy.get('[id="subjectsContainer"]').should('exist');

    cy.get('[id="subjectsContainer"]').type(subject);
    cy.get('[id="subjectsContainer"]').click();

    cy.get('[for="hobbies-checkbox-2"]').should('exist');

    cy.get('[for="hobbies-checkbox-2"]').click();

    cy.get('[placeholder="Current Address"]').should('exist').type(address);

    cy.get('#state').should('exist').type('Utt{enter}');

    cy.get('#city').should('exist').type('Ag{enter}');

    cy.get('[id="submit"]').should('exist').click();

    cy.get('.modal-content').should('exist');

    cy.get('.modal-header').should('exist')
      .should('contain', 'Thanks for submitting the form');

    cy.get('.modal-body').should('exist').should('contain', userName);

    cy.get('.modal-body').should('exist').should('contain', userSurname);

    cy.get('.modal-body').should('exist').should('contain', email);

    cy.get('.modal-body').should('exist').should('contain', 'Gender', gender);

    cy.get('.modal-body').should('exist').should('contain', 'Mobile', mobile);

    cy.get('.modal-body').should('exist')
      .should('contain', 'Date of Birth')
      .should('contain', '28 September,1991');

    cy.get('.modal-body').should('exist').should('contain', 'Hobbies')
      .should('contain', 'Reading');

    cy.get('.modal-body').should('exist').should('contain', 'Address')
      .should('contain', address);

    cy.get('.modal-body').should('exist').should('contain', 'State', state);

    cy.get('.modal-body').should('exist').should('contain', 'City', city);

    cy.get('[id="closeLargeModal"]').should('exist').click();
  });
});
