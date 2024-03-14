/// <reference types='cypress' />

describe('Student Registration page', () => {
  let student;

  before(() => {
    student = {
      firstName: generateRandomString(),
      lastName: generateRandomString(),
      email: generateRandomEmail(),
      mobileNumber: generateRandomPhoneNumber(),
      address: generateRandomAddress(),
      gender: getRandomGender(),
      hobby: getRandomHobby()
    };

    cy.visit('https://demoqa.com/automation-practice-form');
  });

  function generateRandomString() {
    return Math.random().toString(36).substring(7);
  }

  function generateRandomEmail() {
    return generateRandomString() + '@gmail.com';
  }

  function generateRandomPhoneNumber() {
    return Math.floor(Math.random() * 10000000000).toString();
  }

  function generateRandomAddress() {
    return (
      Math.floor(Math.random() * 1000) +
      ' ' +
      generateRandomString() +
      ' St, ' +
      generateRandomString() +
      ' City, ' +
      generateRandomString() +
      ' Country'
    );
  }

  function getRandomGender() {
    const genders = ['Male', 'Female', 'Other'];
    return genders[Math.floor(Math.random() * genders.length)];
  }

  function getRandomHobby() {
    const hobbies = ['Sports', 'Reading', 'Music'];
    return hobbies[Math.floor(Math.random() * hobbies.length)];
  }

  it('should provide an ability to register new student', () => {
    cy.get('#firstName')
      .type(student.firstName);
    cy.get('#lastName')
      .type(student.lastName);
    cy.get('#userEmail')
      .type(student.email);
    cy.contains('.custom-control-label', student.gender)
      .click();
    cy.get('#userNumber')
      .type(student.mobileNumber);
    cy.get('#dateOfBirthInput')
      .type('{selectAll}28 February, 1982{enter}');
    cy.get('#subjectsContainer')
      .type('E{enter}');
    cy.contains('.custom-control-label', student.hobby)
      .click();
    cy.get('#currentAddress')
      .type(student.address);
    cy.get('#state')
      .type('{enter}');
    cy.get('#city')
      .type('{enter}');
    cy.get('#submit')
      .click();

    cy.contains('#example-modal-sizes-title-lg', 'Thanks for submitting the form')
      .should('be.visible');
    cy.get('.table-responsive')
      .should('be.visible');
    cy.contains('.modal-body', student.firstName + ' ' + student.lastName)
      .should('be.visible');
    cy.contains('.modal-body', student.email)
      .should('be.visible');
    cy.contains('.modal-body', student.gender)
      .should('be.visible');
    cy.contains('.modal-body', student.mobileNumber)
      .should('be.visible');
    cy.contains('.modal-body', '28 February,1982')
      .should('be.visible');
    cy.contains('.modal-body', 'English')
      .should('be.visible');
    cy.contains('.modal-body', student.hobby)
      .should('be.visible');
    cy.contains('.modal-body', student.address)
      .should('be.visible');
    cy.contains('.modal-body', 'NCR' + ' ' + 'Delhi')
      .should('exist');
  });
});
