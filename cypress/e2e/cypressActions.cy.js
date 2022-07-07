/// <reference types='cypress' />

const { generateUser } = require('../support/generate');

describe('Registration', () => {
  before(() => {
    cy.visit('/');
    
  });

  it('should register', () => {
    const {firstName, lastName, email, address, mobile} = generateUser();

    cy.get('[placeholder = "First Name"]')
      .type(firstName);
    cy.get('[Placeholder = "Last Name"]')
      .type(lastName);
    cy.get('[Placeholder = "name@example.com"]')
      .type(email);

    cy.get('[type="radio"]')
      .check("Female",{force: true});

    cy.get('[Placeholder = "Mobile Number"]')
      .type(mobile);

    cy.get('#dateOfBirthInput')
      .click();
    cy.get('.react-datepicker__month-select')
      .select('April');
    cy.get('.react-datepicker__year-select')
      .select('1985');
    cy.get('.react-datepicker__day--027')
      .click();

    cy.get('.subjects-auto-complete__value-container')
      .type("mat");
    cy.get('#react-select-2-option-0')
      .click();
    cy.get('.subjects-auto-complete__value-container')
      .type("ar");
    cy.get('#react-select-2-option-0')
      .click();

      // cy.get('#hobbies-checkbox-1').check({force: true})
    cy.get('[type="checkbox"]')
      .check({force: true}); 

    cy.get('[Placeholder = "Current Address"]')
      .type(address);


    cy.get('.css-yk16xz-control > .css-1hwfws3 > .css-1wa3eu0-placeholder')
      .click();
    cy.get('#react-select-3-option-2')
      .click();

    cy.get('#city > .css-yk16xz-control > .css-1hwfws3')
      .click();
    cy.get('#react-select-4-option-1')
      .click();
    cy.contains("button", "Submit")
      .click({force:true});
    

    cy.get('.modal-header')
      .should('contain','Thanks for submitting the form');
    
    cy.contains('tr','Student Name')
      .should('contain', firstName +' '+lastName);

    cy.contains('tr','Student Email')
      .should('contain', email);

    cy.contains('tr','Mobile')
      .should('contain', mobile);

    cy.contains('tr','Date of Birth')
      .should('contain', "27 April,1985");

    cy.contains('tr','Subjects')
      .should('contain', 'Maths, Arts');

    cy.contains('tr','Picture')
    
    cy.contains('tr','Hobbies')
      .should('contain', 'Sports, Reading, Music');

    cy.contains('tr','Address')
      .should('contain', address);

    cy.contains('tr','State and City')
      .should('contain', 'Haryana')
      .and('contain', 'Panipat' )


  });

});
