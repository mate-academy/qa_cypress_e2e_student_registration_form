/// <reference types='cypress' />

describe('Practice Form', () => {
  before(() => {
    cy.visit('/');
    //cy.viewport(1600, 1200);
  });

  it('Should register a student filling the required fields', () => {
    cy.get('[placeholder="First Name"]')
    .type('John');

    cy.get('[placeholder="Last Name"]')
    .type('Johnson');

    cy.get('[id="userEmail"]')
    .type('Johnson@gmail.com');

    cy.get('[for="gender-radio-1"]')
    .click();

    cy.get('[placeholder="Mobile Number"]')
    .type('0998887766');
   
    cy.get('[id="dateOfBirthInput"]')
    .type('{selectAll}').type('23 May 1900{enter}');

    cy.get('[class="subjects-auto-complete__control css-yk16xz-control"]')
    .click('right')
    .type('phy{enter}comp{enter}');

    cy.get('[for="hobbies-checkbox-1"]')
    .click();

    cy.get('[for="hobbies-checkbox-3"]')
    .click();

    cy.get('[placeholder="Current Address"]')
    .type('There is no available address. Check your permission key.');

    cy.get('#state')
    .type('Ut{enter}');

    cy.get('#city')
    .type('{enter}');

    cy.get('[id="submit"]')
    .click();

    cy.contains('[class="modal-body"]', 'John Johnson');
    cy.contains('[class="modal-body"]', 'Johnson@gmail.com');
    cy.contains('[class="modal-body"]', 'Male');
    cy.contains('[class="modal-body"]', '0998887766');
    cy.contains('[class="modal-body"]', '23 May,1900');
    cy.contains('[class="modal-body"]', 'Physics, Computer Science');
    cy.contains('[class="modal-body"]', 'Sports, Music');
    cy.contains('[class="modal-body"]', 'There is no available address. Check your permission key.');
    cy.contains('[class="modal-body"]', 'Uttar Pradesh Agra');
  });
});
