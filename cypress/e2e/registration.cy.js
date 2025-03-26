/// <reference types='cypress' />

describe('Student Registration page', () => {
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  const user = {
    firstName: 'Mariia',
    lastName: 'Hospodinova',
    userEmail: 'maria@gmail.com',
    gender: 'Female',
    userNumber: 1234567890,
    dateOfBirthInput: '17 Apr 2007',
    subjects: ['Maths'],
    hobbies: 'Sport',
    currentAddress: 'bla bla bla'
  };

  it('should enter user info', () => {
    cy.get('#firstName').type(user.firstName);
    cy.get('#lastName').type(user.lastName);
    cy.get('#userEmail').type(user.userEmail);

    cy.get('label[for="gender-radio-2"]').click();

    cy.get('#userNumber').type(user.userNumber);

    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__month-select').select('April');
    cy.get('.react-datepicker__year-select').select('2007');
    cy.get('.react-datepicker__day--017').click();

    cy.get('.subjects-auto-complete__value-container').type(
      user.subjects[0] + `{Enter}`
    );

    cy.get('label[for="hobbies-checkbox-1"]').click();

    cy.get('#currentAddress').type(user.currentAddress);

    // cy.get('.css-19bqh2r').click().contains('NCR').click();
    // cy.get('.css-tlfecz-indicatorContainer', { multiple: true } ).click();
    // cy.contains('NCR').click();
    // cy.get('#city').click().contains('Delhi').click();

    cy.get('#submit').click();

    cy.contains(user.firstName).should('be.visible');
    cy.contains(user.lastName).should('be.visible');
    cy.contains(user.userEmail).should('be.visible');
    cy.contains(user.gender).should('be.visible');
    cy.contains(user.userNumber).should('be.visible');
    cy.contains('17 April,2007').should('be.visible');
    cy.contains(user.subjects[0]).should('be.visible');
    cy.contains(user.hobbies).should('be.visible');
    // cy.contains(user.currentAddress).should('be.visible');
    // cy.get('#google_ads_iframe_/21849154601,22343295815/Ad.Plus-Anchor_0__container__').invoke('hide');
    cy.get('#google_ads_iframe_\/21849154601\,22343295815\/Ad\.Plus-Anchor_0').invoke('hide');
    cy.contains(user.currentAddress, { timeout: 10000 }).should('be.visible');
  });
});
