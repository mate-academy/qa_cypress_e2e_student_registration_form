/// <reference types='cypress' />

// cypress/support/commands.js
Cypress.Commands.add('generateUser', () => {
  const randomString = Math.random().toString(36).substring(7);
  const userEmail = `email${randomString}@example.com`;
  const userNumber = Math.floor(Math.random() * 10000000000).toString();
  const subjects = 'Running';
  const currentAddress = `Adres testowy ${randomString}`;

  return {
    userEmail,
    userNumber,
    subjects,
    currentAddress
  };
});

describe('Student Registration page', () => {
  beforeEach(() => {
    // Set the viewport size before each test
    cy.viewport(1800, 1200);
    // Przechodzenie do strony przed każdym testem
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('Wypełnij formularz bez pola "picture"', () => {
    // Wprowadź dane do formularza
    cy.generateUser().then((randomUserData) => {
      const {
        userEmail,
        userNumber,
        subjects,
        currentAddress
      } = randomUserData;

      cy.get('#firstName').type('Imie');
      cy.get('#lastName').type('Nazwisko');
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

      cy.get('#city').type('{downarrow}{enter}');

      // Kliknij przycisk "Submit"
      cy.get('#submit').click();

      // Assert inputted data in the modal
      cy.get('.modal-body').should('be.visible');
    });
  });
});
