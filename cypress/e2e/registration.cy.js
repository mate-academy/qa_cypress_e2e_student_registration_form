/// <reference types='cypress' />

const person = {
  firstName: 'Maya',
  lastName: 'Koval',
  email: 'maya.koval@example.com',
  gender: 'Female',
  mobile: '9876543210',

  dateOfBirth: {
    day: '19',
    month: 'September',
    year: '1998'
  },

  subjects: ['Maths', 'English'],
  hobbies: ['Reading', 'Music'],

  currentAddress: '221B Baker Street, Apt 5',
  state: 'NCR',
  city: 'Delhi'
};

describe('Student Registration page', () => {
  it('should fill the registration form and submit successfully', () => {
    cy.visit('https://demoqa.com/automation-practice-form');

    cy.get('h1').should('contain.text', 'Practice Form');

    cy.get('#firstName').type(person.firstName);
    cy.get('#lastName').type(person.lastName);
    cy.get('#userEmail').type(person.email);
    cy.get('label').contains(person.gender).click();
    cy.get('#userNumber').type(person.mobile);

    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__year-select').select(person.dateOfBirth.year);
    cy.get('.react-datepicker__month-select').select(person.dateOfBirth.month);
    cy.get('.react-datepicker__day')
      .contains(person.dateOfBirth.day).click();

    cy.get('#subjectsInput').click();
    person.subjects.forEach((subject) => {
      // eslint-disable-next-line cypress/no-force
      cy.get('#subjectsInput').type(`${subject}{enter}`, { force: true });
    });

    person.hobbies.forEach((hobby) => {
      // eslint-disable-next-line cypress/no-force
      cy.contains('label', hobby).click({ force: true });
    });

    cy.get('#currentAddress').type(person.currentAddress);

    cy.get('#state').click();
    // eslint-disable-next-line cypress/no-force
    cy.get('#react-select-3-input').type(`${person.state}{enter}`, { force: true });

    cy.get('#city').click();
    // eslint-disable-next-line cypress/no-force
    cy.get('#react-select-4-input').type(`${person.city}{enter}`, { force: true });

    cy.get('#submit').click();

    cy.get('td').contains('Student Name').next()
      .should('have.text', `${person.firstName} ${person.lastName}`);
    cy.get('td').contains('Student Email').next()
      .should('have.text', person.email);
    cy.get('td').contains('Gender').next()
      .should('have.text', person.gender);
    cy.get('td').contains('Mobile').next()
      .should('have.text', person.mobile);
    cy.get('td').contains('Date of Birth').next().should('have.text',
      `${person.dateOfBirth.day} ${person.dateOfBirth.month},${person.dateOfBirth.year}`);
    cy.get('td').contains('Subjects').next()
      .should('have.text', person.subjects.join(', '));
    cy.get('td').contains('Hobbies').next()
      .should('have.text', person.hobbies.join(', '));
    cy.get('td').contains('Picture').next()
      .should('have.text', '');
    cy.get('td').contains('Address').next()
      .should('have.text', person.currentAddress);
    cy.get('td').contains('State and City').next()
      .should('have.text', `${person.state} ${person.city}`);
  });
});
