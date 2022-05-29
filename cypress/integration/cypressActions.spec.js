/// <reference types='cypress' />

// const { contains } = require("cypress/types/jquery");

describe('User can', () => {
  let user;
  let date = '03 Mar 1989';

  before(() => {
      cy.task('freshUser').then((freshUser) => {
          user = freshUser;
      });

      cy.visit('/');
  });

  it('submit Student registration form', () => {
    cy.get('#firstName').type(user.userFirstName).should('have.value', user.userFirstName);
    cy.get('#lastName').type(user.userLastName).should('have.value', user.userLastName);
    cy.get('#userEmail').type(user.email).should('have.value', user.email);
    cy.get('#gender-radio-1').click({force: true});
    cy.get('.custom-control-label').contains('Female').click();
    cy.get('#userNumber').type(user.mobileNumber).should('have.value', user.mobileNumber);
    cy.get('#dateOfBirthInput').type('{selectall}').type(date).should('have.value', date);
    cy.get('select.react-datepicker__month-select').select('April').should('have.value', '3');
    cy.get('select.react-datepicker__year-select').select('1991').should('have.value', '1991');
    cy.get('.react-datepicker__day--028').click();
    cy.get('#subjectsContainer').type('che{enter}')
    cy.get('.css-12jo7m5').should('contain', 'Chemistry');
    cy.get('#hobbies-checkbox-1').click({force: true});
    cy.get('.custom-control-label').contains('Reading').click({force: true});
    cy.get('#currentAddress').type(user.address).should('have.value', user.address);
    cy.get('#state').type('har{enter}').should('contain', 'Haryana');
    cy.get('#city').type('a{enter}').should('contain', 'Karnal');
    cy.get('#submit').click();
    cy.get('[class="table table-dark table-striped table-bordered table-hover"]')
      .contains(`${user.userFirstName} ${user.userLastName}`)
      .should('contain', `${user.userFirstName} ${user.userLastName}`);
    cy.get('[class="table table-dark table-striped table-bordered table-hover"]').contains(user.email).should('contain', user.email);
    cy.get('[class="table table-dark table-striped table-bordered table-hover"]').contains('Female').should('contain', 'Female');
    cy.get('[class="table table-dark table-striped table-bordered table-hover"]').contains(user.mobileNumber).should('contain', user.mobileNumber);
    cy.get('[class="table table-dark table-striped table-bordered table-hover"]').contains('28 April,1991').should('contain', '28 April,1991');
    cy.get('[class="table table-dark table-striped table-bordered table-hover"]').contains('Sports, Reading').should('contain', 'Sports, Reading');
    cy.get('[class="table table-dark table-striped table-bordered table-hover"]').contains(user.address).should('contain', user.address);
    cy.get('[class="table table-dark table-striped table-bordered table-hover"]').contains('Haryana Karnal').should('contain', 'Haryana Karnal');
  });
});
