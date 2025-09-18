/// <reference types="cypress" />

describe('Student Registration Form', () => {
  const baseUrl = 'https://demoqa.com/automation-practice-form';

  const student = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@example.com',
    gender: 'Male',
    mobile: '1234567890',
    dob: {
      day: '01',
      month: 'January',
      year: '1990'
    },
    subjects: ['Maths', 'Physics'],
    hobbies: ['Sports', 'Reading'],
    address: '123 Cypress Street',
    state: 'NCR',
    city: 'Delhi'
  };

  beforeEach(() => {
    cy.visit(baseUrl);
    // Close potential ads/popups
    cy.get('body').then(($body) => {
      if ($body.find('#close-fixedban').length) {
        cy.get('#close-fixedban').click();
      }
    });
  });

  it('should fill the form and assert data in modal', () => {
    // Fill text inputs
    cy.get('#firstName').type(student.firstName);
    cy.get('#lastName').type(student.lastName);
    cy.get('#userEmail').type(student.email);

    // Select Gender
    cy.contains('label', student.gender).click();

    // Mobile
    cy.get('#userNumber').type(student.mobile);

    // Date of Birth
    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__month-select').select(student.dob.month);
    cy.get('.react-datepicker__year-select').select(student.dob.year);
    cy.get(`.react-datepicker__day--0${student.dob.day}`)
      .not('.react-datepicker__day--outside-month')
      .click();

    // Subjects
    student.subjects.forEach((subject) => {
      cy.get('#subjectsInput').type(`${subject}{enter}`);
    });

    // Hobbies
    student.hobbies.forEach((hobby) => {
      cy.contains('label', hobby).click();
    });

    // Address
    cy.get('#currentAddress').type(student.address);

    // State and City
    cy.get('#state').click();
    cy.contains('div', student.state).click();
    cy.get('#city').click();
    cy.contains('div', student.city).click();

    // Submit
    cy.get('#submit').click();

    // Assert modal visible
    cy.get('.modal-content').should('be.visible');

    // Assertions inside modal (split .next() chains for ESLint safety)
    // eslint-disable-next-line cypress/unsafe-to-chain-command
    cy.contains('td', 'Student Name')
      .next()
      .then(($td) => {
        expect($td.text()).to.equal(`${student.firstName} ${student.lastName}`);
      });

    // eslint-disable-next-line cypress/unsafe-to-chain-command
    cy.contains('td', 'Student Email')
      .next()
      .then(($td) => {
        expect($td.text()).to.equal(student.email);
      });

    // eslint-disable-next-line cypress/unsafe-to-chain-command
    cy.contains('td', 'Gender')
      .next()
      .then(($td) => {
        expect($td.text()).to.equal(student.gender);
      });

    // eslint-disable-next-line cypress/unsafe-to-chain-command
    cy.contains('td', 'Mobile')
      .next()
      .then(($td) => {
        expect($td.text()).to.equal(student.mobile);
      });

    // eslint-disable-next-line cypress/unsafe-to-chain-command
    cy.contains('td', 'Date of Birth')
      .next()
      .then(($td) => {
        expect($td.text()).to.equal(
          `${student.dob.day} ${student.dob.month},${student.dob.year}`
        );
      });

    // eslint-disable-next-line cypress/unsafe-to-chain-command
    cy.contains('td', 'Subjects')
      .next()
      .then(($td) => {
        expect($td.text()).to.equal(student.subjects.join(', '));
      });

    // eslint-disable-next-line cypress/unsafe-to-chain-command
    cy.contains('td', 'Hobbies')
      .next()
      .then(($td) => {
        expect($td.text()).to.equal(student.hobbies.join(', '));
      });

    // eslint-disable-next-line cypress/unsafe-to-chain-command
    cy.contains('td', 'Address')
      .next()
      .then(($td) => {
        expect($td.text()).to.equal(student.address);
      });

    // eslint-disable-next-line cypress/unsafe-to-chain-command
    cy.contains('td', 'State and City')
      .next()
      .then(($td) => {
        expect($td.text()).to.equal(`${student.state} ${student.city}`);
      });

    // Picture should be empty
    // eslint-disable-next-line cypress/unsafe-to-chain-command
    cy.contains('td', 'Picture')
      .next()
      .then(($td) => {
        expect($td.text()).to.equal('');
      });

    // Close modal
    cy.get('#closeLargeModal').click();
    cy.get('.modal-content').should('not.exist');
  });
});
