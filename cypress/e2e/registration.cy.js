/// <reference types='cypress' />

describe('Student Registration page', () => {
  const testData = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    gender: 'Male',
    mobile: '1234567890',
    dateOfBirth: {
      day: '31',
      month: 'January',
      year: '1990'
    },
    subjects: ['Maths', 'Physics'],
    hobbies: ['Sports', 'Reading', 'Music'],
    address: '123 Main St',
    state: 'Uttar Pradesh',
    city: 'Lucknow'
  };

  beforeEach(() => {
    cy.visit('/');
  });

  it('should be able to fill and submit the form', () => {
    cy.get('#firstName').type(testData.firstName);
    cy.get('#lastName').type(testData.lastName);
    cy.get('#userEmail').type(testData.email);
    cy.contains('Male').click();
    cy.get('#userNumber').type(testData.mobile);
    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__month-select')
      .select(testData.dateOfBirth.month);
    cy.get('.react-datepicker__year-select').select(testData.dateOfBirth.year);
    cy.get(`.react-datepicker__day--0${testData.dateOfBirth.day}`)
      .not('.react-datepicker__day--outside-month')
      .click();
    cy.get('#subjectsContainer').click();
    testData.subjects.forEach((subject) => {
      cy.get('#subjectsInput').type(`${subject}{enter}`);
    });
    testData.hobbies.forEach((hobby) => {
      cy.contains('label', hobby).click();
    });
    cy.get('#currentAddress').type(testData.address);
    cy.get('#state').click();
    cy.contains(testData.state).click();
    cy.get('#city').click();
    cy.contains(testData.city).click();
    cy.get('#submit').click();

    // Assertions for modal window
    cy.get('.modal-content').should('be.visible');
    cy.get('.table-responsive').within(() => {
      cy.contains('td', 'Student Name')
        .next()
        .should('contain', `${testData.firstName} ${testData.lastName}`);
      cy.contains('td', 'Student Email')
        .next()
        .should('contain', testData.email);
      cy.contains('td', 'Gender')
        .next()
        .should('contain', testData.gender);
      cy.contains('td', 'Mobile')
        .next()
        .should('contain', testData.mobile);
      cy.contains('td', 'Date of Birth')
        .next()
        .should('contain', `${testData.dateOfBirth.day} ${testData.dateOfBirth.month},${testData.dateOfBirth.year}`);
      cy.contains('td', 'Subjects')
        .next()
        .should('contain', testData.subjects.join(', '));
      cy.contains('td', 'Hobbies')
        .next()
        .should('contain', testData.hobbies.join(', '));
      cy.contains('td', 'Address')
        .next()
        .should('contain', testData.address);
      cy.contains('td', 'State and City')
        .next()
        .should('contain', `${testData.state} ${testData.city}`);
    });
  });
});
