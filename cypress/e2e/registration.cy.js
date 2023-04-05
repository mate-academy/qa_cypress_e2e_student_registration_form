/// <reference types='cypress' />
import {faker} from '@faker-js/faker';
 const firstName = faker.name.firstName();
 const lastName = faker.name.lastName();
 const streetAddress = faker.address.streetAddress()  
 const number = faker.datatype.number({ min: 1000000 })
describe('Student Registration page', () => {
  before(() => {
    cy.visit('/automation-practice-form')
  });

  it('Student should be registered form by filling all fields in forms except "picture"', () => {
 
    cy.get('[placeholder="First Name"]')
      .type(firstName);
    
    cy.get('[placeholder="Last Name"]')
      .type(lastName);

    cy.get('[placeholder="name@example.com"]')
      .type(`${firstName}@mail.com`);

    cy.get('[for="gender-radio-1"]')
      .click({force: true});

    cy.get('[placeholder="Mobile Number"]')
      .type(`063${number}`);

    cy.get('[id="dateOfBirthInput"]')
      .click()
      .type('{selectAll}')
      .type('01 May 2000')
      .type('{enter}');
    
    cy.get('.subjects-auto-complete__value-container')
      .type('e');
      
    cy.get('[id="react-select-2-option-0"]')
      .click();

    cy.get('[id="currentAddress"]')
      .type(`${streetAddress}`);

    cy.get('[id="hobbies-checkbox-1"]')
      .click({ force: true});

    cy.get('[class=" css-1wa3eu0-placeholder"]')
      .contains('Select State')
      .click({force: true});
    
    cy.get('[id="react-select-3-option-0"]')
      .contains('NCR')
      .click({force: true});
    
    cy.get('[class=" css-1wa3eu0-placeholder"]')
      .contains('Select City')
      .click({force: true})
      .type('Delhi');
      
    cy.get('[id="submit"]')
      .click({ force: true });
    
    cy.get('[id="example-modal-sizes-title-lg"]')
      .should('contain', 'Thanks for submitting the form');

    cy.contains('tr', 'Student Name')  
      .should('contain', `${firstName} ${lastName}`);

    cy.contains('tr', 'Student Email')  
      .should('contain', `${firstName}@mail.com`);

    cy.contains('tr', 'Gender')  
      .should('contain', 'Male');  

    cy.contains('tr', 'Mobile')  
      .should('contain', `063${number}`);

    cy.contains('tr', 'Date of Birth')  
      .should('contain', '01 May,2000'); 

    cy.contains('tr', 'Subject')  
      .should('contain', 'English'); 

    cy.contains('tr', 'Hobbies')  
      .should('contain', 'Sport'); 

    cy.contains('tr', 'Address')  
      .should('contain', `${streetAddress}`); 

    cy.contains('tr', 'State and City')  
      .should('contain', 'NCR Delhi');
  });
});
