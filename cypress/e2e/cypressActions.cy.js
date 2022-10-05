/// <reference types='cypress' />
const { generateUser } = require('../support/generate');

describe('Student Registration Form', () => {
  before(() => {
    cy.visit(`https://demoqa.com/automation-practice-form`);
  });

  it('User is able to register an account', () => {
    const { firstName, lastName, email, phone, address } = generateUser();
    
    cy.get('[id="firstName"]')
     .type(firstName);

    cy.get('[id="lastName"]')
     .type(lastName);

    cy.get('[id="userEmail"]')
     .type(email);

    cy.get('[type="radio"]')
     .check('Male', {force: true});

    cy.get('[id="userNumber"]')
     .type(phone);

    cy.get('[id="dateOfBirthInput"]')
     .type('{selectAll}'); 
    cy.get('[id="dateOfBirthInput"]')
     .type('22 Oct 1991{enter}');

    cy.get('[id="subjectsInput"]')
     .type('ma{enter}'); 
    cy.get('[id="subjectsInput"]')
     .type('sc{enter}'); 
    cy.get('[id="subjectsInput"]')
     .type('ac{enter}'); 

    cy.get('[id="hobbies-checkbox-2"]')
     .check({force: true});

    cy.get('[id="currentAddress"]')
     .type(address);

    cy.get('[id="state"]')
     .click();
    cy.contains('NCR')
     .click();

    cy.get('[id="city"]')
     .click();
    cy.contains('Gurgaon')
     .click({force: true});

    cy.get('[id="submit"]')
     .click({force: true});


    cy.get('.modal-header')
     .should('contain','Thanks for submitting the form');
   cy.contains('tr','Student Name')
     .should('contain', firstName +' '+lastName);
   cy.contains('tr','Student Email')
     .should('contain', email);
   cy.contains('tr','Gender')
     .should('contain', 'Male');
   cy.contains('tr','Mobile')
     .should('contain', phone);
   cy.contains('tr','Date of Birth')
     .should('contain', "22 October,1991");
   cy.contains('tr','Subjects')
     .should('contain', 'Maths, Computer Science, Accounting');
   cy.contains('tr','Hobbies')
     .should('contain', 'Reading');
   cy.contains('tr','Picture')
   cy.contains('tr','Address')
     .should('contain', address);
   cy.contains('tr','State and City')
     .should('contain', 'NCR')
     .and('contain', 'Gurgaon' )
  });
});
