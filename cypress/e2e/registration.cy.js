describe('Student Registration page', () => {
  before(() => {
    cy.visit('');
  });

  it('', () => {
  it('should register a new student with valid data', () => {
    cy.findByPlaceholder('First Name')
      .type('Vasiliy');
    cy.findByPlaceholder('Last Name')
      .type('Petrov');
    cy.findByPlaceholder('name@example.com')
      .type('vpetrov@mail.com');
    cy.get('label[for="gender-radio-1"]').click();
    cy.findByPlaceholder('Mobile Number')
      .type('3548952632');
    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__month-select').select('February');
    cy.get('.react-datepicker__year-select').select('1977');
    cy.get('.react-datepicker__day--020').click();
    cy.get('#subjectsContainer').type('Arts{enter}');
    cy.get('label[for="hobbies-checkbox-2"]').click();
    cy.findByPlaceholder('Current Address')
      .type('Saharova 85, Kyiv');
    cy.get('#state').click();
    cy.get('#react-select-3-option-1').click();
    cy.get('#city').click();
    cy.get('#react-select-4-option-2').click();
    cy.get('#submit').click();

    cy.get('.modal-header').contains('Thanks for submitting the form');

    cy.contains('tr', 'Student Name').should('contain', 'Vasiliy Petrov');
    cy.contains('tr', 'Student Email').should('contain', 'vpetrov@mail.com');
    cy.contains('tr', 'Gender').should('contain', 'Male');
    cy.contains('tr', 'Mobile').should('contain', '3548952632');
    cy.contains('tr', 'Date of Birth').should('contain', 'February');
    cy.contains('tr', 'Date of Birth').should('contain', '1977');
    cy.contains('tr', 'Date of Birth').should('contain', '20');
    cy.contains('tr', 'Subjects').should('contain', 'Arts');
    cy.contains('tr', 'Hobbies').should('contain', 'Reading');
    cy.contains('tr', 'Address').should('contain', 'Saharova 85, Kyiv');
    cy.contains('tr', 'State and City').should('contain', 'Uttar Pradesh');
    cy.contains('tr', 'State and City').should('contain', 'Merrut');
  });
});
});