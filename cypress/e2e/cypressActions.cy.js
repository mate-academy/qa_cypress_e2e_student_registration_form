/// <reference types='cypress' />

describe('On the registration form user should be able', () => {
  // before(() => {
    
  // });

  it('to create a new student\'s account', () => {
    const userData = {
      name: 'Vsevolod',
      surname: 'Kosiak',
      email: 'bigarthas88@gmail.com',
      mobile: '21345123',
      adress: 'Ukraine, Kyiv',
      birthDate: '23 July,2001'
    }

    const { name, surname, email, mobile, adress, birthDate } = userData;

    cy.visit('/automation-practice-form');

    cy.findByPlaceholder('First Name')
      .type(name);

    cy.findByPlaceholder('Last Name')
      .type(surname);

    cy.findByPlaceholder('name@example.com')
      .type(email);

    cy.findByForAttribute("gender-radio-1")
      .should('contain', 'Male')
      .click();

    cy.findByPlaceholder('Mobile Number')
      .type(mobile);

    cy.get('#dateOfBirthInput')
      .type('{selectall}')
      .type(`${birthDate} {enter}`);

    cy.get('#subjectsContainer')
      .type('math{enter}')
      .type('physics{enter}');
    
    cy.findByForAttribute("hobbies-checkbox-3")
      .should('contain', 'Music')
      .click();

    cy.findByPlaceholder('Current Address')
      .type(adress);

    cy.get('#state')
      .click();

    cy.contains('div', 'NCR')
      .click();

    cy.get('#city')
      .click();

    cy.contains('div', 'Noida')
      .click();

    cy.get('#submit')
      .click();

    cy.contains('tr', 'Student Name')
      .should('contain', `${name} ${surname}`);

    cy.contains('tr', 'Student Email')
      .should('contain', email);

    cy.contains('tr', 'Gender')
      .should('contain', 'Male');

    cy.contains('tr', 'Mobile')
      .should('contain', mobile);

    cy.contains('tr', 'Date of Birth')
      .should('contain', birthDate);

    cy.contains('tr', 'Subjects')
      .should('contain', 'Maths, Physics');

    cy.contains('tr', 'Hobbies')
      .should('contain', 'Music');

    cy.contains('tr', 'Address')
      .should('contain', adress);

    cy.contains('tr', 'State and City')
      .should('contain', 'NCR Noida');
  });
});
