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

  beforeEach(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('should fill form and show correct data in the modal window', () => {
    cy.get('#firstName').type(firstName);
    cy.get('#lastName').type(lastName);
    cy.get('#userEmail').type(email);

    cy.get('#genterWrapper').contains('.custom-control-label', gender).click();

    cy.get('#userNumber').type(phone);

    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__month-select').select('July');
    cy.get('.react-datepicker__year-select').select('2004');
    cy.get('.react-datepicker__day--023').click();

    cy.get('#subjectsInput').type(`${subjects}{enter}`);

    hobbies.forEach((hobby) => {
      // eslint-disable-next-line max-len
      cy.get('#hobbiesWrapper').contains('.custom-control-label', hobby).click();
    });

    cy.get('#currentAddress').type(address);

    cy.get('#state').type(`${state}{enter}`);
    cy.get('#city').type(`${city}{enter}`);

    cy.get('#submit').click();

    cy.get('.modal-content').should('be.visible');
    cy.get('.modal-body').within(() => {
      cy.contains('tr', 'Student Name')
        .should('contain.text', `${firstName} ${lastName}`);
      cy.contains('tr', 'Student Email')
        .should('contain.text', email);
      cy.contains('tr', 'Gender')
        .should('contain.text', gender);
      cy.contains('tr', 'Mobile')
        .should('contain.text', phone);
      cy.contains('tr', 'Date of Birth')
        .should('contain.text', birthDay);
      cy.contains('tr', 'Subjects')
        .should('contain.text', subjects);
      cy.contains('tr', 'Hobbies')
        .should('contain.text', hobbies.join(', '));
      cy.contains('tr', 'Address')
        .should('contain.text', address);
      cy.contains('tr', 'State and City')
        .should('contain.text', `${state} ${city}`);
    });
  });
});
