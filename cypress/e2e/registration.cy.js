/* eslint-disable max-len */
/* eslint-disable no-tabs */
/* eslint-disable indent */
/// <reference types='cypress' />

describe('Student Registration page', () => {
  before(() => {
		cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('Should assert inputed data in modal window', () => {
		cy.get('#firstName').type('Pony');
		cy.get('#lastName').type('Happy');
		cy.get('#userEmail').type('happyPony@gmail.com');
		cy.get('#genterWrapper > .col-md-9 > :nth-child(3)').click();
		cy.get('#userNumber').type(380509999999);
		cy.get('#dateOfBirthInput').click();
		cy.get(':nth-child(1) > .react-datepicker__day--001').click();
		cy.get('.subjects-auto-complete__value-container').type('carrot');
		cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(1) > .custom-control-label')
			.click();
		cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(3) > .custom-control-label')
			.click();
		cy.get('#currentAddress').type('Cloud');
		cy.get('#state > .css-yk16xz-control > .css-1hwfws3 > .css-1wa3eu0-placeholder')
			.click();
		cy.get('#react-select-3-option-2').click();
		cy.get('#city > .css-yk16xz-control > .css-1hwfws3').click();
		cy.get('#react-select-4-option-0').click();
		cy.get('#submit').click();
		cy.get('#example-modal-sizes-title-lg')
			.should('contain.text', 'Thanks for submitting the form');
  });
});
