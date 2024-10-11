describe('Student Registration Form', () => {
  beforeEach(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('should fill out the form and submit', () => {
    cy.get('#firstName').type('Mira');
    cy.get('#lastName').type('Johnsonyk');
    cy.get('#userEmail').type('miratest123@ukr.net');
    cy.get('input[name="gender"][value="Female"]').check({ force: true });
    cy.get('#userNumber').type('678456123');
    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__year-select').select('1990');
    cy.get('.react-datepicker__month-select').select('January');
    cy.get('.react-datepicker__day--001:not(.react-datepicker__day--outside-month)').click();
    cy.get('#subjectsInput').type('QA Engineering{enter}');
    cy.get('label[for="hobbies-checkbox-1"]').click({ force: true });
    cy.get('#currentAddress').type('Old Town Jaipur', { force: true });

    cy.get('#state').click({ force: true });
    cy.get('#state input').type('Rajasthan{enter}', { force: true });

    cy.get('#city').click({ force: true });
    cy.get('#city input').type('Jaipur{enter}', { force: true });

    cy.get('#submit').click({ force: true });

    cy.get('#example-modal-sizes-title-lg').should('be.visible');
    cy.get('td:contains("Student Name") + td').should('contain', 'Mira Johnsonyk');
    cy.get('td:contains("Student Email") + td').should('contain', 'miratest123@ukr.net');
    cy.get('td:contains("Gender") + td').should('contain', 'Female');
    cy.get('td:contains("Mobile") + td').should('contain', '678456123');
    cy.get('td:contains("Date of Birth") + td').should('contain', '01 January,1990');
    cy.get('#subjectsInput').then(($input) => {
      $input.val('QA Engineering');
    });
    cy.get('td:contains("Hobbies") + td').should('contain', 'Sports');
    cy.get('td:contains("Address") + td').should('contain', 'Old Town Jaipur');
    cy.get('td:contains("State and City") + td').should('contain', 'Rajasthan Jaipur');
  });
});
