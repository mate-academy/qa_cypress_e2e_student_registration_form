const firstName = 'Anderson';
const lastName = 'Konstant';
const userEmail = 'Anderson@gmail.com';
const phoneNumber = '802654594154';
const subjects = 'Mathematics';
const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];
const years = Array.from({ length: 50 }, (_, i) => 1970 + i);
const days = Array.from({ length: 31 }, (_, i) => i + 1);

const randomMonth = months[Math.floor(Math.random() * months.length)];
const randomYear = years[Math.floor(Math.random() * years.length)];
const randomDay = days[Math.floor(Math.random() * days.length)];

describe('Student Registration page', () => {
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('Should register a new student and verify input data in the modal', () => {
    cy.get('#firstName').type(firstName);
    cy.get('#lastName').type(lastName);
    cy.get('#userEmail').type(userEmail);
    cy.get('#genterWrapper > .col-md-9 > :nth-child(3)').click();
    cy.get('#userNumber').type(phoneNumber);
    cy.get('#dateOfBirthInput').click();

    cy.get('.react-datepicker__month-select').select(randomMonth);
    cy.get('.react-datepicker__year-select').select(randomYear.toString());

    cy.get(`.react-datepicker__day--0${String(randomDay).padStart(2, '0')}:not(.react-datepicker__day--outside-month)`)
      .click();

    // eslint-disable-next-line cypress/unsafe-to-chain-command
    cy.get('#subjectsInput').type(subjects).type('{enter}');

    cy.get('#submit').scrollIntoView();
    cy.get('#submit').click();

    cy.get('.modal-content', { timeout: 10000 }).should('be.visible');

    cy.get('.modal-content')
      .should('contain', firstName)
      .and('contain', lastName)
      .and('contain', userEmail)
      .and('contain', phoneNumber)
      .and('contain', subjects);
  });
});
