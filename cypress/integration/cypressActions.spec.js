/// <reference types='cypress' />

describe('Name of the group', () => {
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form')
  });

  it('Fill all fields accept picture', () => {
    cy.get('#firstName').type('zxc')
    cy.get('#lastName').type('zxc')
    cy.get('#userEmail').type('zxc@zxc.zxc')
    cy.get('#genterWrapper > .col-md-9 > :nth-child(1)').click()
    cy.get('#userNumber').type('8090012131')
    cy.get('#dateOfBirthInput').type('{selectall}').type('12 Jun 1997{enter}')
    cy.get('.subjects-auto-complete__value-container').type('Maths{enter}')
    cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(1) > .custom-control-label').click()
    cy.get('#currentAddress').type('Bomj')
    cy.get('#state > .css-yk16xz-control > .css-1hwfws3').type('NCR{enter}')
    cy.get('#city > .css-yk16xz-control > .css-1hwfws3').type('Del{enter}')  
});

it('Click Submit button', () => {
  cy.get('#submit').click()
});

it('Validate inputed data in modal window', () => {
  cy.contains('tbody > :nth-child(1) > :nth-child(2)','zxc zxc').should('exist')
  cy.contains('tbody > :nth-child(2) > :nth-child(2)','zxc@zxc.zxc').should('exist')
  cy.contains('tbody > :nth-child(3) > :nth-child(2)','Male').should('exist')
  cy.contains('tbody > :nth-child(4) > :nth-child(2)','8090012131').should('exist')
  cy.contains('tbody > :nth-child(5) > :nth-child(2)','12 June,1997').should('exist')
  cy.contains('tbody > :nth-child(6) > :nth-child(2)','Maths').should('exist')
  cy.contains('tbody > :nth-child(7) > :nth-child(2)','Sports').should('exist')
  cy.contains('tbody > :nth-child(9) > :nth-child(2)','Bomj').should('exist')
  cy.contains('tbody > :nth-child(10) > :nth-child(2)','NCR Delhi').should('exist')

});
});
