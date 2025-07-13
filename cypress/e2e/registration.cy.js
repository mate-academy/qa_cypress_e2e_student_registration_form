/// <reference types="cypress" />

describe('Student Registration Form Automation', () => {
  // Дані, які ми будемо вводити у форму
  const testData = {
    firstName: `TestFN${Math.floor(Math.random() * 1000)}`,
    lastName: `TestLN${Math.floor(Math.random() * 1000)}`,
    email: `test${Math.floor(Math.random() * 1000)}@example.com`,
    gender: 'Male', // Можливі значення: Male, Female, Other
    mobile: `1234567890`, // 10 цифр
    dateOfBirth: '15 May 1990', // Формат для введення
    dayOfBirth: '15',
    monthOfBirth: 'May',
    yearOfBirth: '1990',
    subjects: ['Maths', 'Computer Science'], // Масив предметів
    hobbies: ['Sports', 'Reading'], // Масив хобі
    currentAddress: `123 Test Street, Apt ${Math.floor(Math.random() * 50)}`,
    state: 'NCR',
    city: 'Delhi'
  };

  beforeEach(() => {
    // Відвідуємо сторінку форми реєстрації
    cy.visit('/automation-practice-form');
    // Перевіряємо, що заголовок форми видимий
    cy.contains('h5', 'Student Registration Form').should('be.visible');
  });

  it('should successfully fill the form and assert data in modal', () => {
    // 1. Заповнення полів форми
    cy.get('#firstName').type(testData.firstName);
    cy.get('#lastName').type(testData.lastName);
    cy.get('#userEmail').type(testData.email);

    // Вибір статі (Gender) - клікаємо на відповідний label
    cy.contains('.custom-control-label', testData.gender).click();

    cy.get('#userNumber').type(testData.mobile);

    // Вибір дати народження (Date of Birth)
    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__month-select').select(testData.monthOfBirth);
    cy.get('.react-datepicker__year-select').select(testData.yearOfBirth);
    cy.contains('.react-datepicker__day', testData.dayOfBirth).click();

    // Введення предметів (Subjects)
    testData.subjects.forEach((subject) => {
      cy.get('#subjectsInput').type(subject);
      cy.get('.subjects-auto-complete__menu-list').contains(subject).click();
    });

    // Вибір хобі (Hobbies)
    testData.hobbies.forEach((hobby) => {
      cy.contains('.custom-control-label', hobby).click();
    });

    // Введення поточної адреси (Current Address)
    cy.get('#currentAddress').type(testData.currentAddress);

    // Вибір штату (State)
    cy.get('#state').click();
    cy.get('#state input').type(testData.state + '{enter}'); // Вводимо текст і натискаємо Enter

    // Вибір міста (City)
    cy.get('#city').click();
    cy.get('#city input').type(testData.city + '{enter}'); // Вводимо текст і натискаємо Enter

    // 2. Клік на кнопку [Submit]
    cy.get('#submit').click();

    // 3. Перевірка введених даних у модальному вікні
    cy.get('.modal-header')
      .should('be.visible')
      .and('contain.text', 'Thanks for submitting the form');

    // Перевіряємо дані у таблиці модального вікна
    cy.get('.table-responsive').within(() => {
      cy.contains('Student Name')
        .next()
        .should('have.text', `${testData.firstName} ${testData.lastName}`);
      cy.contains('Student Email')
        .next()
        .should('have.text', testData.email);
      cy.contains('Gender')
        .next()
        .should('have.text', testData.gender);
      cy.contains('Mobile')
        .next()
        .should('have.text', testData.mobile);
      // Перевіряємо дату народження. Формат у модальному вікні може відрізнятися,
      // тому перевіряємо, що він містить частини дати.
      cy.contains('Date of Birth')
        .next()
        .should('contain.text', testData.dayOfBirth);
      cy.contains('Date of Birth')
        .next()
        .should('contain.text', testData.monthOfBirth);
      cy.contains('Date of Birth')
        .next()
        .should('contain.text', testData.yearOfBirth);
      cy.contains('Subjects')
        .next()
        .should('have.text', testData.subjects.join(', '));
      cy.contains('Hobbies')
        .next()
        .should('have.text', testData.hobbies.join(', '));
      cy.contains('Address')
        .next()
        .should('have.text', testData.currentAddress);
      cy.contains('State and City')
        .next()
        .should('have.text', `${testData.state} ${testData.city}`);
    });

    // Клікаємо кнопку "Close" у модальному вікні, щоб закрити його
    // Перевіряємо, що кнопка видима, перш ніж клікати
    cy.get('#closeLargeModal').should('be.visible').click(); // <--- Змінено тут!
    // Перевіряємо, що модальне вікно зникло
    cy.get('.modal-header').should('not.exist');
  });
});

// Обробник для неперехоплених винятків видалено, оскільки тест вже стабільний
// і console.error не потрібен для фінального коду.
