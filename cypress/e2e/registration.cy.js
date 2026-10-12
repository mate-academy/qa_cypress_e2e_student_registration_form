/// <reference types="cypress" />

describe('Student Registration page', () => {
  beforeEach(() => {
    cy.visit('https://demoqa.com/automation-practice-form');

    cy.get('body').then(($body) => {
      if ($body.find('#fixedban').length > 0) {
        cy.get('#fixedban').invoke('hide');
      }
    });
  });

  it('should fill all fields (except picture) and verify data in modal', () => {
    const student = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      gender: 'Male',
      mobile: '1234567890',
      dateOfBirth: {
        year: '1990',
        month: 'January',
        day: '15'
      },
      subjects: 'Maths',
      hobbies: ['Sports', 'Reading'],
      address: '123 Test Street, Test City',
      state: 'NCR',
      city: 'Delhi'
    };
    const genderMap = {
      Male: 'gender-radio-1',
      Female: 'gender-radio-2',
      Other: 'gender-radio-3'
    };

    cy.get('#firstName').type(student.firstName);
    cy.get('#firstName').should('have.value', student.firstName);

    cy.get('#lastName').type(student.lastName);
    cy.get('#lastName').should('have.value', student.lastName);
    cy.get('#userEmail').type(student.email);
    cy.get('#userEmail').should('have.value', student.email);

    cy.get(`label[for="${genderMap[student.gender]}"]`).click();
    cy.get(`#${genderMap[student.gender]}`).should('be.checked');

    cy.get('#userNumber').type(student.mobile);
    cy.get('#userNumber').should('have.value', student.mobile);

    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__month-select').select(student.dateOfBirth.month);
    cy.get('.react-datepicker__year-select').select(student.dateOfBirth.year);
    cy.get(`.react-datepicker__day--0${student.dateOfBirth.day}`)
      .not('.react-datepicker__day--outside-month')
      .click();

    cy.get('#subjectsInput').type(student.subjects);
    cy.get('.subjects-auto-complete__menu-list')
      .contains(student.subjects)
      .click();

    student.hobbies.forEach((hobby) => {
      cy.get(`label[for="hobbies-checkbox-${getHobbyIndex(hobby)}"]`).click();
    });

    cy.get('#currentAddress').type(student.address);
    cy.get('#currentAddress').should('have.value', student.address);

    cy.get('#state').click();
    cy.get('div[class*="-menu"]').contains(student.state).click();

    cy.get('#city').click();
    cy.get('div[class*="-menu"]').contains(student.city).click();

    cy.get('#submit').click();

    cy.get('.modal-content').should('be.visible');
    cy.get('.modal-title').should(
      'have.text',
      'Thanks for submitting the form'
    );

    cy.get('table > tbody > tr:nth-child(1) td:nth-child(2)').should(
      'have.text',
      `${student.firstName} ${student.lastName}`
    );
    cy.get('table > tbody > tr:nth-child(2) td:nth-child(2)').should(
      'have.text',
      student.email
    );
    cy.get('table > tbody > tr:nth-child(3) td:nth-child(2)').should(
      'have.text',
      student.gender
    );
    cy.get('table > tbody > tr:nth-child(4) td:nth-child(2)').should(
      'have.text',
      student.mobile
    );
    cy.get('table > tbody > tr:nth-child(5) td:nth-child(2)').should(
      'have.text',
      `${student.dateOfBirth.day} ${student.dateOfBirth.month},${student.dateOfBirth.year}`
    );
    cy.get('table > tbody > tr:nth-child(6) td:nth-child(2)').should(
      'have.text',
      student.subjects
    );
    cy.get('table > tbody > tr:nth-child(7) td:nth-child(2)').should(
      'have.text',
      student.hobbies.join(', ')
    );
    cy.get('table > tbody > tr:nth-child(9) td:nth-child(2)').should(
      'have.text',
      student.address
    );
    cy.get('table > tbody > tr:nth-child(10) td:nth-child(2)').should(
      'have.text',
      `${student.state} ${student.city}`
    );
  });
});

function getHobbyIndex(hobby) {
  const map = {
    Sports: 1,
    Reading: 2,
    Music: 3
  };
  return map[hobby];
}
