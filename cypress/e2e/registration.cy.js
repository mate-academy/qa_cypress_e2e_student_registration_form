/// <reference types='cypress' />
const { generateUser}  = require('../support/commands');

describe('Student Registration page', () => {
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form')
  });

  it('User is able to fill a registration form', () => {
    const{firstName, lastName, email, phone, gender, subjects, hobbies, address} = generateUser()

    cy.findByPlaceholder('First Name')
      .type(firstName)

    cy.findByPlaceholder('Last Name')
      .type(lastName)

    cy.get('#userEmail')
      .type(email)


    cy.findByPlaceholder('Mobile Number')
      .type(phone)

    cy.get(`[value = ${gender} ]`)
      .click({force: true})

 
    
    cy.get('.subjects-auto-complete__value-container')
    .type(subjects + '{enter}');

    cy.contains('.custom-control-label', hobbies)
    .click();

    cy.findByPlaceholder('Current Address')
     .type(address);

     cy.get('#dateOfBirthInput')
     .type('{selectall} 14 Dec 2003')

    cy.contains('Select State')
      .type('{downArrow}{enter}');


      cy.contains('Select City')
      .type('{downArrow}{enter}');


    cy.get('#submit')
      .click();

    cy.contains('tr', 'Student Name')
      .should('contain', firstName)
      .and('contain', lastName);

    cy.contains('tr', 'Student Email')
      .should('contain', email);

    cy.contains('tr', 'Gender')
      .should('contain', gender);

    cy.contains('tr', 'Mobile')
      .should('contain', phone);

    cy.contains('tr', 'Date of Birth')
      .should('contain', '14 December,2003')
    cy.contains('tr', 'Subjects')
      .should('contain', subjects);

    cy.contains('tr', 'Hobbies')
      .should('contain', hobbies);

    cy.contains('tr', 'Address')
      .should('contain', address);

    cy.contains('tr', 'State and City')
      .should('contain', 'Uttar Pradesh Lucknow'); 
  });
});


