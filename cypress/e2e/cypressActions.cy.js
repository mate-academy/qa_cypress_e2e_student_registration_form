/// <reference types='cypress' />

describe('Practice form', () => {
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('should register a student filling the required fields', () => {
    cy.get('[placeholder="First Name"]')
    .type('Khrystyna');

    cy.get('[placeholder="Last Name"]')
    .type('Borys');

    cy.get('[placeholder="name@example.com"]')
    .type('khrystyna2304@gmail.com');

    cy.get('[id="gender-radio-2"]')
    .click({force: true});

    cy.get('[placeholder="Mobile Number"]')
    .type('0977130012'); 

    cy.get('[id="dateOfBirthInput"]')
    .click();

    cy.get('[class="react-datepicker__month-select"]')
    .select('April');

    cy.get('[class="react-datepicker__year-select"]')
    .select('1991');

    cy.get('[class="react-datepicker__day react-datepicker__day--023"]')
    .click();

    cy.get('[class="subjects-auto-complete__value-container subjects-auto-complete__value-container--is-multi css-1hwfws3"]')
    .type('Maths{enter}');

    cy.get('[id="hobbies-checkbox-1"]')
    .click({force: true});

    cy.get('[placeholder="Current Address"]')
    .type('Lviv, Khotkevycha Street, 44/13');

    cy.get('[id="state"]')
    .type('NCR{enter}');

    cy.get('[id="city"]')
    .type('Delhi{enter}');

    cy.get('[class="btn btn-primary"]')
    .click();

    cy.contains('Thanks for submitting the form')
    .should('be.visible');

    cy.contains('tr', 'Student Name')
    .should('contain', 'Khrystyna Borys');

    cy.contains('tr', 'Student Email')
    .should('contain', 'khrystyna2304@gmail.com');

    cy.contains('tr', 'Gender')
    .should('contain', 'Female');

    cy.contains('tr', 'Mobile')
    .should('contain', '0977130012');

    cy.contains('tr', 'Date of Birth')
    .should('contain', '23 April,1991');

    cy.contains('tr', 'Subjects')
    .should('contain', 'Maths');

    cy.contains('tr', 'Hobbies')
    .should('contain', 'Sports');

    cy.contains('tr', 'Address')
    .should('contain', 'Lviv, Khotkevycha Street, 44/13');

    cy.contains('tr', 'State and City')
    .should('contain', 'NCR Delhi');
 
  });
});
