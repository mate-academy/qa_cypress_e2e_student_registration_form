/// <reference types='cypress' />

const user = {
  name: 'Marya',
  surname: 'Liddl',
  email: 'Liddl@gmail.com',
  phone: '0938559483',
  address: 'Shevchenko street,12',
  age: '34',
  salary: '1500',
  deparment: 'QA'
};
describe('Demoqa', () => {
  it('should check the form (basic level)', () => {
    cy.visit('/automation-practice-form');
    cy.get('#firstName')
      .type(user.name);
    cy.get('[placeholder="Last Name"]')
      .type(user.surname);
    cy.get('[placeholder="name@example.com"]')
      .type(user.email);
    cy.get('[type="radio"]').check('Female', {force: true});
    cy.get('[placeholder="Mobile Number"]')
      .type(user.phone);
    cy.get('[id="subjectsContainer"]')
      .type('history, biology');
    cy.get('[id="hobbies-checkbox-1"]').check(['1', 'accept'], {force: true});
    cy.get('[placeholder="Current Address"]')
      .type(user.address);
    cy.get('#state > .css-yk16xz-control > .css-1hwfws3 > .css-1g6gooi > div > input')
      .type('NCR{enter}', {force: true});
    cy.get('#city > .css-yk16xz-control > .css-1hwfws3>.css-1g6gooi> div>input')
      .type('Delhi{enter}', {force: true});
    cy.get('#submit')
      .should('contain','Submit')
      .click({force: true});
    cy.get('.modal-content')
      .should('exist');
    cy.get('#example-modal-sizes-title-lg')
      .should('contain','Thanks for submitting the form');
    cy.get('tbody > :nth-child(1) > :nth-child(2)')
      .should('contain', user.name + ' ' + user.surname);
    cy.get('tbody > :nth-child(4) > :nth-child(2)')
      .should('contain', user.phone);
    cy.get('#closeLargeModal')
      .should('contain', 'Close')
      .click({force: true});
    });

    it('should check the web tables (advanced level)', () => {
      cy.visit('/webtables');
      cy.get('.-pageJump')
       .type('1');
      cy.get('select').select('10 rows').should('have.value', '10');
      cy.get('#addNewRecordButton')
        .click();
      cy.get('.modal-content')
        .should('exist');
      cy.get('#registration-form-modal')
        .should('contain','Registration Form');
      cy.get('#firstName')
        .type(user.name);
      cy.get('#lastName')
        .type(user.surname);
      cy.get('#userEmail')
        .type(user.email);
      cy.get('#age')
        .type(user.age);
      cy.get('#salary')
        .type(user.salary);
      cy.get('#department')
        .type(user.deparment);
      cy.get('#submit')
        .should('contain','Submit')
        .click();
      cy.contains('.rt-td', user.email);
      cy.get('#delete-record-4')
        .click();  
      cy.validUser();
      cy.searchAllColumn();
      cy.deleteAllUsers();
    });
});