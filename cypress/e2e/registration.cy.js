/// <reference types='cypress' />

const userName = 'BlablablaMay13';
const userSurname = 'BlablablaMay13LastName';
const email = 'useremail@gmail.com';
const subject = 'GJ';

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
    cy.get('[placeholder="Mobile Number"]').type('380961157394');
    cy.get('[id="dateOfBirthInput"]').click();
    cy.get('.react-datepicker__year-select').select('1983');
    cy.get('.react-datepicker__day--022').click();
    cy.get('[id="subjectsContainer"]').type(subject);
    cy.get('[for="hobbies-checkbox-3"]').click();
    cy.get('[placeholder="Current Address"]').type('Kyiv,Stepana Bandery,23');
    cy.get('#state').type('nc{enter}');
    cy.get('#city').type('del{enter}');
    cy.get('[id="submit"]').click();
    
    cy.get('.modal-content').should('exist');
    cy.get('.modal-header').should('contain', 'Thanks for submitting the form');
    cy.get('.modal-body').should('contain', 'BlablablaMay13');
    cy.get('.modal-body').should('contain', 'BlablablaMay13LastName');
    cy.get('.modal-body').should('contain', 'email');
    cy.get('.modal-body').should('contain', 'Gender', 'female');
    cy.get('.modal-body').should('contain', 'Mobile', '380961157394');
    cy.get('.modal-body').should('contain', 'Date of Birth', '22 May');
    cy.get('.modal-body').should('contain', 'Hobbies', 'Music');
    cy.get('.modal-body').should('contain', 'Address', 'Kyiv,Stepana Bandery,23');
    cy.get('.modal-body').should('contain', 'State', 'NCR');
    cy.get('.modal-body').should('contain', 'City', 'Delhi');
    cy.get('[id="closeLargeModal"]').click();

  });
});
