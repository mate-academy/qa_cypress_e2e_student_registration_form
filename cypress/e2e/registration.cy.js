/// <reference types='cypress' />

describe('Student Registration page', () => {
  let user;
  before(() => {
  cy.task('generateUser').then(generateUser => {
    user = generateUser;
  });
  });

  it('should allow to register a new student', () => {
    cy.visit('/');
    cy.findByPlaceholder('First Name').type(user.firstName);
    cy.findByPlaceholder('Last Name').type(user.lastName);
    cy.findByPlaceholder('name@example.com').type(user.email);
    cy.contains('.custom-control-label', user.gender).click();
    cy.findByPlaceholder('Mobile Number').type(user.phone);
    cy.get('#dateOfBirthInput').type(`{selectAll}21 Sep 1999{enter}`);
    cy.get(`.subjects-auto-complete__value-container`).type(`E{enter}`);
    cy.contains('.custom-control-label', user.hobbie).click();
    cy.get('#currentAddress').type('USA Washington');
    cy.get('#state > .css-yk16xz-control > .css-1hwfws3').type(`N{enter}`);
    cy.get('#city > .css-yk16xz-control > .css-1hwfws3').type(`D{enter}`);
    cy.get('#submit').click();
    cy.get('tbody > :nth-child(1) > :nth-child(2)').should(`contain`, user.firstName).and('contain', user.lastName);
    cy.get('tbody > :nth-child(2) > :nth-child(2)').should(`contain`, user.email);
    cy.get('tbody > :nth-child(3) > :nth-child(2)').should(`contain`, user.gender);
    cy.get('tbody > :nth-child(4) > :nth-child(2)').should(`contain`, user.phone);
    cy.get('tbody > :nth-child(5) > :nth-child(2)').should(`contain`, `21 September,1999`);
    cy.get('tbody > :nth-child(6) > :nth-child(2)').should(`contain`, `English`);
    cy.get('tbody > :nth-child(7) > :nth-child(2)').should(`contain`, user.hobbie);
    cy.get('tbody > :nth-child(9) > :nth-child(2)').should(`contain`, `USA Washington`);
    cy.get('tbody > :nth-child(10) > :nth-child(2)').should(`contain`, `NCR Delhi`);
  });
});
