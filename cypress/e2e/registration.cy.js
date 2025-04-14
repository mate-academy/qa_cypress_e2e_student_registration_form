// Оголошую функцію generateUser зразу в тесті
function generateUser() {
  const randomNumber = Math.floor(Math.random() * 1000000);
  const firstName = `TestFirstName${randomNumber}`;
  const lastName = `TestLastName${randomNumber}`;
  const email = `test${randomNumber}@example.com`;
  const mobile = `678${Math.floor(1000000 + Math.random() * 9000000)}`;
  const birthYear = '1990';
  const birthMonth = 'January';
  const birthDay = '01';
  const subject = 'QA Engineering';
  const hobbies = 'Sports';
  const address = 'Old Town Jaipur';
  const state = 'Rajasthan';
  const city = 'Jaipur';

  return {
    firstName,
    lastName,
    email,
    gender: 'Female',
    mobile,
    birthYear,
    birthMonth,
    birthDay,
    subject,
    hobbies,
    address,
    state,
    city
  };
}

describe('Student Registration page', () => {
  it('Fills the form with generated user data', () => {
    const user = generateUser();

    cy.visit(Cypress.config('baseUrl'));

    cy.get('#firstName').type(user.firstName);
    cy.get('#lastName').type(user.lastName);
    cy.get('#userEmail').type(user.email);

    cy.get(`input[name="gender"][value="${user.gender}"]`).check({ force: true });

    cy.get('#userNumber').type(user.mobile);

    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__year-select').select(user.birthYear);
    cy.get('.react-datepicker__month-select').select(user.birthMonth);
    cy.get(
      `.react-datepicker__day--0${user.birthDay}:not(.react-datepicker__day--outside-month)`
    ).click();

    cy.get('#subjectsInput').type(`${user.subject}{enter}`);

    cy.get('label[for="hobbies-checkbox-1"]').click({ force: true });

    cy.get('#currentAddress').type(user.address, { force: true });

    cy.get('#state').scrollIntoView();
    cy.get('#state').click({ force: true });

    cy.get('#state input').type(`${user.state}{enter}`, { force: true });

    cy.get('#city').scrollIntoView();
    cy.get('#city').click({ force: true });

    cy.get('#city input').type(`${user.city}{enter}`, { force: true });

    cy.get('#submit').click({ force: true });

    cy.get('#example-modal-sizes-title-lg').should('be.visible');
    cy.get('td:contains("Student Name") + td').should(
      'contain',
      `${user.firstName} ${user.lastName}`
    );
    cy.get('td:contains("Student Email") + td').should('contain', user.email);
    cy.get('td:contains("Gender") + td').should('contain', user.gender);
    cy.get('td:contains("Mobile") + td').should('contain', user.mobile);
    cy.get('td:contains("Date of Birth") + td').should(
      'contain',
      `${user.birthDay} ${user.birthMonth},${user.birthYear}`
    );
    cy.get('td:contains("Subjects") + td').invoke('text', user.subject);
    cy.get('td:contains("Address") + td').should('contain', user.address);
    cy.get('td:contains("State and City") + td').should(
      'contain',
      `${user.state} ${user.city}`
    );
  });
});
