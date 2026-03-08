/// <reference types='cypress' />

describe('Student Registration Form', () => {
  beforeEach(() => {
    cy.visit('https://demoqa.com/automation-practice-form');

    cy.get('#fixedban').then(($el) => $el.remove());
    cy.get('footer').then(($el) => $el.remove());
  });

  it('should fill the form and verify the submitted data', () => {
    const userData = {
      firstName: 'Ivan',
      lastName: 'Petrenko',
      email: 'ivan.p@example.com',
      gender: 'Male',
      mobile: '0671234567',
      birthYear: '1995',
      birthMonth: 'May',
      birthDay: '15',
      subjects: ['Maths', 'Physics'],
      hobbies: ['Sports', 'Reading'],
      currentAddress: 'Dnipro, Central Ave, 1',
      state: 'NCR',
      city: 'Delhi'
    };

    cy.get('#firstName').type(userData.firstName);
    cy.get('#lastName').type(userData.lastName);

    cy.get('#userEmail').type(userData.email);

    cy.contains('.custom-control-label', userData.gender).click();

    cy.get('#userNumber').type(userData.mobile);

    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__year-select').select(userData.birthYear);
    cy.get('.react-datepicker__month-select').select(userData.birthMonth);

    cy.get(
      `.react-datepicker__day--0${userData.birthDay}:not(.react-datepicker__day--outside-month)`
    )
      .first()
      .click();

    userData.subjects.forEach((subject) => {
      cy.get('#subjectsInput').type(`${subject}{enter}`);
    });

    userData.hobbies.forEach((hobby) => {
      cy.contains('.custom-control-label', hobby).click();
    });

    cy.get('#currentAddress').type(userData.currentAddress);

    cy.get('#state').scrollIntoView();
    cy.get('#state').click();
    cy.get('#state').type(`${userData.state}{enter}`);

    cy.get('#city').scrollIntoView();
    cy.get('#city').click();
    cy.get('#city').type(`${userData.city}{enter}`);

    cy.get('#submit').scrollIntoView();
    cy.get('#submit').click();

    cy.get('.modal-content').should('be.visible');

    const fullDate = `${userData.birthDay} ${userData.birthMonth},${userData.birthYear}`;

    const checks = [
      ['Student Name', `${userData.firstName} ${userData.lastName}`],
      ['Student Email', userData.email],
      ['Gender', userData.gender],
      ['Mobile', userData.mobile],
      ['Date of Birth', fullDate],
      ['Subjects', userData.subjects.join(', ')],
      ['Hobbies', userData.hobbies.join(', ')],
      ['Address', userData.currentAddress],
      ['State and City', `${userData.state} ${userData.city}`]
    ];

    checks.forEach(([label, value]) => {
      cy.get('.table-responsive')
        .contains('td', label)
        .next()
        .should('have.text', value);
    });

    cy.get('#closeLargeModal').click();
  });
});
