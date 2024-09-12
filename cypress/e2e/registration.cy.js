/// <reference types='cypress' />


describe('Student Registration page', () => {
  let user;
  before(() => {
    cy.visit('/');
    cy.task('generateUser').then((generateUser) => {
      user = generateUser;
    });
  });

  
  it('Automation registration form', () => {

    cy.get('#firstName')
      .type(user.firstName);
    cy.get('#lastName')
      .type(user.lastName);
    cy.get('#userEmail')
      .type(user.email);
    cy.get('[for="gender-radio-1"]')
      .click();
    cy.get('#userNumber')
      .type(user.phoneNumber);
    cy.get('#dateOfBirthInput')
      .click();
    cy.get('.react-datepicker__month-select')
      .select('July');
    cy.get('.react-datepicker__year-select')
      .select('2008');
    cy.get('.react-datepicker__day--014')
      .click();
      cy.get('.subjects-auto-complete__value-container')
      .type('ch{enter}' + 'p{enter}');
    cy.get('[for="hobbies-checkbox-1"]')
      .click();
    cy.get('#currentAddress')
      .type(user.address);
    cy.get('#state')
      .click();
    cy.get('#react-select-3-option-0')
      .click();
    cy.get('#city')
      .click();
    cy.get('#react-select-4-option-0')
      .click();
    cy.get('#submit')
      .click();
      
    cy.get('.modal-content')
      .should('contain', 'Thanks for submitting the form');
    cy.get('.modal-body')
      .should('contain', user.firstName);
    cy.get('.modal-body')
      .should('contain', user.lastName);
    cy.get('.modal-body')
      .should('contain', user.email);
    cy.contains('tr', 'Gender')
      .should('contain', 'Male');
    cy.get('.modal-body')
      .should('contain', user.phoneNumber);
    cy.contains('tr', 'Date of Birth')
      .should('contain', '14 July,2008');
    cy.contains('tr', 'Subject')
      .should('contain', 'Chemistry', 'Physics');
    cy.contains('tr', 'Hobbies')
      .should('contain', 'Sports');
    cy.contains('tr', 'Address')
      .should('contain', user.address);
    cy.contains('tr', 'State and City')
      .should('contain', '')
         .should('contain', '');
  });
});
