/// <reference types='cypress' />

describe('Name of the group', () => {
  before(() => {
    
  });

  it('All filled fields are validated', () => {
    cy.visit('https://demoqa.com/automation-practice-form');

    cy.viewport(1500, 500);
    
    cy.get('[placeholder="First Name"]')
      .type('Yaroslav');

    cy.get('[placeholder="Last Name"]')
      .type('Donchuk');
    
    cy.get('[placeholder="name@example.com"]')
      .type('donchukoff1@gmail.com');

    cy.get('[for="gender-radio-1"]')
      .should('contain', 'Male')
      .click();

    cy.get('[placeholder="Mobile Number"]')
      .type('3809711121');

    cy.get('[id="dateOfBirthInput"]')
    .click();

    cy.get('[class="react-datepicker__month-select"]')
    .select('April');

    cy.get('[class="react-datepicker__year-select"]')
    .select('1991');

    cy.get('[class="react-datepicker__day react-datepicker__day--023"]')
    .click();

    cy.get('.subjects-auto-complete__value-container')
    .type('Maths{enter}');

    cy.get('[for="hobbies-checkbox-1"]')
      .click();

    cy.get('[placeholder="Current Address"]')
      .type('Peremohy 15');

    cy.contains('#state', 'Select State')
      .type('Haryana{enter}');

    cy.contains('#city', 'Select City')
      .type('Karnal{enter}');

    cy.get('[class="btn btn-primary"]').click({force: true});

    cy.contains('[class="table table-dark table-striped table-bordered table-hover"]', 'Yaroslav Donchuk');
    cy.contains('[class="table table-dark table-striped table-bordered table-hover"]', 'donchukoff1@gmail.com');
    cy.contains('[class="table table-dark table-striped table-bordered table-hover"]', 'Male');
    cy.contains('[class="table table-dark table-striped table-bordered table-hover"]', '3809711121');
    cy.contains('[class="table table-dark table-striped table-bordered table-hover"]', '23 April,1991');
    cy.contains('[class="table table-dark table-striped table-bordered table-hover"]', 'Math');
    cy.contains('[class="table table-dark table-striped table-bordered table-hover"]', 'Sports');
    cy.contains('[class="table table-dark table-striped table-bordered table-hover"]', 'Peremohy 15');
    cy.contains('[class="table table-dark table-striped table-bordered table-hover"]', 'Haryana Karnal');

  });
});
