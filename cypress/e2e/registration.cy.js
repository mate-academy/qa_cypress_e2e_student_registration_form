/// <reference types='cypress' />

// describe('Student Registration page', () => {
//   beforeEach(() => {
//     cy.visit('https://demoqa.com/automation-practice-form');
//   });

//   it('should allow to register new user', () => {
//     const randomNumber = Math.random().toString().slice(2);
//     const userName = `tes_tuser-${randomNumber}`;

//     cy.get('#firstName')
//       .type(userName);

//     cy.get('#lastName')
//       .type(userName);

//     cy.get('#userEmail')
//       .type(`${userName}@email.com`);
//     cy.get('.custom-control-label')
//       .contains('Female')
//       .click();
//     cy.get('#userNumber')
//       .type('123456789');
//     cy.get('#dateOfBirthInput')
//       .click();
//     cy.get('.react-datepicker__month-select')
//       .select('9');
//     cy.get('.react-datepicker__year-select')
//       .select('1978');
//     cy.get('.react-datepicker__day--008')
//       .contains('8')
//       .click();

//     // cy.get('.react-datepicker__day--007:not(.react-datepicker__day--outside-month)').click();

//     cy.get('.subjects-auto-complete__value-container')
//       .type('about me');
//     cy.get('.custom-control-label')
//       .contains('Sport')
//       .click();
//     cy.get('.custom-control-label')
//       .contains('Music')
//       .click();
//     cy.get('.custom-control-label')
//       .contains('Reading')
//       .click();
//     cy.get('#uploadPicture')
//       .click();
//     // current address text area cy.get('#currentAddress')
//     // select state i select city cy.get('#state > .css-yk16xz-control > .css-1hwfws3 > .css-1wa3eu0-placeholder')
//     cy.get('#submit')
//       .should('be.visible')
//       .click();

//     // cy.url()
//     //    .should('include', '/user/login');
//   });
// });
describe('Student Registration Form', () => {
  let user;

  before(() => {
    cy.task('generateUser').then(generatedUser => {
      user = generatedUser;
    });
  });

  it('shoud registera new Student', () => {
    // Verify registration form opens
    cy.visit('https://demoqa.com/automation-practice-form');
    cy.get('.main-header').contains('Sign up').click();
    cy.get('body form').should('have.id', 'userForm');
    // Fill student data
    cy.findByPlaceholder('First Name').type(user.firstName);
    cy.findByPlaceholder('Last Name').type(user.lastName);
    cy.findByPlaceholder('name@example.com').type(user.email);
    cy.contains('genterWrapper', user.gender, { matchCase: false }).click();
    cy.findByPlaceholder('Mobile Number').type(user.phoneNumber);
    cy.get('#dateOfBirth');
  });
});
