/// <reference types='cypress' />

import { faker } from '@faker-js/faker';

describe('User should', () => {
  it('successfully enter all data', () => {
  
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const email = faker.internet.email();
  const phoneNumber = faker.phone.number('##########');
  const adress = faker.address.streetAddress() + ' ' + faker.address.secondaryAddress() + ' ' + faker.address.zipCode();
  const bd = '22 July,1997';
  const subject = 'Arts';

    cy.visit('/');

    cy.get('#firstName')
    .type(firstName);

    cy.get('[id="lastName"]')
    .type(lastName);

    cy.get('[id="userEmail"]')
    .type(email);

    cy.get('#gender-radio-2')
    .check({ force: true});
    
    cy.get('[id="userNumber"]')
    .type(phoneNumber);

    cy.get('#dateOfBirthInput')
    .type('{selectall}')
    .type(`${bd}{enter}`)

    cy.get('[id="subjectsContainer"]')
    .type(subject)

    cy.get('#react-select-2-option-0')
    .click();

    cy.get('[for="hobbies-checkbox-1"]')
    .click();
    
    cy.get('[for="hobbies-checkbox-3"]')
    .click();

    cy.get('[id="currentAddress"]')
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

    cy.contains('tr', 'Student Name').should('contain', `${firstName} ${lastName}`);
    cy.contains('tr', 'Student Email').should('contain', email);
    cy.contains('tr', 'Gender').should('contain', 'Female');
    cy.contains('tr', 'Mobile').should('contain', phoneNumber);
    cy.contains('tr', 'Date of Birth').should('contain', bd);
    cy.contains('tr', 'Subjects').should('contain', subject);
    cy.contains('tr', 'Hobbies').should('contain', 'Sports, Music');
    cy.contains('tr', 'Picture').should('contain', '');
    cy.contains('tr', 'Address').should('contain', adress);
    cy.contains('tr', 'State and City').should('contain', 'NCR Noida');
  });
});
