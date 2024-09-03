/// <reference types='cypress' />

describe('Student Registration page', () => {
  before(() => {
    cy.visit('/');
  });

  it('should display submitted data on the modal', () => {
    const entries = {
      'Student Name': 'John Doe',
      'Student Email': 'johndoe@email.com',
      Gender: 'Male',
      Mobile: '0123456789',
      'Date of Birth': '17 April,1995',
      Subjects: 'History, Maths',
      Hobbies: 'Music, Sports',
      Address: 'Warsaw',
      'State and City': 'NCR Noida'
    };

    const date = new Date(entries['Date of Birth']);

    const day = date.getDate().toString();
    const month = date.getMonth().toString();
    const year = date.getFullYear().toString();

    const [firstName, lastName] = entries['Student Name'].split(' ');
    const [state, city] = entries['State and City'].split(' ');

    const subjectsArray = entries.Subjects.split(', ');
    const hobbiesArray = entries.Hobbies.split(', ');

    cy.getById('firstName').type(firstName);
    cy.getById('lastName').type(lastName);

    cy.getById('userEmail').type(entries['Student Email']);

    cy.contains('label', 'Male').click();

    cy.getByPlaceholder('Mobile Number').type(entries.Mobile);

    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__year-select').select(year);
    cy.get('.react-datepicker__month-select').select(month);
    cy.get(`.react-datepicker__day--0${day}`).click();

    subjectsArray.forEach((subject) => {
      cy.getById('subjectsInput').click();
      cy.getById('subjectsInput').type(subject);
      cy.getById('react-select-2-option-0').click();
    });

    hobbiesArray.forEach((hobby) => {
      cy.contains('label', hobby).click();
    });

    cy.getByPlaceholder('Current Address').type(entries.Address);

    cy.contains('div', 'Select State').click();
    cy.contains('[id*="react-select"]', state).click();

    cy.contains('div', 'Select City').click();
    cy.contains('[id*="react-select"]', city).click();

    cy.submitFormByButton('Submit');

    for (const [key, value] of Object.entries(entries)) {
      cy.contains('td', key).siblings().first().should('have.text', value);
    }
  });
});
