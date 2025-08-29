/// <reference types='cypress' />

describe('Automation Practice Form', () => {
  beforeEach(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
    cy.viewport(1280, 720); // Чтобы элементы корректно отображались
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
    // eslint-disable-next-line max-len
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

    // Проверка личной информации
    cy.get('td').contains('Alexandr').should('exist');
    cy.get('td').contains('Dyvak').should('exist');
    cy.get('td').contains('dyvakaleksandr370@gmail.com').should('exist');
    cy.get('td').contains('Male').should('exist');
    cy.get('td').contains('0990454512').should('exist');

    // Проверка даты рождения (формат сайта: DD Mon,YYYY)
    cy.get('td').contains('04 November,1988').should('exist');

    // Проверка предметов
    cy.get('td').contains('Maths, Physics').should('exist');

    // Проверка хобби
    cy.get('td').contains('Sports, Reading, Music').should('exist');

    // Проверка адреса
    cy.get('td').contains('Some street 123, Kyiv').should('exist');

    // Проверка State и City (выбраны в форме)
    cy.get('td').contains('NCR Delhi').should('exist');

    // ====== Закрыть модальное окно ======
    cy.get('#adplus-anchor').then(($ad) => {
      if ($ad.length) {
        cy.wrap($ad).invoke('remove'); // удаляем рекламу
      }
    });

    // eslint-disable-next-line cypress/no-force
    cy.get('#closeLargeModal')
      .should('be.visible')
      .click({ force: true });
  });
});
