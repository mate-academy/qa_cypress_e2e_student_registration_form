/// <reference types='cypress' />

describe('Student Registration page', () => {
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  const firstName = 'Carl';
  const lastName = 'Johnson';
  const email = 'cj@gtasa.com';
  const phone = '6942069420';
  const subject = 'Arts';
  const adress = 'Grove street';
  const state = 'NCR';
  const city = 'Delhi';

  it('Should receive all introduced data', () => {
    cy.get('#firstName').type(firstName);
    cy.get('#lastName').type(lastName);
    cy.get('#userEmail').type(email);
    cy.get('#genterWrapper > .col-md-9 > :nth-child(1)').click();
    cy.get('#userNumber').type(phone);
    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__month-select').select('August');
    cy.get('.react-datepicker__year-select').select('1968');
    cy.get('.react-datepicker__day--011').click();
    cy.get('#subjectsInput').type(subject + `{enter}`);
    cy.get(`[for='hobbies-checkbox-1']`).click();
    cy.get(`[for='hobbies-checkbox-3']`).click();
    cy.get('#currentAddress').type(adress);
    cy.get('#state').type(state + `{enter}`);
    cy.get('#city').type(city + `{enter}`);
    cy.get('#submit').click();

    cy.get('tbody > :nth-child(1) > :nth-child(2)')
      .should('contain', firstName + ' ' + lastName);

    cy.get('tbody > :nth-child(2) > :nth-child(2)')
      .should('contain', email);

    cy.get('tbody > :nth-child(3) > :nth-child(2)')
      .should('contain', 'Male');

    cy.get('tbody > :nth-child(4) > :nth-child(2)')
      .should('contain', phone);

    cy.get('tbody > :nth-child(5) > :nth-child(2)')
      .should('contain', '11 August,1968');

    cy.get('tbody > :nth-child(6) > :nth-child(2)')
      .should('contain', subject);

    cy.get('tbody > :nth-child(7) > :nth-child(2)')
      .should('contain', '');

    cy.get('tbody > :nth-child(9) > :nth-child(2)')
      .should('contain', adress);

    cy.get('tbody > :nth-child(10) > :nth-child(2)')
      .should('contain', state + ' ' + city);
  });
});
