/// <reference types='cypress' />
describe('Student Registration page', () => {
  let user;
  before(() => {
    cy.visit('/')
    cy.task('generateUser').then(generateUser => {
      user = generateUser;
    })
  });

  it('should register a new student', () => {
    const subjects = 'English, Physics'
    const stateAndCity = 'NCR Delhi'
    const userBirthYear = '1990'
    const userBirthMonth = 'January'

    cy.get('#firstName').type(user.firstName)
    cy.get('#lastName').type(user.lastName)
    cy.get('#userEmail').type(user.email)
    cy.contains('.custom-control-label', user.gender).click()
    cy.get('#userNumber').type(user.mobileNumber)

    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__month-select').select(userBirthMonth);
    cy.get('.react-datepicker__year-select').select(userBirthYear);
    cy.get('.react-datepicker__day--015').click();

    cy.get('.subjects-auto-complete__value-container').type('En{enter}')
    cy.contains('.custom-control-label', user.hobby).click()
    cy.get('#currentAddress').type(user.address)
    cy.get('#state').click().type('{downarrow}{enter}');
    cy.get('#city').click().type('{downarrow}{enter}');

    cy.get('#submit').click()

    cy.contains('tr', 'Student Name').should('contain', user.firstName)
      .and('contain', user.lastName);
    cy.contains('tr', 'Student Email')
      .should('contain', user.email);
    cy.contains('tr', 'Gender')
        .should('contain', user.gender);
    cy.contains('tr', 'Mobile')
      .should('contain', user.mobileNumber);
    cy.contains('tr', 'Date of Birth')
      .should('contain', 1990); 
    cy.contains('tr', 'Hobbies')
      .should('contain', user.hobby);
    cy.contains('tr', 'Address')
      .should('contain', user.address);
    cy.contains('tr', 'State and City')
      .should('contain', stateAndCity);
  });
});
