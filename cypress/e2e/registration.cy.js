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
    cy.get('td').should('contain.text', user.firstName);
    cy.get('td').should('contain.text', user.lastName);
    cy.get('td').should('contain.text', user.email);
    cy.get('td').should(`contain.text`, user.gender);
    cy.get('td').should(`contain.text`, user.phone);
    cy.get('td').should(`contain.text`, `21 September,1999`);
    cy.get('td').should(`contain.text`, `English`);
    cy.get('td').should(`contain.text`, user.hobbie);
    cy.get('td').should(`contain.text`, `USA Washington`);
    cy.get('td').should(`contain.text`, `NCR Delhi`);
  });
});
