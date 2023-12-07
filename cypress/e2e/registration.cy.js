/// <reference types='cypress' />

describe('Student Registration page', () => {
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('should fill the form and assert modal content', () => {
    // first name, last name
    cy.get('[placeholder="First Name"]')
      .type('Testing');
    cy.get('[placeholder="Last Name"]')
      .type('Again');
    // email
    cy.get('[placeholder="name@example.com"]')
      .type('testing@again.com');
    // gender radio
    cy.get('label[for="gender-radio-1"]')
      .click();
    // mobile
    cy.get('[placeholder="Mobile Number"]')
      .type('1234567890');
    // date of birth
    cy.get('#dateOfBirthInput')
      .click();
    cy.get('.react-datepicker__month-select')
      .select('5');
    cy.get('.react-datepicker__year-select')
      .select('2002');
    cy.get('.react-datepicker__day--017')
      .click();
    // subjects
    cy.get('#subjectsInput')
      .type('Physics{enter}');
    // hobbies checkbox
    cy.get('label[for="hobbies-checkbox-1"]')
      .click();
    cy.get('label[for="hobbies-checkbox-3"]')
      .click();
    // address textfield
    cy.get('[id="currentAddress"]')
      .type('Testowa 17, 22-222 Testowo');
    // state dropdown
    cy.get('#state')
      .click();
    cy.contains('Rajasthan')
      .click();
    // city dropdown
    cy.get('#city')
      .click();
    cy.contains('Jaiselmer')
      .click();

    // click submit
    cy.get('[type="submit"]')
      .click();

    // assert modal content
    cy.get('.modal')
      .should('exist');
    cy.get('.modal-content')
      .contains('Student Name')
      .next('td')
      .should('have.text', 'Testing Again');
    cy.get('.modal-content')
      .contains('Student Email')
      .next('td')
      .should('have.text', 'testing@again.com');
    cy.get('.modal-content')
      .contains('Gender')
      .next('td')
      .should('have.text', 'Male');
    cy.get('.modal-content')
      .contains('Mobile')
      .next('td')
      .should('have.text', '1234567890');
    cy.get('.modal-content')
      .contains('Date of Birth')
      .next('td')
      .should('have.text', '17 June,2002');
    cy.get('.modal-content')
      .contains('Subjects')
      .next('td')
      .should('have.text', 'Physics');
    cy.get('.modal-content')
      .contains('Hobbies')
      .next('td')
      .should('have.text', 'Sports, Music');
    cy.get('.modal-content')
      .contains('Address')
      .next('td')
      .should('have.text', 'Testowa 17, 22-222 Testowo');
    cy.get('.modal-content')
      .contains('State and City')
      .next('td')
      .should('have.text', 'Rajasthan Jaiselmer');
  });
});
