/// <reference types='cypress' />
let user = {};

describe('Student Registration page', () => {
  before(() => {
    cy.task('generateUser').then((generateUser) => {
      user = generateUser;
    });
    cy.visit('/automation-practice-form');
  });

  it('should complete registration form', () => {
    cy.get('#state > .css-yk16xz-control > .css-1hwfws3').type(`${user.state}{enter}`);
    cy.get('#city > .css-yk16xz-control > .css-1hwfws3').type(`${user.city}{enter}`);
    for (let i = 0; i < user.subject.length; i++) {
      cy.get('.subjects-auto-complete__value-container').type(`${user.subject[i]}{enter}`);
    }
    cy.get('#dateOfBirthInput').type(`{selectAll}${user.birth}{enter}`);
    cy.get('#currentAddress').type(user.address);
    cy.get('#firstName').type(user.firstName);
    cy.get('#lastName').type(user.lastName);
    cy.get('#userEmail').type(user.email);
    cy.contains('.custom-control-label', user.gender).click();
    cy.contains('.custom-control-label', user.hobby).click();
    cy.get('#userNumber').type(user.mobile);
    cy.get('#submit').click();

    cy.get('.modal-body').invoke('text').then((studentInfo) => {
      expect(studentInfo).to.contain(user.state);
      expect(studentInfo).to.contain(user.city);
      expect(studentInfo).to.contain(user.address);
      expect(studentInfo).to.contain(`${user.firstName} ${user.lastName}`);
      expect(studentInfo).to.contain(user.email);
      expect(studentInfo).to.contain(user.gender);
      expect(studentInfo).to.contain(user.hobby);
      expect(studentInfo).to.contain(user.mobile);
      expect(studentInfo).to.contain(user.birthAccertFormat);
      // couldn't find a way to accert random hobbies
    });
  });
});
