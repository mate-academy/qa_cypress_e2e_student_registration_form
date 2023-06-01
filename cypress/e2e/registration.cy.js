/// <reference types='cypress' />
import faker from 'faker';

describe('Student Registration page', () => {
  let user;
before(() => {
    cy.visit("https://demoqa.com/automation-practice-form");
    cy.task("generateUser").then((generateUser) => {
      user = generateUser;
    });
  });

  it('Should register new student', () => {
    
    cy.findByPlaceholder('First Name')
      .type(user.firstName);
    cy.findByPlaceholder('Last Name')
      .type(user.lastName);
    cy.get('#userEmail')
      .type(user.email);
    cy.get(`[value=${user.gender}]`)
      .click({ force: true});
    cy.findByPlaceholder('Mobile Number')
      .type(user.mobileNumber);
    cy.get('#dateOfBirthInput')
      .click();
    cy.pickDate('year-select')
      .select(`${user.birth.year}`);
    cy.pickDate('month-select')
      .select(`${user.birth.month}`);
    cy.pickDate('day')
      .contains(user.birth.day)
      .click();
    cy.get('.subjects-auto-complete__value-container')
      .type(user.subject + '{enter}');
    cy.contains('.custom-control-label', user.hobby)
      .click();
    cy.findByPlaceholder('Current Address')
      .type(user.address);
    cy.contains('Select State')
      .type('{downArrow}{enter}');
    cy.contains('Select City')
      .type('{downArrow}{enter}');
    cy.get('#submit')
      .click();
    cy.contains('tr', 'Student Name')
      .should('contain', user.firstName)
      .and('contain', user.lastName);
    cy.contains('tr', 'Student Email')
      .should('contain', user.email);
    cy.contains('tr', 'Gender')
      .should('contain', user.gender);
    cy.contains('tr', 'Mobile')
      .should('contain', user.mobileNumber);
    cy.contains('tr', 'Date of Birth')
      .should('contain', user.birth.year)
      .and('contain', user.birth.day);
    cy.contains('tr', 'Subjects')
      .should('contain', user.subject);
    cy.contains('tr', 'Hobbies')
      .should('contain', user.hobby);
    cy.contains('tr', 'Address')
      .should('contain', user.address);
    cy.contains('tr', 'State and City')
      .should('contain', 'Uttar Pradesh')
      .and('contain', 'Lucknow'); 
      });
  });

