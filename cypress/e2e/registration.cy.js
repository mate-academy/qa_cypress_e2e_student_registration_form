/// <reference types='cypress' />

const userName = 'MarkelMarch14';
const userSurname = 'Qwert123@';
const email = 'useremail@gmail.com';
const subject = 'MarkelKo';

describe('Student Registration page', () => {
   before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('should successfully register the user with valid credentials', () => {
    cy.viewport(1280, 900);
    cy.get('[placeholder="First Name"]').type(userName);
    cy.get('[placeholder="Last Name"]').type(userSurname);
    cy.get('[placeholder="name@example.com"]').type(email);
    cy.get('[for="gender-radio-2"]').click();
    cy.get('[placeholder="Mobile Number"]').type('380999458586');
    cy.get('[id="dateOfBirthInput"]').click();
    cy.get('.react-datepicker__year-select').select('1990');
    cy.get('.react-datepicker__day--016').click();
    cy.get('[id="subjectsContainer"]').type(subject);
    cy.get('[for="hobbies-checkbox-3"]').click();
    cy.get('[placeholder="Current Address"]').type('Chust,Slov`yanska 1/2');
    cy.get('#state').type('nc{enter}');
    cy.get('#city').type('del{enter}');
    cy.get('[id="submit"]').click();
    
    cy.get('.modal-content').should('exist');
    cy.get('.modal-header').should('contain', 'Thanks for submitting the form');
    cy.get('.modal-body').should('contain', 'MarkelMarch14');
    cy.get('.modal-body').should('contain', 'Qwert123@');
    cy.get('.modal-body').should('contain', 'email');
    cy.get('.modal-body').should('contain', 'Gender', 'female');
    cy.get('.modal-body').should('contain', 'Mobile', '380999458586');
    cy.get('.modal-body').should('contain', 'Date of Birth', '16 May');
    cy.get('.modal-body').should('contain', 'Hobbies', 'Music');
    cy.get('.modal-body').should('contain', 'Address', 'Chust,Slov`yanska 1/2');
    cy.get('.modal-body').should('contain', 'State', 'NCR');
    cy.get('.modal-body').should('contain', 'City', 'Delhi');
    cy.get('[id="closeLargeModal"]').click();

  });
});
