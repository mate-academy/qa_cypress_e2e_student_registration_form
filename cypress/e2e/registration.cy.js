/* eslint-disable max-len */
/// <reference types='cypress' />

describe('Student Registration page', () => {
  const user = {
    firstName: 'test',
    lastName: 'user',
    email: 'test_user123@mail.com',
    mobile: '1234567890',
    dateOfBirth: '22 Mar,1995',
    subjects: 'English',
    currentAddress: 'street13, delhi'
  };

  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('should register new user', () => {
    cy.findByPlaceholder('First Name')
      .type(user.firstName);
    cy.findByPlaceholder('Last Name')
      .type(user.lastName);
    cy.findByPlaceholder('name@example.com')
      .type(user.email);
    cy.get('[for="gender-radio-2"]')
      .click();
    cy.findByPlaceholder('Mobile Number')
      .type(user.mobile);

    cy.get('[id="dateOfBirthInput"]')
      .click();
    cy.get('[class="react-datepicker__year-select"]')
      .select('1995');
    cy.get('[class="react-datepicker__month-select"]')
      .select('March');
    cy.get('[class="react-datepicker__day react-datepicker__day--022"]')
      .click();

    cy.get('[id="subjectsContainer"]')
      .type(user.subjects + '{enter}');

    cy.get('[for="hobbies-checkbox-2"]')
      .click();

    cy.findByPlaceholder('Current Address')
      .type(user.currentAddress);

    cy.get('[id="state"]')
      .type('NCR' + '{enter}');

    cy.get('[id="city"]')
      .type('delhi' + '{enter}');

    cy.get('[type="submit"]')
      .click();

    cy.get('[class="modal-body"]')
      .should('contain.text', user.firstName)
      .should('contain.text', user.lastName)
      .should('contain.text', user.email)
      .should('contain.text', user.mobile)
      .should('contain.text', user.subjects)
      .should('contain.text', user.currentAddress)
      .should('contain.text', 'NCR')
      .should('contain.text', 'Delhi');
  });
});
