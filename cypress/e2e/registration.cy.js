/// <reference types='cypress' />

const student = {
  firstName: 'Maya',
  lastName: 'Koval',
  email: 'maya.koval@example.com',
  gender: 'Female',
  mobile: '9876543210',
  birthDate: {
    day: '19',
    month: 'September',
    year: '1998'
  },
  subjects: ['Maths', 'English'],
  hobbies: ['Reading', 'Music'],
  address: '221B Baker Street, Apt 5',
  state: 'NCR',
  city: 'Delhi'
};

const assertModalRow = (label, value) => {
  cy.contains('.table-responsive td', label)
    .next()
    .should('have.text', value);
};

const removePageObstructions = () => {
  cy.get('body').then(($body) => {
    $body.find('#fixedban').remove();
    $body.find('footer').remove();
  });
};

describe('Student Registration page', () => {
  beforeEach(() => {
    cy.visit('/automation-practice-form');
    removePageObstructions();
  });

  it('fills the form and verifies submitted data', () => {
    cy.get('#firstName').type(student.firstName);
    cy.get('#lastName').type(student.lastName);
    cy.get('#userEmail').type(student.email);
    cy.contains('label', student.gender).click();
    cy.get('#userNumber').type(student.mobile);

    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__year-select').select(student.birthDate.year);
    cy.get('.react-datepicker__month-select').select(student.birthDate.month);
    cy.get('.react-datepicker__day--019')
      .not('.react-datepicker__day--outside-month')
      .click();

    student.subjects.forEach((subject) => {
      cy.get('#subjectsInput').type(`${subject}{enter}`);
    });

    student.hobbies.forEach((hobby) => {
      cy.contains('label', hobby).click();
    });

    cy.get('#currentAddress').type(student.address);

    cy.get('#state').click();
    cy.contains('[id^="react-select-3-option-"]', student.state).click();

    cy.get('#city').click();
    cy.contains('[id^="react-select-4-option-"]', student.city).click();

    cy.get('#submit').scrollIntoView();
    cy.get('#submit').click();

    cy.get('.modal-content').should('be.visible');
    cy.get('#example-modal-sizes-title-lg')
      .should('have.text', 'Thanks for submitting the form');

    assertModalRow(
      'Student Name',
      `${student.firstName} ${student.lastName}`
    );
    assertModalRow('Student Email', student.email);
    assertModalRow('Gender', student.gender);
    assertModalRow('Mobile', student.mobile);
    const submittedBirthDate = [
      student.birthDate.day,
      `${student.birthDate.month},${student.birthDate.year}`
    ].join(' ');

    assertModalRow('Date of Birth', submittedBirthDate);
    assertModalRow('Subjects', student.subjects.join(', '));
    assertModalRow('Hobbies', student.hobbies.join(', '));
    assertModalRow('Picture', '');
    assertModalRow('Address', student.address);
    assertModalRow('State and City', `${student.state} ${student.city}`);
  });
});
