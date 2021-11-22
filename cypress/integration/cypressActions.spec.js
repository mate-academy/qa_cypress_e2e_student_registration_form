/// <reference types="cypress" />

const faker = require("faker");
const { exists } = require("fs");

describe('Cypress Sign up', () => {
    let user;

    before(() => {
        cy.task('newUser')
        .then((newUser) => {
            user = newUser
        });
    })
    it('Should goes into "demoqa" fill all fiealds and click [Submit]', () => {
    cy.visit('https://demoqa.com/automation-practice-form');


    cy.get('#firstName.mr-sm-2.form-control')
    .type(user.username);

    cy.get('#lastName.mr-sm-2.form-control')
    .type(user.userLastName);

    cy.get('#userEmail.mr-sm-2.form-control')
    .type(user.email);
    
    cy.get('#userNumber.mr-sm-2.form-control')
    .type(user.mobNumber);
    
    cy.get('#dateOfBirthInput')
    .type('{selectall}')
    .type('21 Sep 2021{enter}');
    
    cy.get('.subjects-auto-complete__value-container')
    .type('S{enter}');
    
    cy.get('#currentAddress')
    .type(user.address);
    
    cy.get('[for="gender-radio-1"]')
    .click({ force: true })
    
    cy.get('[for="hobbies-checkbox-3"]')
    .click({ force: true })

    cy.get('#state')
    .type('Raj{enter}');

    cy.get('#city')
    .type('Jaip{enter}');

    cy.get('#submit')
    .click();

    cy.contains('#closeLargeModal', 'Close')
    .should('exist');

    cy.contains('#example-modal-sizes-title-lg', 'Thanks for submitting the form')
    .should('exist');

    cy.contains('[class="table-responsive"]','Label')
    .should('exist');
    })
    });