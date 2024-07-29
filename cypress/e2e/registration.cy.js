/// <reference types='cypress' />

describe('Student Registration page', () => {
  const firstName = 'John';
  const lastName = 'Coffey';
  const email = 'JohnCoffey@gmail.com';
  const phoneNumber = '1111111111';
  const birthYear = '1957';
  const birthMonth = 'December';
  const birthDay = '15';
  const address = '122 Block E, Cold Mountain, Louisiana';
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('', () => {
    cy.get('#firstName').type(firstName);
    cy.get('#lastName').type(lastName);
    cy.get('#userEmail').type(email);
    cy.get('input[name="gender"][value="Male"]').click({ force: true });
    cy.get('#userNumber').type(phoneNumber);
    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__year-select').select(birthYear);
    cy.get('.react-datepicker__month-select').select(birthMonth);
    cy.get('.react-datepicker__day--015').click();
    cy.get('#subjectsInput').type('Chemistry{enter}');
    cy.get('input[type="checkbox"][value="1"]').click({ force: true });
    cy.get('#currentAddress').type(address);
    cy.get('#state').click();
    cy.get('#react-select-3-option-0').click();
    cy.get('#city').click();
    cy.get('#react-select-4-option-0').click();

    cy.get('#submit').click();

    cy.contains('td', 'Student Name').next().should('contain', `${firstName} ${lastName}`);
    cy.contains('td', 'Student Email').next().should('contain', email);
    cy.contains('td', 'Gender').next().should('contain', 'Male');
    cy.contains('td', 'Mobile').next().should('contain', phoneNumber);
    cy.contains('td', 'Date of Birth')
      .next().should('contain', `${birthDay} ${birthMonth},${birthYear}`);
    cy.contains('td', 'Subjects').next().should('contain', 'Chemistry');
    cy.contains('td', 'Hobbies').next().should('contain', 'Sports');
    cy.contains('td', 'Address').next().should('contain', address);
    cy.contains('td', 'State and City').next().should('contain', 'NCR Delhi');
  });
});
