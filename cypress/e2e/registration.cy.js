/* eslint-disable max-len */
/// <reference types='cypress' />

describe('Automation Practice Form', () => {
  beforeEach(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
    cy.viewport(1280, 720);

    // Убираем рекламу сразу, чтобы не мешала
    cy.get('#adplus-anchor').then(($ad) => {
      if ($ad.length) {
        cy.wrap($ad).invoke('remove');
      }
    });
  });

  it('Заполняем форму и проверяем данные', () => {
    // ====== Personal Information ======
    cy.get('#firstName').type('Alexandr');
    cy.get('#lastName').type('Dyvak');
    cy.get('#userEmail').type('dyvakaleksandr370@gmail.com');
    // eslint-disable-next-line cypress/no-force
    cy.get('input[name="gender"][value="Male"]').check({ force: true });
    cy.get('#userNumber').type('0990454512');

    // ====== Date of Birth ======
    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__month-select').select('November');
    cy.get('.react-datepicker__year-select').select('1988');
    cy.get('.react-datepicker__day--004:not(.react-datepicker__day--outside-month)').click();

    // ====== Subjects ======
    cy.get('#subjectsInput').type('Maths{enter}');
    cy.get('#subjectsInput').type('Physics{enter}');

    // ====== Hobbies ======
    cy.get('label[for="hobbies-checkbox-1"]').click(); // Sports
    cy.get('label[for="hobbies-checkbox-2"]').click(); // Reading
    cy.get('label[for="hobbies-checkbox-3"]').click(); // Music

    // ====== Address ======
    cy.get('#currentAddress').type('Some street 123, Kyiv');
    // eslint-disable-next-line cypress/unsafe-to-chain-command
    cy.get('#state').click().get('#react-select-3-option-0').click();
    // eslint-disable-next-line cypress/unsafe-to-chain-command
    cy.get('#city').click().get('#react-select-4-option-0').click();

    // ====== Submit ======
    // eslint-disable-next-line cypress/no-force
    cy.get('#submit').click({ force: true });

    // ====== Verification ======
    cy.get('.modal-content').should('be.visible');

    // Заголовок модалки
    cy.get('.modal-title')
      .should('be.visible')
      .and('have.text', 'Thanks for submitting the form');

    // ====== Проверки строк таблицы ======

    cy.get('tr').contains('td', 'Student Name')
      .siblings('td')
      .should('have.text', 'Alexandr Dyvak');

    cy.get('tr').contains('td', 'Student Email')
      .siblings('td')
      .should('have.text', 'dyvakaleksandr370@gmail.com');

    cy.get('tr').contains('td', 'Gender')
      .siblings('td')
      .should('have.text', 'Male');

    cy.get('tr').contains('td', 'Mobile')
      .siblings('td')
      .should('have.text', '0990454512');

    cy.get('tr').contains('td', 'Date of Birth')
      .siblings('td')
      .should('have.text', '04 November,1988');

    cy.get('tr').contains('td', 'Subjects')
      .siblings('td')
      .should('have.text', 'Maths, Physics');

    cy.get('tr').contains('td', 'Hobbies')
      .siblings('td')
      .should('have.text', 'Sports, Reading, Music');

    cy.get('tr').contains('td', 'Address')
      .siblings('td')
      .should('have.text', 'Some street 123, Kyiv');

    cy.get('tr').contains('td', 'State and City')
      .siblings('td')
      .should('have.text', 'NCR Delhi');

    // ====== Закрыть модальное окно ======
    // eslint-disable-next-line cypress/no-force
    cy.get('#closeLargeModal')
      .should('be.visible')
      .click({ force: true });
  });
});
