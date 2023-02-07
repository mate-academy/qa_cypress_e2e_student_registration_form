/// <reference types='cypress' />

const { generateUser } = require("../support/generate");

describe('Student Registration page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('User should be able to register', () => {
    const user = generateUser();
    const birthMonth = user.birth.month;
    const birthYear = user.birth.year;

    cy.get('[placeholder="First Name"]')
      .type(user.firstName)

    cy.get('[placeholder="Last Name"]')
      .type(user.lastName)

    cy.get('[placeholder="name@example.com"]')
      .type(user.email)

    cy.contains('.custom-control-label', user.gender)
      .click();
    
    cy.get('[placeholder="Mobile Number"]')
      .type(user.phoneNumber)

    /*cy.get('#dateOfBirthInput')
     .type('{selectAll}12 Jun 1984{enter}');*/
     
     cy.get('#dateOfBirthInput')
      .click();
      cy.pickDate('month-select').select(`${user.birth.month}`);
      cy.pickDate('year-select').select(`${user.birth.year}`);
      cy.pickDate('day')
        .contains(user.birth.day)
        .eq(0)
        .click();
      
      cy.get('.subjects-auto-complete__value-container')
        .type('English{enter}' + 'His{enter}')

      cy.contains('.custom-control-label', user.hobby)
        .click();

      cy.get('[placeholder="Current Address"]')
        .type(user.address)
    
      cy.get('#state')
        .type('{downArrow}{enter}')

      cy.get('#city')
        .type('{downArrow}{enter}')

      cy.get('#submit')
        .click();

        cy.contains('tr', 'Student Name')
        .should('contain', `${user.firstName} ${user.lastName}`);

      cy.contains('tr', 'Student Email')
        .should('contain', `${user.email}`);

      cy.contains('tr', 'Gender')
        .should('contain', `${user.gender}`);

      cy.contains('tr', 'Mobile')
        .should('contain', `${user.phoneNumber}`);
      
      cy.contains('tr', 'Date of Birth')
        .should('contain', user.birth.day)
        .and('contain', birthMonth)
        .and('contain', birthYear);

      cy.contains('tr', 'Subjects')
        .should('contain', `English, History`);
      
      cy.contains('tr', 'Hobbies')
        .should('contain', `${user.hobby}`);

      cy.contains('tr', 'Address')
        .should('contain', `${user.address}`);

      cy.contains('tr', 'State and City')
        .should('contain', 'Uttar Pradesh Lucknow');

      cy.get('#closeLargeModal')
        .should('contain', 'Close');
  });
});
