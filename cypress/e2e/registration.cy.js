/// <reference types='cypress' />

const { dataGenerator } = require('../support/generate')


describe('Student Registration page', () => {
  const { firstName, mail, lastName, number, dateShort, rand, address, gen, hob, dateLong } = dataGenerator();

  before(() => {
    cy.viewport(1100, 1100);
    cy.visit('/');
  });

  it('Should provide an ability to sign up', () => {
    cy.get('#firstName')
      .type(firstName);
    
    cy.get('#lastName')
      .type(lastName);

    cy.get('#userEmail')
      .type(mail);

    cy.get('#genterWrapper')
      .get(`#gender-radio-${rand}`)
        .check({ force:true });

    cy.get('#userNumber').type(number);

    cy.get('#dateOfBirthInput')
      .type(`{selectAll}${dateShort}{enter}`);

    cy.get('.subjects-auto-complete__value-container')
      .type('En{Enter}')

    cy.get('#hobbiesWrapper')
      .get(`#hobbies-checkbox-${rand}`)
        .check({ force:true });

    cy.get('#currentAddress')
      .type(address); 

    cy.get('#state')
      .type('Uttar{Enter}');

    cy.get('#city')
      .type('{DownArrow}{Enter}');

    cy.get('#submit')
      .click();
    
    cy.contains('tr', 'Student Name')
     .should('contain', `${firstName} ${lastName}`);
    
    cy.contains('tr', 'Student Email')
      .should('contain', `${mail}`);

    cy.contains('tr', 'Gender')
      .should('contain', `${gen[rand-1]}`); //обожнюю костилі

    cy.contains('tr', 'Mobile')
      .should('contain', `${number}`);

    cy.contains('tr', 'Date of Birth')
      .should('contain', `${dateLong}`);

    cy.contains('tr', 'Subjects')
      .should('contain', 'English');

    cy.contains('tr', 'Hobbies')
      .should('contain', `${hob[rand-1]}`); //ну вот прям жити без костилів не можу

    cy.contains('tr', 'Address')
      .should('contain', `${address}`);

    cy.contains('tr', 'State and City')
      .should('contain', 'Uttar Pradesh Lucknow');


  });
});
