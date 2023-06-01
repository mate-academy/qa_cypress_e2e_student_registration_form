/// <reference types='cypress' />

const baseURL = 'https://demoqa.com/automation-practice-form';
const firstName = Math.random().toString(36).slice(2, 9);
const lastName = Math.random().toString(36).slice(2, 9);
const email = Math.random().toString(36).slice(2, 9) + '@mail.com';
const phoneNumber = '0' + Math.random().toString().slice(2, 11);
const address = 'test Street 4/39'

const subjects = ['English', 'Math', 'History']
const randomSubject = subjects[Math.floor(Math.random() * subjects.length)];

function selectRandom(rangeStart, rangeEnd) {
  return Cypress._.random(rangeStart, rangeEnd);
}

describe('Student Registration page', () => {
  before(() => {
    cy.visit(baseURL);
  });

  it('Should register a new user', () => {
    cy.get('#firstName')
    .clear()
    .type(firstName);

    cy.get('#lastName')
    .clear()
    .type(lastName);

    cy.get('#userEmail')
    .clear()
    .type(email);

    cy.get('[type = "radio"]')
    .eq(selectRandom(0, 2))
    .check({force: true});

    cy.get('#userNumber')
    .clear()
    .type(phoneNumber);

    cy.get('#dateOfBirthInput')
    .click();
    
    cy.get('.react-datepicker__year-select')
    .select(selectRandom(90, 105));

    cy.get('.react-datepicker__month-select')
    .select(selectRandom(0, 11));
    
    cy.get('[role = "option"]')
    .should('have.length.gt', 28)
    .its('length')
    .then((n) => selectRandom(0, n - 1))
    .then((k) => {
      cy.get('[role = "option"]')
      .eq(k)
      .click();
    })
    
    cy.get('[type = "checkbox"]')
    .eq(selectRandom(0, 2))
    .check({force: true});

    cy.get('#subjectsContainer')
    .type(`${randomSubject}{enter}`);

    cy.get('#currentAddress')
    .type(address);

    cy.get('#submit')
    .click({force: true});

    cy.get('#example-modal-sizes-title-lg')
    .should('contains.text', 'Thanks for submitting the form');

  });
});
