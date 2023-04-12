/// <reference types='cypress' />

describe('Student Registration page', () => {
  let user;

  beforeEach(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
    cy.task('generateUser').then(generatedUser => {
      user = generatedUser;
    });
  });

  it('should allow to register a new user', () => {
    cy.viewport(1024, 1024);
      cy.findByPlaceholder('First Name').type(user.firstName);
      cy.findByPlaceholder('Last Name').type(user.lastName);
      cy.findByPlaceholder('name@example.com').type(user.email);
      cy.findByType('radio').check(user.gender, { force: true });
      cy.findByPlaceholder('Mobile Number').type(user.mobileNumber);
      cy.get('#dateOfBirthInput').click()
      .get('.react-datepicker__month-select').select('April')
      .get('.react-datepicker__year-select').select('2011')
      .get('.react-datepicker__day--012').click();
      cy.get('.subjects-auto-complete__value-container').type('Hi{enter} ar{enter}');
      cy.contains('.custom-control-label', user.hobby).click();
      cy.get('#currentAddress').type(user.address);
      cy.get('#state').type('Ha{enter}');
      cy.get('#city').type('Pa{enter}');
      cy.get('#submit').click();
      cy.get('.modal-body')
      .should('contain.text', user.firstName)
      .should('contain.text', user.email)
      .should('contain.text', user.gender)
      .should('contain.text', user.mobileNumber)
      .should('contain.text', '12 April,2011')
      .should('contain.text', 'Hindi')
      .should('contain.text', user.hobby)
      .should('contain.text', user.address)
      .should('contain.text', 'Haryana Panipat');
  });
});
