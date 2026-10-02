/// <reference types='cypress' />

describe('Student Registration page', () => {
  const student = {
    firstName: 'Anna',
    lastName: 'Kowalska',
    email: 'anna.kowalska@example.com',
    gender: 'Female',
    mobile: '1234567890',
    birthYear: '2000',
    birthMonth: '4',
    birthDay: '15',
    subjects: ['Maths', 'English'],
    hobbies: ['Sports', 'Reading', 'Music'],
    address: '123 Test Street',
    state: 'NCR',
    city: 'Delhi'
  };

  beforeEach(() => {
    cy.viewport(1280, 1000);
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('should display submitted student details in the modal', () => {
    cy.get('#firstName').type(student.firstName);
    cy.get('#lastName').type(student.lastName);
    cy.get('#userEmail').type(student.email);
    cy.contains('label', student.gender).click();
    cy.get('#userNumber').type(student.mobile);

    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__year-select').select(student.birthYear);
    cy.get('.react-datepicker__month-select').select(student.birthMonth);
    cy.get('.react-datepicker__day--015')
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
    cy.get('#state').contains('[id^="react-select-"]', student.state).click();
    cy.get('#city').click();
    cy.get('#city').contains('[id^="react-select-"]', student.city).click();
    cy.get('#submit').click();

    cy.get('.modal-content').should('be.visible').within(() => {
      cy.get('#example-modal-sizes-title-lg')
        .should('have.text', 'Thanks for submitting the form');

      const expectedDetails = {
        'Student Name': `${student.firstName} ${student.lastName}`,
        'Student Email': student.email,
        Gender: student.gender,
        Mobile: student.mobile,
        'Date of Birth': `${student.birthDay} May,${student.birthYear}`,
        Subjects: student.subjects.join(', '),
        Hobbies: student.hobbies.join(', '),
        Picture: '',
        Address: student.address,
        'State and City': `${student.state} ${student.city}`
      };

      Object.entries(expectedDetails).forEach(([label, value]) => {
        cy.contains('td', label).parent('tr').find('td').eq(1)
          .should('have.text', value);
      });
    });
  });
});
