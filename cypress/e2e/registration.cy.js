/// <reference types='cypress' />

describe('Student Registration page', () => {
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it(`should let enter first name`, () => {
    cy.get(`input[id='firstName']`)
      .should('exist')
      .type('First');
  });

  it(`should let enter last name`, () => {
    cy.get(`input[id='lastName']`)
      .should('exist')
      .type('Last');
  });

  it(`should let enter user email`, () => {
    cy.get(`input[id='userEmail']`)
      .should('exist')
      .type('test@mail.com');
  });

  it(`should let choose gender`, () => {
    cy.get(`label[for='gender-radio-1']`)
      .should('exist')
      .click();
  });

  it(`should let enter phone number`, () => {
    cy.get(`input[id='userNumber']`)
      .should('exist')
      .type('5555555555');
  });

  it(`should let enter user subjects`, () => {
    cy.get(`input[id='subjectsInput']`)
      .should('exist')
      .type('Maths{enter}');
  });

  it(`should let select hobies`, () => {
    cy.get(`label[for='hobbies-checkbox-1']`)
      .should('exist')
      .click();
  });

  it(`should let choose birth date`, () => {
    cy.get(`input[id='dateOfBirthInput']`)
      .should('exist')
      .click();

    cy.get(`select[class='react-datepicker__year-select']`)
      .select('2000');
  });

  it(`should let enter current user address`, () => {
    cy.get(`textarea[id='currentAddress']`)
      .should('exist')
      .type('c address');
  });

  it(`should let select state`, () => {
    cy.get(`div[class=' css-yk16xz-control']`)
      .should('exist')
      .click();

    cy.get(`div[class=' css-1n7v3ny-option']`)
      .should('exist')
      .click();
  });

  it(`should let choose city`, () => {
    cy.get(`div[class=' css-yk16xz-control']`)
      .should('exist')
      .click();

    cy.get(`div[class=' css-1n7v3ny-option']`)
      .should('exist')
      .click();
  });

  it(`should proceed with valid data`, () => {
    cy.get(`button[id='submit']`)
      .should('exist')
      .click();

    cy.get(`table[class='table table-dark table-striped table-` +
      `bordered table-hover']`)
      .should('exist')
      .within(() => {
        cy.get('td').eq(1).contains('First Last');
        cy.get('td').eq(3).contains('test@mail.com');
        cy.get('td').eq(5).contains('Male');
        cy.get('td').eq(7).contains('5555555555');
        cy.get('td').eq(9).contains('05 September,2024');
        cy.get('td').eq(11).contains('Maths');
        cy.get('td').eq(13).contains('Sports');
        cy.get('td').eq(17).contains('c address');
        cy.get('td').eq(19).contains('NCR Delhi');
      });
  });
});
