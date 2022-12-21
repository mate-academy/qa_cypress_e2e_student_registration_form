/// <reference types='cypress' />
const { generateUser } = require('../support/generate');

describe('Student Registration page', () => {
  const { email, password, firstname, lastname, phone, address } = generateUser();

  before(() => {
    cy.visit('/')
  });

  it('should fill all fields in forms except "picture', () => {
    cy.get('#firstName').type(firstname);
    cy.get('#lastName').type(lastname);
    cy.get('#userEmail').type(email);
    cy.get('[for="gender-radio-2"]').click();
    cy.get('#userNumber').type(phone);

    //Date of Birth
    cy.get('#dateOfBirthInput')
      .type('{selectAll}')
      .type('01 Jan 1990')
      .type('{enter}');
    //Subjects
    cy.get('.subjects-auto-complete__value-container')
      .click()
      .type('che' + '{enter}');
    
    cy.get('[for="hobbies-checkbox-2"]') .click();
    cy.get('#currentAddress').type(address);
    cy.get('[class=" css-yk16xz-control"]').click({force: true});
    cy.get('div').contains('Haryana').click({force: true});

    cy.get('[class=" css-yk16xz-control"]').click({force: true});
    cy.get('div').contains('Panipat').click({force: true});

      //Click on [Submit] button
    cy.contains('#submit', 'Submit')
      .click({force: true});

      //Assert inputed data in modal window.
    cy.get('[class="modal-dialog modal-lg"]');
    cy.get('td').contains(firstname + ' ' + lastname);
    cy.get('td').contains(email);
    cy.get('td').contains('Female');
    cy.get('td').contains('01 January,1990');
    cy.get('td').contains(phone);
    cy.get('td').contains('Chemistry');
    cy.get('td').contains('Reading');
    cy.get('td').contains(address);
    cy.get('td').contains('Haryana Panipat');
 
  });
});
