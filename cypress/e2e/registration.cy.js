/// <reference types='cypress' />

describe('Student Registration page', () => {
  const studentData = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@example.com',
    gender: 'Male',
    mobile: '1234567890',
    dateOfBirth: {
      day: '10',
      month: 'May',
      year: '1990'
    },
    subjects: 'Maths',
    hobbies: ['Sports', 'Reading'],
    address: '123 Main Street, Test City',
    state: 'NCR',
    city: 'Delhi'
  };

  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form', {
      onBeforeLoad(win) {
        const style = win.document.createElement('style');
        style.innerHTML = `* { transition: none !important; animation: none !important; }`;
        win.document.head.append(style);
      }
    });
    cy.get('footer').invoke('remove');
    cy.get('#fixedban').invoke('remove');
  });

  it('should fill out all fields (except picture),' +
      'submit the form and assert the modal with submitted data', () => {
    cy.get('#firstName').type(studentData.firstName);
    cy.get('#lastName').type(studentData.lastName);
    cy.get('#userEmail').type(studentData.email);
    cy.contains('label', studentData.gender).click();
    cy.get('#userNumber').type(studentData.mobile);
    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__year-select')
      .select(studentData.dateOfBirth.year);
    cy.get('.react-datepicker__month-select')
      .select(studentData.dateOfBirth.month);
    const day = studentData.dateOfBirth.day.padStart(2, '0');
    cy.get(`.react-datepicker__day--0${day}`)
      .not('.react-datepicker__day--outside-month')
      .click();
    cy.get('#subjectsInput').type(studentData.subjects + '{enter}');
    studentData.hobbies.forEach((hobby) => cy.contains('label', hobby).click());
    cy.get('#currentAddress').type(studentData.address);
    cy.get('#state').click();
    cy.contains('.css-26l3qy-menu div', studentData.state).click();
    cy.get('#city').click();
    cy.contains('.css-26l3qy-menu div', studentData.city).click();
    cy.get('#submit').click();
    cy.get('.modal-content').should('be.visible');
    cy.get('.table-responsive').within(() => {
      cy.contains('td', 'Student Name')
        .siblings()
        .should('have.text', `${studentData.firstName} ${studentData.lastName}`);
      cy.contains('td', 'Student Email')
        .siblings()
        .should('have.text', studentData.email);
      cy.contains('td', 'Gender')
        .siblings()
        .should('have.text', studentData.gender);
      cy.contains('td', 'Mobile')
        .siblings()
        .should('have.text', studentData.mobile);
      cy.contains('td', 'Date of Birth')
        .siblings()
        .should('have.text', `${studentData.dateOfBirth.day} ${studentData.dateOfBirth.month},${studentData.dateOfBirth.year}`);
      cy.contains('td', 'Subjects')
        .siblings()
        .should('have.text', studentData.subjects);
      cy.contains('td', 'Hobbies')
        .siblings()
        .should('have.text', studentData.hobbies.join(', '));
      cy.contains('td', 'Address')
        .siblings()
        .should('have.text', studentData.address);
      cy.contains('td', 'State and City')
        .siblings()
        .should('have.text', `${studentData.state} ${studentData.city}`);
    });
  });
});
