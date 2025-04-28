/// <reference types='cypress' />

describe('Student Registration page', () => {
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form/');
  });

  it('Should be able to fill the fields and submit form', () => {
    cy.get('#firstName').type('Mike');
    cy.get('#lastName').type('Taylor');
    cy.get('#userEmail').type('test1001@gmail.com');
    cy.get('label[for="gender-radio-1"]').contains('Male').click();
    cy.get('#userNumber').type('1234567982');
    cy.get('#dateOfBirthInput').click();
    cy.get('select.react-datepicker__year-select').select('1989');
    cy.get('select.react-datepicker__month-select').select('May');
    cy.get('div.react-datepicker__day')
      .contains('14').click();
    cy.get('#subjectsInput').type('English');
    cy.get('div.subjects-auto-complete__menu').contains('English').click();
    cy.get('#subjectsInput').type('Maths');
    cy.get('div.subjects-auto-complete__menu').contains('Maths').click();
    cy.get('label[for="hobbies-checkbox-1"]').contains('Sports').click();
    cy.get('label[for="hobbies-checkbox-2"]').contains('Reading').click();
    cy.get('label[for="hobbies-checkbox-3"]').contains('Music').click();
    cy.get('#currentAddress').type('abc street');
    cy.get('div').contains('Select State').click();
    cy.contains('div', 'NCR').click();
    cy.get('div').contains('Select City').click();
    cy.contains('div', 'Noida').click();
    cy.get('#submit').click();
    // assertion
    cy.contains('td', 'Student Name').next()
      .should('have.text', 'Mike Taylor');
    cy.contains('td', 'Student Email').next()
      .should('have.text', 'test1001@gmail.com');
    cy.contains('td', 'Gender').next()
      .should('have.text', 'Male');
    cy.contains('td', 'Mobile').next()
      .should('have.text', '1234567982');
    cy.contains('td', 'Date of Birth').next()
      .should('have.text', '14 May,1989');
    cy.contains('td', 'Subjects').next()
      .should('have.text', 'English, Maths');
    cy.contains('td', 'Hobbies').next()
      .should('have.text', 'Sports, Reading, Music');
    cy.contains('td', 'Address').next()
      .should('have.text', 'abc street');
    cy.contains('td', 'State and City').next()
      .should('have.text', 'NCR Noida');
  });
});
