/// <reference types='cypress' />
import {faker} from '@faker-js/faker';
 const firstName = faker.name.firstName();
 const lastName = faker.name.lastName();
 const streetAddress = faker.address.streetAddress()  
describe('Student Registration page', () => {
  before(() => {
    cy.visit('/automation-practice-form')
  });

  it('Student should be registered form by filling all fields in forms except "picture"', () => {
    
    const randomNumberGenerator = Math.random(7).toString().slice(3)
    
    cy.get('[placeholder="First Name"]')
      .type(firstName);
    
    cy.get('[placeholder="Last Name"]')
      .type(lastName);

    cy.get('[placeholder="name@example.com"]')
      .type(`${firstName}@mail.com`);

    cy.get('[for="gender-radio-1"]')
      .click({force: true});

    cy.get('[placeholder="Mobile Number"]')
      .type(`063${randomNumberGenerator}`);

    cy.get('[id="dateOfBirthInput"]')
      .click()
      .type('{selectAll}')
      .type('01 May 2000')
      .type('{enter}');
    
    cy.get('.subjects-auto-complete__value-container')
      .type('e')
      
    cy.get('[id="react-select-2-option-0"]')
      .click()

    cy.get('[id="currentAddress"]')
      .type(`${streetAddress}`)

    cy.get('[id="hobbies-checkbox-1"]')
      .click({ force: true});

    cy.get('[class=" css-1wa3eu0-placeholder"]')
      .contains('Select State')
      .click({force: true})
    
    cy.get('[id="react-select-3-option-0"]')
      .contains('NCR')
      .click({force: true})
    
    cy.get('[class=" css-1wa3eu0-placeholder"]')
      .contains('Select City')
      .click({force: true})
      .type('Delhi')
      
    cy.get('[id="submit"]')
      .click({ force: true })
    
    cy.get('[id="example-modal-sizes-title-lg"]')
      .should('contain', 'Thanks for submitting the form')
  });
});
