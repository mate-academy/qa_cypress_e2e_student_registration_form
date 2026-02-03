describe('Student Registration Form', () => {
  const student = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@test.com',
    gender: 'Male',
    mobile: '1234567890',
    dateOfBirth: {
      day: '15',
      month: 'May',
      year: '1995',
    },
    subjects: 'Maths',
    hobbies: 'Sports',
    address: '123 Test Street',
    state: 'NCR',
    city: 'Delhi',
  };

  beforeEach(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('should submit registration form and display correct data in modal', () => {
    cy.get('#firstName')
      .type(student.firstName);

    cy.get('#lastName')
      .type(student.lastName);

    cy.get('#userEmail')
      .type(student.email);

    cy.contains('.custom-control-label', student.gender)
      .click();

    cy.get('#userNumber')
      .type(student.mobile);

    // Date of Birth
    cy.get('#dateOfBirthInput')
      .click();

    cy.get('.react-datepicker__year-select')
      .select(student.dateOfBirth.year);

    cy.get('.react-datepicker__month-select')
      .select(student.dateOfBirth.month);

    cy.contains('.react-datepicker__day', student.dateOfBirth.day)
      .not('.react-datepicker__day--outside-month')
      .click();

    // Subjects
    cy.get('#subjectsInput')
      .type(student.subjects)
      .type('{enter}');

    // Hobbies
    cy.contains('.custom-control-label', student.hobbies)
      .click();

    // Address
    cy.get('#currentAddress')
      .type(student.address);

    // State & City
    cy.get('#state')
      .click();
    cy.contains('div', student.state)
      .click();

    cy.get('#city')
      .click();
    cy.contains('div', student.city)
      .click();

    // Submit
    cy.get('#submit')
      .click({ force: true });

    // Assertions in modal
    cy.get('.modal-content')
      .should('be.visible');

    cy.get('td')
      .contains('Student Name')
      .next()
      .should('contain', `${student.firstName} ${student.lastName}`);

    cy.get('td')
      .contains('Student Email')
      .next()
      .should('contain', student.email);

    cy.get('td')
      .contains('Gender')
      .next()
      .should('contain', student.gender);

    cy.get('td')
      .contains('Mobile')
      .next()
      .should('contain', student.mobile);

    cy.get('td')
      .contains('Date of Birth')
      .next()
      .should(
        'contain',
        `${student.dateOfBirth.day} ${student.dateOfBirth.month},${student.dateOfBirth.year}`,
      );

    cy.get('td')
      .contains('Subjects')
      .next()
      .should('contain', student.subjects);

    cy.get('td')
      .contains('Hobbies')
      .next()
      .should('contain', student.hobbies);

    cy.get('td')
      .contains('Address')
      .next()
      .should('contain', student.address);

    cy.get('td')
      .contains('State and City')
      .next()
      .should('contain', `${student.state} ${student.city}`);
  });
});
