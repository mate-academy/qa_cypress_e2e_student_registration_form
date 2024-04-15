/// <reference types='cypress'   />

describe('Student Registration page', () => {
  let student;

  before(() => {
    cy.task('generateStudent').then(generateUser => {
      student = generateUser;
    });
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('should provide an ability to register new student', () => {
    cy.get('#firstName').type(student.firstName);
    cy.get('#lastName').type(student.lastName);
    cy.get('#userEmail').type(student.email);
    cy.contains('.custom-control-label', student.gender).click();
    cy.get('#userNumber').type(student.mobileNumber);
    cy.get('#dateOfBirthInput').type('{selectAll}08 February, 1976{enter}');
    cy.get('#subjectsContainer').type('E{enter}');
    cy.contains('.custom-control-label', student.hobby).click();
    cy.get('#currentAddress').type(student.address);
    cy.get('#state').type('{enter}');
    cy.get('#city').type('{enter}');
    cy.get('#submit').click();

    cy.contains('#example-modal-sizes-title-lg', 'Thanks for submitting the form')
      .should('be.visible');
    cy.get('.table-responsive').should('be.visible');
    cy.contains('.modal-body', student.firstName + ' ' + student.lastName)
      .should('be.visible');
    cy.contains('.modal-body', student.email)
      .should('be.visible');
    cy.contains('.modal-body', student.gender)
      .should('be.visible');
    cy.contains('.modal-body', student.mobileNumber)
      .should('be.visible');
    cy.contains('.modal-body', '08 February,1976')
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
