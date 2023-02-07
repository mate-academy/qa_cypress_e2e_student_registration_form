/// <reference types='cypress' />

const { generateUser } = require("../support/generate");

describe('Student Registration page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display entered data', () => {
    const { firstname, lastname, email, phone, address, gender, hobby, randomindex } = generateUser();

    cy.get('#firstName')
      .type(firstname);
    
    cy.get('#lastName')
      .type(lastname);
    
    cy.get('#userEmail')
      .type(email);
    
    cy.get('#genterWrapper')
      .get(`#gender-radio-${randomindex}`)
      .check({force: true});
    
    cy.get('#userNumber')
      .type(phone);
    
    cy.get('#dateOfBirthInput')
      .type('{selectAll}08 Jan 1998{enter}');
    
    cy.get('.subjects-auto-complete__value-container')
      .type('En{enter}');
      
    cy.get('#genterWrapper')
      .get(`#hobbies-checkbox-${randomindex}`)
      .check({force: true});
    
    cy.get('#currentAddress')
      .type(address);
    
    cy.get('#state')
      .type('{enter}');
    
    cy.get('#city')
      .type('{enter}');
    
    cy.get('#submit')
      .click();
    
    cy.contains('tr', 'Student Name')
      .should('contain', `${firstname} ${lastname}`);
    
    cy.contains('tr', 'Student Email')
      .should('contain', `${email}`);
    
    cy.contains('tr', 'Gender')
      .should('contain', `${gender[randomindex]}`);
    
    cy.contains('tr', 'Mobile')
      .should('contain', `${phone}`);
    
    cy.contains('tr', 'Date of Birth')
      .should('contain', '08 January,1998');

    cy.contains('tr', 'Subjects')
      .should('contain', `English`);
    
    cy.contains('tr', 'Hobbies')
      .should('contain', `${hobby[randomindex]}`);    
    
    cy.contains('tr', 'Address')
      .should('contain', `${address}`);
    
    cy.contains('tr', 'State and City')
      .should('contain', `NCR Delhi`);
  });
});

