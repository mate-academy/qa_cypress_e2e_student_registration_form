const { generateUser } = require('../support/generate');

/// <reference types='cypress' />

describe('Student Registration page', () => {
  before(() => {
    cy.visit('/')
  });

  it('should register new student by filling in all fields ', () => {
    const user = generateUser();

    cy.findByPlaceholder('First Name')
    .type(user.first_name);

    cy.findByPlaceholder('Last Name')
    .type(user.last_name);

    cy.findByPlaceholder('name@example.com')
    .type(user.email);

    cy.get('#gender-radio-2')
    .click({force: true});

    cy.findByPlaceholder('Mobile Number')
    .type(user.phone_number);

    cy.get('#dateOfBirthInput')
    .type('{selectAll}'+ '24 ' + 'Aug ' + '2005' + '{enter}');

    cy.get('#subjectsContainer')
    .type('M' + '{enter}' + 'E' + '{enter}');

    cy.get('#hobbies-checkbox-2')
    .click({force: true});

    cy.get('#hobbies-checkbox-3')
    .click({force: true});

    cy.findByPlaceholder('Current Address')
    .type(user.random.slice(0, 2) + ', ' + user.street + ' Str.');

    cy.get('#state').click({force: true})
    .type('a'+ '{enter}');

    cy.get('#city').click({force: true})
    .type('{enter}');

    cy.get('#submit')
    .click({force: true});

    cy.submittingFormExists();

    cy.submittingFormContainsInHeader('Thanks for submitting the form');

    cy.submittingFormContainsInBody(`${user.first_name} ${user.last_name}`);

    cy.submittingFormContainsInBody(user.email);

    cy.submittingFormContainsInBody('Gender');

    cy.submittingFormContainsInBody('Mobile');

    cy.submittingFormContainsInBody('Date of Birth');

    cy.submittingFormContainsInBody('Subjects');

    cy.submittingFormContainsInBody('Hobbies');

    cy.submittingFormContainsInBody(user.street);

    cy.submittingFormContainsInBody('State and City');

    cy.submittingFormContainsInFooter('Close');
  });
});
