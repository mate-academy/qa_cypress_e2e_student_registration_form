/// <reference types='cypress' />
const { generateUser } = require('../support/generate')
const faker = require('faker');

describe('User should be able to', () => {
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('fill all fields with valid data', () => {
    
    cy.get('#firstName')
      .type('Name').as('nameuser');
    cy.get('#lastName').type('Surname').as('surnameuser');
    cy.get('#userEmail').type('testmail@mail.com');
    cy.get('#gender-radio-3').click( {force: true});
    cy.get('#userNumber').type('0631234567');
    cy.get('#dateOfBirthInput')
      .type('{selectAll}')
      .type('01 May 1999'+ '{enter}');
    cy.get('#subjectsInput').type('Hi' + '{enter}');
    cy.get('#hobbies-checkbox-2').click( {force: true});
    cy.get('#currentAddress').type('Ukraine');
    cy.get('#stateCity-wrapper').type('Uttar Pradesh' + '{enter}');
    cy.get('#city').type('Agra' + '{enter}')
    cy.get('#submit').click({force: true});

    cy.contains('tr', 'Student Name').should('contain.text', 'Name');
    cy.contains('tr', 'Student Email').should('contain.text', 'testmail@mail.com');
    cy.contains('tr', 'Gender').should('contain', 'Other');
    cy.contains('tr', 'Mobile').should('contain', '0631234567');
    cy.contains('tr', 'Date of Birth').should('contain.text', '01 May,1999');
    cy.contains('tr', 'Subjects').should('contain.text', 'Hindi');
    cy.contains('tr', 'Hobbies').should('contain.text', 'Reading');
    cy.contains('tr', 'Address').should('contain.text', 'Ukraine');
    cy.contains('tr', 'State and City').should('contain.text', 'Uttar Pradesh Agra');
  });

});



describe('User should be able to', () => {
  
  before(() => {
    cy.visit('https://demoqa.com/webtables');
  });
    it('check pagination', () => {
      for(let i = 0; i <= 3; i++) {
        cy.newUser();
      };

      cy.get('select').select('5');
      cy.contains('button', 'Next').click();
      cy.wait(2000);
      cy.contains('button', 'Previous').click();
  });

  it('select count of raws', () => {
    cy.get('select').select('5');
  });

  it('add new worker', () => {
    cy.newUser();
  });

  it('delete worker', () => {
    cy.get('#delete-record-1').click();
  });

  it('delete all worker', () => {
    for (let i = 2; i <= 8; i++) {
      cy.get(`#delete-record-${i}`).click();
    }
  });

  it('find worker in search field and edit it', () => {
    cy.reload();
    const { generateUser } = require('../support/generate')
    const { lastN, mail  } = generateUser();
    cy.get('#searchBox').type('Alden').click();
    cy.get('#edit-record-2').click();
    cy.get('#lastName').clear().type(lastN);
    cy.get('#userEmail').clear().type(mail);
    cy.get('#submit').click();
  });

  it('validate data in worker row after creating worker', () => {
    cy.reload();
    const { generateUser } = require('../support/generate')
    const { firstN, lastN, mail, ageU, salaryU, departUer  } = generateUser();
      cy.get('#addNewRecordButton').click();
      cy.get('#firstName').type(firstN);
      cy.get('#lastName').type(lastN);
      cy.get('#userEmail').type(mail);
      cy.get('#age').type(ageU);
      cy.get('#salary').type(salaryU);
      cy.get('#department').type(departUer);
      cy.get('#submit').click();
    
      cy.get('[class="rt-td"]').should('contain', `${firstN}`)
      cy.get('[class="rt-td"]').should('contain', `${lastN}`)
      cy.get('[class="rt-td"]').should('contain', `${mail}`)
      cy.get('[class="rt-td"]').should('contain', `${ageU}`)
      cy.get('[class="rt-td"]').should('contain', `${salaryU}`)
      cy.get('[class="rt-td"]').should('contain', `${departUer}`)
  });

  it('check search by "First Name" column', () => {
    cy.get('#searchBox').type('Alden').click();
  });

  it('check search by "Last Name" column', () => {
    cy.get('#searchBox').type('Gentry').click();
  });

  it('check search by "Age" column', () => {
    cy.get('#searchBox').type('45').click();
  });

  it('check search by "Email" column', () => {
    cy.get('#searchBox').type('alden@example.com').click();
  });

  it('check search by "Salary" column', () => {
    cy.get('#searchBox').type('10000').click();
  });

  it('check search by "Department" column', () => {
    cy.get('#searchBox').type('Legal').click();
    
  });
});
