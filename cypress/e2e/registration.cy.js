/* eslint-disable max-len */
/// <reference types='cypress' />

describe('Student Registration page', () => {
  beforeEach(() => {
    // Przechodzenie do strony przed każdym testem
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('Wypełnij formularz bez pola "picture"', () => {
    // Wprowadź dane do formularza
    const firstName = 'Imie';
    const lastName = 'Nazwisko';
    const userEmail = 'email@example.com';
    const userNumber = '1234567890';
    const subjects = 'Running';
    const currentAddress = 'Adres testowy';

    cy.get('#firstName').type(firstName);
    cy.get('#lastName').type(lastName);
    cy.get('#userEmail').type(userEmail);
    cy.get('[for="gender-radio-1"]').click(); // Wybierz płci "Mężczyzna"
    cy.get('#userNumber').type(userNumber);
    cy.get('#dateOfBirthInput').type('{selectall}06 Dec 2000{enter}');

    // Zaznacz "Music" w polu przedmiotów
    cy.get('#subjectsInput').type(subjects);

    // Wybierz zainteresowania
    cy.get('label[for="hobbies-checkbox-1"]').click();
    // Pomijamy pole "picture", ponieważ Cypress nie obsługuje ładowania plików w prosty sposób

    // Wprowadź aktualny adres
    cy.get('#currentAddress').type(currentAddress);

    // Scroll into view and select the state
    cy.get('#state').type('{downarrow}{enter}');
    //
    cy.get('#city').type('{downarrow}{enter}');

    // Scroll into view and select the city
    // cy.get('#city').scrollIntoView();
    // cy.get('.css-1fhf3k1-control input').type('Delhi');
    // cy.get('.css-1fhf3k1-control input').type('{enter}');

    // Kliknij przycisk "Submit"
    cy.get('#submit').click();

    // Assert inputted data in the modal
    cy.get('.modal-body').should('be.visible');
  });
});
