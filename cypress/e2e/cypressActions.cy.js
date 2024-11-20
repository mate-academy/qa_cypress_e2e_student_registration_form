/// <reference types='cypress' />

describe('Homework', () => {
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form')
  });

  it('Fill all fields', () => {
    cy.get('[placeholder="First Name"]').type('Tomas')
    cy.get('[placeholder="Last Name"]').type('Red')
    cy.get('[placeholder="name@example.com"]').type('tomas@red.com')
    cy.get('#gender-radio-2').check({ force: true})
    cy.get('[placeholder="Mobile Number"]').type('123456789')
    cy.get('#dateOfBirthInput').type('{selectall}').type('15 July 1991{enter}')

    cy.get('[id="subjectsContainer"]').type('Maths',{deley: 2000})
    cy.contains('[id="react-select-2-option-0"]','Maths').click()

    cy.get('#hobbies-checkbox-2').check({force: true})
    cy.get('[placeholder="Current Address"]').type('Lviv, Ivana Franka 8')
    cy.get('[id=state]').type('NCR' + '{enter}')
    cy.get('#city').type('Delhi'+ '{enter}')
    cy.get('[id="submit"]').click({force:true})
    cy.contains('#example-modal-sizes-title-lg','Thanks for submitting the form')
    cy.contains('tr', 'Gender').should('contain', 'Female');
    cy.contains('tr', 'Student Name').should('contain', 'Tomas Red');
    cy.contains('tr', 'Student Email').should('contain', 'tomas@red.com');
  });
});
