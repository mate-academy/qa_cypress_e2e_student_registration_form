/// <reference types='cypress' />

describe('Student Registration page', () => {
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  const firstname = 'Gabriel';
  const lastname = 'Jesus';
  const email = 'gabrieljesus837@gmail.com';
  const phone = '2134123412';
  const subject = 'programming';
  const adress = 'my house';

  it('should register user', () => {
    cy.get('#firstName').type(firstname);
    cy.get('#lastName').type(lastname);
    cy.get('#userEmail').type(email);
    cy.get('[for="gender-radio-1"]').click();
    cy.get('#userNumber').type(phone);
    cy.get('#dateOfBirthInput').type('{ENTER}');
    cy.get('#subjectsInput').type(subject);
    cy.get('[for="hobbies-checkbox-1"').click();
    cy.get('#currentAddress').type(adress);
    cy.get('#state').click();
    cy.get('#react-select-3-option-1').click();
    cy.get('#city').click();
    cy.get('#react-select-4-option-1').click();
    cy.get('#submit').click();

    cy.get('tbody > :nth-child(1) > :nth-child(2)').should('contain', `${firstname} ${lastname}`);
    cy.get('tbody > :nth-child(2) > :nth-child(2)').should('contain', email);
    cy.get('tbody > :nth-child(3) > :nth-child(2)').should('contain', 'Male');
    cy.get('tbody > :nth-child(4) > :nth-child(2)').should('contain', phone);
    cy.get('tbody > :nth-child(7) > :nth-child(2)').should('contain', 'Sports');
    cy.get('tbody > :nth-child(9) > :nth-child(2)').should('contain', adress);
    cy.get('tbody > :nth-child(10) > :nth-child(2)')
      .should('contain', 'Uttar Pradesh Lucknow');
  });
});
