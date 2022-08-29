/// <reference types='cypress' />

describe('Automation practice form', () => {
  before(() => {
    cy.visit('/');
  });

  it('should submit automation practice form', () => {
    cy.get('#firstName').type ('Tom');

    cy.get('#lastName').type ('Smith');

    cy.get('#userEmail').type ('tom.smith@gmail.com');

    cy.get('[id="gender-radio-1"]').check({force: true});

    cy.get('#userNumber').type ('1234567890');

    cy.get('#dateOfBirthInput').click();

    cy.get('[class="react-datepicker__month-select"]').select('May');

    cy.get('[class="react-datepicker__year-select"]').select('1980');

    cy.get('[class="react-datepicker__day react-datepicker__day--012"]').click();
    
    cy.get('[class="subjects-auto-complete__value-container subjects-auto-complete__value-container--is-multi css-1hwfws3"]').type ('Arts{enter}');
    
    cy.get('[id="hobbies-checkbox-1"]').check({force: true});

    cy.get('[id="currentAddress"]').type('Address');

    cy.get('#state').type('NCR{enter}');

    cy.get('#city').type('Delhi{enter}');

    cy.get('#submit').click();

    cy.contains('Thanks for submitting the form').should('be.visible');

    cy.contains('tr', 'Student Name').should('contain', 'Tom Smith');

    cy.contains('tr', 'Student Email').should('contain', 'tom.smith@gmail.com');

    cy.contains('tr', 'Gender').should('contain', 'Male');

    cy.contains('tr', 'Mobile').should('contain', '1234567890');

    cy.contains('tr', 'Date of Birth').should('contain', '12 May,1980');

    cy.contains('tr', 'Subjects').should('contain', 'Arts');

    cy.contains('tr', 'Hobbies').should('contain', 'Sports');

    cy.contains('tr', 'Address').should('contain', 'Address');

    cy.contains('tr', 'State and City').should('contain', 'NCR Delhi');
  });
});
