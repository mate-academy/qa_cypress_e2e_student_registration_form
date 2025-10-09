/// <reference types='cypress' />

describe('Student Registration page', () => {
  const student = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@test.com',
    gender: 'Male',
    mobile: '1234567890',
    birthDay: '15',
    birthMonth: 'May',
    birthYear: '1995',
    subject: 'Maths',
    hobbies: ['Sports', 'Reading'],
    address: '123 Main Street, Springfield',
    state: 'NCR',
    city: 'Delhi'
  };

  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');

    cy.get('#fixedban').invoke('remove');
    cy.get('footer').invoke('remove');
  });

  it('should fill and submit the form successfully', () => {
    cy.get('#firstName').type(student.firstName);
    cy.get('#lastName').type(student.lastName);
    cy.get('#userEmail').type(student.email);
    cy.get(`input[name="gender"][value="${student.gender}"]`).check();
    cy.get('#userNumber').type(student.mobile);

    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__month-select').select(student.birthMonth);
    cy.get('.react-datepicker__year-select').select(student.birthYear);
    cy.get(`.react-datepicker__day--0${student.birthDay}`).click();

    cy.get('#subjectsInput').type(`${student.subject}{enter}`);

    student.hobbies.forEach(hobby => {
      cy.contains('.custom-control-label', hobby).click();
    });

    cy.get('#currentAddress').type(student.address);

    cy.get('#state').click().contains(student.state).click();
    cy.get('#city').click().contains(student.city).click();

    cy.get('#submit').click();

    cy.get('#example-modal-sizes-title-lg')
      .should('contain.text', 'Thanks for submitting the form');

    cy.get('td').contains('Student Name').next()
      .should('contain.text', `${student.firstName} ${student.lastName}`);

    cy.get('td').contains('Student Email').next()
      .should('contain.text', student.email);

    cy.get('td').contains('Gender').next()
      .should('contain.text', student.gender);

    cy.get('td').contains('Mobile').next()
      .should('contain.text', student.mobile);

    cy.get('td').contains('Date of Birth').next()
      .should('contain.text', `${student.birthDay} ${student.birthMonth},${student.birthYear}`);

    cy.get('td').contains('Subjects').next()
      .should('contain.text', student.subject);

    cy.get('td').contains('Hobbies').next()
      .should('contain.text', student.hobbies.join(', '));

    cy.get('td').contains('Address').next()
      .should('contain.text', student.address);

    cy.get('td').contains('State and City').next()
      .should('contain.text', `${student.state} ${student.city}`);
  });
});
