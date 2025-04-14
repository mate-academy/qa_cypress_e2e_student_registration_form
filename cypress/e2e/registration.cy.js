/// <reference types='cypress' />

describe('Student Registration page', () => {
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('should student registration ', () => {
    const randomNumber = Math.floor(Math.random() * 1000);
    const firstName = `user_${randomNumber}`;
    const lastName = `test_${randomNumber}`;

    cy.get('[placeholder="First Name"]').type(firstName);
    cy.get('[placeholder="Last Name"]').type(lastName);
    cy.get('[placeholder="name@example.com"]').type(`${firstName}@gmail.com`);
    cy.contains('Female').click();
    cy.get('[placeholder="Mobile Number"]').type(1234567890);
    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__month-select').select('March');
    cy.get('.react-datepicker__year-select').select('2002');
    cy.get('.react-datepicker__day--021').click();
    cy.get('.subjects-auto-complete__value-container').type('testing');
    cy.contains('Sports').click();
    cy.get('#currentAddress').type('Ukraine, Kherson');
    cy.get('#stateCity-wrapper > :nth-child(2)').click();
    cy.get('#react-select-3-option-0').click();
    cy.get('#stateCity-wrapper > :nth-child(3)').click();
    cy.get('#react-select-4-option-0').click();
    cy.get('#submit').click();
    cy.get('#example-modal-sizes-title-lg')
      .should('contain.text', 'Thanks for submitting the form');
  });
});
