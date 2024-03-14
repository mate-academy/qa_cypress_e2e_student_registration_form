/// <reference types='cypress' />

describe('Student Registration page', () => {
  let user;

  before(() => {
    cy.task('generateUser').then((generateUser) => {
      user = generateUser;
    });
    cy.visit('/');
  });

  it('should register a new student', () => {
    cy.get('#firstName').type(user.firstName);
    cy.get('#lastName').type(user.lastName);
    cy.get('#userEmail').type(user.email);
    cy.contains('.custom-control-label', user.gender).click();
    cy.get('#userNumber').type(user.mobile);
    cy.get('#dateOfBirthInput').type('{selectAll}27 April,1993{enter}');
    cy.get('#subjectsContainer').type('I{enter}');
    cy.contains('.custom-control-label', user.hobbies).click();
    cy.get('#currentAddress').type(user.address);
    cy.get('#state').type('{enter}');
    cy.get('#city').type('{enter}');
    cy.get('#submit').click();
    cy.get('.modal-body').invoke('text').then((studentInfo) => {
      expect(studentInfo).to.contain(`${user.firstName} ${user.lastName}`);
      expect(studentInfo).to.contain(user.email);
      expect(studentInfo).to.contain(user.gender);
      expect(studentInfo).to.contain(user.mobile);
      expect(studentInfo).to.contain('27 April,1993');
      expect(studentInfo).to.contain('Hindi');
      expect(studentInfo).to.contain(user.hobbies);
      expect(studentInfo).to.contain(user.address);
      expect(studentInfo).to.contain('NCR Delhi');
    });
  });
});
