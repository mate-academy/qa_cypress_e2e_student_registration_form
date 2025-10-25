/// <reference types='cypress' />

describe('Student Registration page', () => {
  beforeEach(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('should fill all fields and verify data in modal', () => {
    // Imię i nazwisko
    cy.get('#firstName').type('Joanna');
    cy.get('#lastName').type('Koloczek');

    // Email
    cy.get('#userEmail').type('joanna.koloczek@example.com');

    // Płeć
    cy.get('label[for="gender-radio-2"]').click(); // Female

    // Numer telefonu
    cy.get('#userNumber').type('1234567890');

    // Data urodzenia
    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__month-select').select('May');
    cy.get('.react-datepicker__year-select').select('1995');
    cy.get('.react-datepicker__day--015').click();

    // Przedmioty
    cy.get('#subjectsInput').type('Maths{enter}');

    // Hobby
    cy.get('label[for="hobbies-checkbox-1"]').click(); // Sports
    cy.get('label[for="hobbies-checkbox-2"]').click(); // Reading

    // Adres
    cy.get('#currentAddress').type('Kraków, ul. Długa 12');

    // Stan i miasto
    cy.get('#state').click();
    cy.get('#react-select-3-option-1').click(); // Haryana
    cy.get('#city').click();
    cy.get('#react-select-4-option-0').click(); // Karnal

    // Wysyłka formularza
    cy.get('#submit').click();

    // ✅ Dokładne asercje w modalu
    cy.contains('td', 'Student Name')
      .next('td')
      .should('have.text', 'Joanna Koloczek');

    cy.contains('td', 'Student Email')
      .next('td')
      .should('have.text', 'joanna.koloczek@example.com');

    cy.contains('td', 'Gender')
      .next('td')
      .should('have.text', 'Female');

    cy.contains('td', 'Mobile')
      .next('td')
      .should('have.text', '1234567890');

    cy.contains('td', 'Date of Birth')
      .next('td')
      .should('have.text', '15 May,1995');

    cy.contains('td', 'Subjects')
      .next('td')
      .should('have.text', 'Maths');

    cy.contains('td', 'Hobbies')
      .next('td')
      .should('have.text', 'Sports, Reading');

    cy.contains('td', 'Address')
      .next('td')
      .should('have.text', 'Kraków, ul. Długa 12');

    cy.contains('td', 'State and City')
      .next('td')
      .should('have.text', 'Haryana Karnal');
  });
});
