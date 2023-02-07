/// <reference types='cypress' />

//const { cell_phone } = require("faker/lib/locales/ar");
const { generateUser } = require("../support/generate");

describe('Student Registration page', () => {
  before(() => {
    cy.visit('/')
  });

  it('should have a text in the header', () => {
    const { randomNumber, firstName, lastName } = generateUser();

    //checking the page
    cy.get('[class="main-header"]')
      .should('contain', 'Practice Form');

    //filling the form
    cy.get('[placeholder="First Name"]')
      .type(firstName);

    cy.get('[placeholder="Last Name"]')
      .type(lastName);

    cy.get('[placeholder="name@example.com"]')
      .type(firstName + '@gmail.com');

    cy.get('[id="gender-radio-2"]')
      .click({force: true});

    cy.get('#userNumber')
      .type(randomNumber);

    cy.get('[id="dateOfBirthInput"]').click().type('{selectAll}')
      .type('18 Dec 2000').type('{enter}');

    cy.get('[class="subjects-auto-complete__value-container subjects-auto-complete__value-container--is-multi css-1hwfws3"]')
      .type('Ma' + '{enter}');

    cy.get('[id="hobbies-checkbox-2"]')
      .click({force: true});

    cy.get('[placeholder="Current Address"]')
      .type('any data');

    cy.get('[class=" css-yk16xz-control"]').click({force: true})
    cy.get('div').contains('Haryana').click({force: true})

    cy.get('[class=" css-yk16xz-control"]').click({force: true})
    cy.get('div').contains('Panipat').click({force: true})
    
    //submitting the form
    cy.get('[class="btn btn-primary"]').contains('Submit').click({force: true})

    //checking the table
    cy.get('[class="modal-dialog modal-lg"]') 
    cy.get('td').contains(firstName + ' ' + lastName)
    cy.get('td').contains(firstName + '@gmail.com')
    cy.get('td').contains('Female')
    cy.get('td').contains('18 December,2000')
    cy.get('td').contains(randomNumber)
    cy.get('td').contains('Maths')
    cy.get('td').contains('Reading')
    cy.get('td').contains('any data')
    cy.get('td').contains('Haryana' + ' Panipat')

    //closing the table
    cy.get('[class="btn btn-primary"]').contains('Close').click({force: true})
  });
});
