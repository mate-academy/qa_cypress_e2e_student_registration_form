/* cypress.json {
  "baseUrl": "https://demoqa.com",
  "viewportWidth": 2000,
  "viewportHeight": 3000 < for row count selection test
} */

/// <reference types='cypress' />
const user = {
  name: 'Sergey',
  surname: 'Brigadir',
  email: 'dziubkosv@gmail.com',
  phone: '0999999999',
  address: 'Automatic street 1',
  dbirth: '01 April,1980',
  age: '41',
  salary: '2500',
  deparment: 'AQA'
};
describe('Tests for https://demoqa.com, Lesson 3', () => {
  it('basic level - Validate inputed data in modal window', () => {
    cy.visit('/automation-practice-form');
    cy.get('#firstName').type(user.name);
    cy.get('#lastName').type(user.surname);
    cy.get('#userEmail').type(user.email);
    cy.get('[type="radio"]').check('Male', {force: true});
    cy.get('#userNumber').type(user.phone);
    cy.get('#dateOfBirthInput').type('{selectall}01 Apr 1980{enter}');
    cy.get('[class="subjects-auto-complete__value-container subjects-auto-complete__value-container--is-multi css-1hwfws3"]')
      .type('mat{enter}', { delay: 1000 });
    cy.get('[id="subjectsContainer"]').type('history, biology');
    cy.get('[id="hobbies-checkbox-1"]').check(['1', 'accept'], {force: true});
    cy.get('[placeholder="Current Address"]').type(user.address);
    cy.get('#state > .css-yk16xz-control > .css-1hwfws3 > .css-1g6gooi > div > input')
      .type('NCR{enter}', {force: true});
    cy.get('#city > .css-yk16xz-control > .css-1hwfws3>.css-1g6gooi> div>input')
      .type('Delhi{enter}', {force: true});
    cy.get('#submit').should('contain','Submit').click({force: true});
    cy.get('.modal-content').should('exist');
    cy.get('#example-modal-sizes-title-lg').should('contain','Thanks for submitting the form');
    cy.get('tbody > :nth-child(1) > :nth-child(2)').should('contain', user.name + ' ' + user.surname);
    cy.get('tbody > :nth-child(4) > :nth-child(2)').should('contain', user.phone);
    cy.get('tbody > :nth-child(2) > :nth-child(2)').should('contain', user.email);
    cy.get('tbody > :nth-child(3) > :nth-child(2)').should('contain', 'Male');
    cy.get('tbody > :nth-child(5) > :nth-child(2)').should('contain', user.dbirth);
    cy.get('tbody > :nth-child(6) > :nth-child(2)').should('contain', 'Maths');
    cy.get('tbody > :nth-child(7) > :nth-child(2)').should('contain', 'Sports');
    cy.get('tbody > :nth-child(9) > :nth-child(2)').should('contain', user.address);
    cy.get('tbody > :nth-child(10) > :nth-child(2)').should('contain', 'NCR Delhi');
    cy.get('#closeLargeModal').should('contain', 'Close').click({force: true}); 
  }); 
  it('advanced level - Check adding and deleting user', () => {
    cy.visit('/webtables');
    cy.addUser();
    cy.get(':nth-child(4) > .rt-tr > :nth-child(2)').should('contain', 'Userovich');
    cy.deleteUser4();
    cy.get(':nth-child(4) > .rt-tr > :nth-child(2)').should('contain', '');
  }); 
  it('advanced level - Check deleting all users', () => {
    cy.visit('/webtables');
    cy.deleteAllUsers();
    cy.get('.rt-tbody > :nth-child(1) > .rt-tr > :nth-child(1)').should('contain', '');
  });     
  it('advanced level - Check Find user in search field and edit it', () => {
    cy.visit('/webtables');
    cy.addUser();
    cy.get('#searchBox').type('User{Enter}');
    cy.get(':nth-child(1) > .rt-tr > :nth-child(2)').should('contain', 'Userovich');
    cy.get('#edit-record-4 > svg > path').click();
    cy.get('#firstName').clear().type('EditedUser');
    cy.get('#submit').click();
    cy.get('#searchBox').clear().type('EditedUser{Enter}');
    cy.get('.rt-tbody > :nth-child(1) > .rt-tr > :nth-child(1)')
      .should('contain', 'EditedUser');
    }); 
  it('advanced level - Check search by all column values', () => {
    cy.visit('/webtables');
    cy.addUser();
    cy.searchAllColumn();
    cy.deleteUser4();
  }); 
  it('advanced level - Validate data in user row after creating user', () => {
    cy.visit('/webtables');
    cy.addUser();
    cy.get(':nth-child(4) > .rt-tr > :nth-child(1)').should('contain', 'User');
    cy.get(':nth-child(4) > .rt-tr > :nth-child(2)').should('contain', 'Userovich');
    cy.get(':nth-child(4) > .rt-tr > [style="flex: 40 0 auto; width: 40px; max-width: 40px;"]')
      .should('contain', '40');
    cy.get(':nth-child(4) > .rt-tr > :nth-child(4)').should('contain', 'mail@mail.com');
    cy.get(':nth-child(4) > .rt-tr > :nth-child(5)').should('contain', '5000');
    cy.get(':nth-child(4) > .rt-tr > :nth-child(6)').should('contain', 'Department');
  }); 
  it('advanced level - Check Rows count selection', () => {
    cy.visit('/webtables');
    cy.get('select').select('5 rows')
    cy.get(':nth-child(5) > .rt-tr > :nth-child(1)').should('exist');
    cy.get('select').select('10 rows')
    cy.get(':nth-child(10) > .rt-tr > :nth-child(1)').should('exist');
    cy.get('select').select('20 rows')
    cy.get(':nth-child(20) > .rt-tr > :nth-child(1)').should('exist');
    cy.get('select').select('25 rows')
    cy.get(':nth-child(25) > .rt-tr > :nth-child(1)').should('exist');
    cy.get('select').select('50 rows')
    cy.get(':nth-child(50) > .rt-tr > :nth-child(1)').should('exist');
    cy.get('select').select('100 rows')
    cy.get(':nth-child(100) > .rt-tr > :nth-child(1)').should('exist');
  }); 
  it('advanced level - Check Pagination', () => {
    cy.visit('/webtables');
    cy.get('select').select('5 rows')
    cy.addUser();
    cy.addUser();
    cy.addUser();
    cy.get('.-next > .-btn').click();
    cy.get('.-pageInfo').should('contain', '2');
    cy.get('.-pageJump > input').clear().type('1{Enter}');
    cy.get(':nth-child(4) > .rt-tr > :nth-child(1)').should('contain', 'User');
  }); 
});