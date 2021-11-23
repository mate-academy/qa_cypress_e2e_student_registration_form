/// <reference types="cypress" />

const faker = require("faker");
const { exists } = require("fs");
const { getSystemErrorName } = require("util");

describe('Sign up', () => {
    let user;

    before(() => {
        cy.task('newUser')
        .then((newUser) => {
            user = newUser
        });
    })
    
    //Basic
    // it('should goes into "ToolsQA" fill all fealds and click [Submit]', () => {
    // cy.visit('https://demoqa.com/automation-practice-form');


    // cy.get('#firstName.mr-sm-2.form-control')
    // .type(user.username);

    // cy.get('#lastName.mr-sm-2.form-control')
    // .type(user.userLastName);

    // cy.get('#userEmail.mr-sm-2.form-control')
    // .type(user.email);
    
    // cy.get('#userNumber.mr-sm-2.form-control')
    // .type(user.mobNumber);
    
    // cy.get('#dateOfBirthInput')
    // .type('{selectall}')
    // .type('21 Sep 2021{enter}');
    
    // cy.get('.subjects-auto-complete__value-container')
    // .type('S{enter}');
    
    // cy.get('#currentAddress')
    // .type(user.address);
    
    // cy.get('[for="gender-radio-1"]')
    // .click({ force: true })
    
    // cy.get('[for="hobbies-checkbox-3"]')
    // .click({ force: true })

    // cy.get('#state')
    // .type('Raj{enter}');

    // cy.get('#city')
    // .type('Jaip{enter}');

    // cy.get('#submit')
    // .click();

    // cy.contains('#closeLargeModal', 'Close')
    // .should('exist');

    // cy.contains('#example-modal-sizes-title-lg', 'Thanks for submitting the form')
    // .should('exist');

    // cy.contains('[class="table-responsive"]','Label')
    // .should('exist');
    // })

    //Advanced
    it('should goes into "ToolsQA" check if pagination', () => {
    cy.visit('/webtables');

    cy.get('.-pagination')
    .contains('Page')
    .should('exist');

    cy.get('.-pagination')
    .find('.-previous')
    .should('exist');

    cy.contains('.-center', '1')
    .should('exist');

    cy.get('.-pagination')
    .find('.-pageInfo')
    .should('exist');

    cy.get('#addNewRecordButton')
    .click();

    cy.contains('.modal-header', 'Registration Form')
    .should('exist');

     cy.get('#firstName')
    .type(user.username);

    cy.get('#lastName')
    .type(user.userLastName);

    cy.get('#userEmail')
    .type(user.email);

    cy.get('#age')
    .type(user.age);

    cy.get('#salary')
    .type(user.salary);

    cy.get('#department')
    .type('QA');

    cy.get('#submit')
    .click();

    cy.url()
    .should('include', '/webtables');

    cy.get('#delete-record-4')
    .click();
    
    cy.get('[class="rt-tr -odd"]')
    .find('[role="gridcell"]')
    .should('exist');

    cy.get('#edit-record-3')
    .click();

    cy.get('[class="col-md-9 col-sm-12"]')
    .find('[id="salary"]')
    .type('{selectall}')
    .type(user.salary);

    cy.get('#submit')
    .click();

    cy.contains('Cierra')
    .parent('[class="rt-tr -odd"]')
    .within(() => {
      cy.get('[class="rt-td"]')
      .contains('Cierra')
      cy.get('[class="rt-td"]')
      .contains('Vega')
      cy.get('[class="rt-td"]')
      .contains('39')
      cy.get('[class="rt-td"]')
      .contains('cierra@example.com')
      cy.get('[class="rt-td"]')
      .contains('10000')
      cy.get('[class="rt-td"]')
      .contains('Insurance')
    })

    cy.get('#searchBox')
    .type('{selectall}')
    .type('Cier{enter}');

    cy.contains('[role="gridcell"]', 'Cierra')
    .should('exist');

    cy.get('#searchBox')
    .type('{selectall}')
    .type('29{enter}');

    cy.contains('[role="gridcell"]', '29')
    .should('exist');

    cy.get('#searchBox')
    .type('{selectall}')
    .type('120{enter}');

    cy.contains('[role="gridcell"]', '12000')
    .should('exist');

    cy.get('#searchBox')
    .type('{selectall}')
    .type('Compli{enter}');

    cy.contains('[role="gridcell"]', 'Compliance')
    .should('exist');

    cy.get('#searchBox')
    .type('{selectall}')
    .type('Gent{enter}');

    cy.contains('[role="gridcell"]', 'Gentry')
    .should('exist');

    cy.get('#searchBox')
    .type('{selectall}')
    .type('kierra@exa{enter}');

    cy.contains('[role="gridcell"]', 'kierra@example.com')
    .should('exist');

    cy.get('#searchBox')
    .type('{selectall}{del}');

    cy.get('#searchBox')
    .should('be.empty');

    cy.get('#delete-record-1')
    .click();

    cy.get('#delete-record-2')
    .click();

    cy.get('#delete-record-3')
    .click();

    cy.get('[class="rt-tr -padRow -odd"]')
    .should('not.have.value');
    })
    });