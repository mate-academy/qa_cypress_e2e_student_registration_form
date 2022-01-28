/// <reference types='cypress' />

describe('User should be able', () => {
  let user;
  before(() => {
    cy.visit('/');
    cy.task('freshUser').then((freshUser) => {
      user = freshUser;
    });
  });

  it('to register successfully', () => {
    cy.get('#firstName').type(user.username).should('have.value', user.username);
    cy.get('#lastName').type(user.lastname).should('have.value', user.lastname);
    cy.get('#userEmail').type(user.email).should('have.value', user.email);
    cy.get('#genterWrapper > .col-md-9 > :nth-child(2) > .custom-control-label').click();
    cy.get('#userNumber').type(user.phone).should('have.value', user.phone);
    cy.get('#dateOfBirthInput').type('{selectall}').type(user.birthdate).should('have.value', user.birthdate);
    cy.get('#subjectsInput').type(user.subject, { force: true }).should('have.value', user.subject);
    cy.get('#react-select-2-option-0').click();
    cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(3) > .custom-control-label').click();
    cy.get('#currentAddress').type(user.address).should('have.value', user.address);
    cy.get('#state > .css-yk16xz-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer > .css-19bqh2r').click();
    cy.get('#react-select-3-option-0').click();
    cy.get('#city > .css-yk16xz-control > .css-1hwfws3').click();
    cy.get('#react-select-4-option-2').click();
    cy.get('#submit').click();
    cy.get('#example-modal-sizes-title-lg').should('contain', 'Thanks for submitting the form')
  });

  it('to register with data the same as entered', () => {
    cy.get('tbody > :nth-child(1) > :nth-child(2)').should('contain', `${user.username} ${user.lastname}`);
    cy.get('tbody > :nth-child(2) > :nth-child(2)').should('contain', user.email);
    cy.get('tbody > :nth-child(3) > :nth-child(2)').should('contain', 'Female');
    cy.get('tbody > :nth-child(4) > :nth-child(2)').should('contain', user.phone);
    cy.get('tbody > :nth-child(5) > :nth-child(2)').should('contain', '20 Dec');
    cy.get('tbody > :nth-child(6) > :nth-child(2)').should('contain', user.subject);
    cy.get('tbody > :nth-child(7) > :nth-child(2)').should('contain', 'Music');
    cy.get('tbody > :nth-child(9) > :nth-child(2)').should('contain', user.address);
    cy.get('tbody > :nth-child(10) > :nth-child(2)').should('contain', 'NCR Noida');


    
  });
});