/// <reference types='cypress' />

describe('Student Registration page', () => {
  const firstName = 'Vlad';
  const lastName = 'Tkachuk';
  const email = 'vlad@gmail.com';
  const gender = 'Male';
  const phone = '1234567890';
  const birthDay = '23 July,2004';
  const subjects = 'Maths';
  const hobbies = ['Sports', 'Reading'];
  const address = 'Current Address';
  const state = 'NCR';
  const city = 'Delhi';

  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('should fill form and show correct data in the modal window', () => {
    cy.get('#firstName').type(firstName);
    cy.get('#lastName').type(lastName);
    cy.get('#userEmail').type(email);
    cy.contains('.custom-control-label', gender).click();
    cy.get('#userNumber').type(phone);

    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__month-select').select('July');
    cy.get('.react-datepicker__year-select').select('2004');
    cy.get('.react-datepicker__day--023').click();

    cy.get('.subjects-auto-complete__value-container').type(subjects);

    cy.get('.subjects-auto-complete__menu').contains(subjects).click();
    hobbies.forEach((hobby) => {
      cy.contains('.custom-control-label', hobby).click();
    });

    cy.get('#currentAddress').type(address);

    cy.get('#state').click();
    cy.get('.css-26l3qy-menu').contains(state).click();

    cy.get('#city').click();
    cy.get('.css-26l3qy-menu').contains(city).click();

    cy.get('#submit').click();

    cy.get('.modal-content').should('be.visible');
    cy.get('td').contains(`${firstName} ${lastName}`);
    cy.get('td').contains(email);
    cy.get('td').contains(gender);
    cy.get('td').contains(phone);
    cy.get('td').contains(birthDay);
    cy.get('td').contains(subjects);
    hobbies.forEach((hobby) => {
      cy.get('td').contains(hobby);
    });
    cy.get('td').contains(address);
    cy.get('td').contains(`${state} ${city}`);
  });
});
