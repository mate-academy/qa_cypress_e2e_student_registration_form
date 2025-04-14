/// <reference types='cypress' />

describe('Student Registration page', () => {
  let user;
  before(() => {
    cy.visit('');
    cy.task('generateUser').then((generatedUser) => {
      user = generatedUser;
    });
  });

  it('should register a new student', () => {
    cy.findByPlaceholder('First Name').type(user.firstName);
    cy.findByPlaceholder('Last Name').type(user.lastName);
    cy.findByPlaceholder('name@example.com').type(user.email);

    cy.get(`#gender-radio-${user.randomGender}`).check();
    cy.findByPlaceholder('Mobile Number').type(user.mobileNumber);

    cy.get('#dateOfBirthInput').click();
    cy.pickDate('month-select').select(user.birth.month);
    cy.pickDate('year-select').select(`${user.birth.year}`);
    cy.pickDate('day').contains(user.birth.day).click();

    cy.get('.subjects-auto-complete__value-container')
      .type('en{enter}' + 'ph{enter}');
    cy.get('.custom-control-label').contains(user.hobby).click();
    cy.findByPlaceholder('Current Address').type(user.address);
    cy.get('#state').type(' {downarrow}{enter}');
    cy.get('#city').type(' {downarrow}{enter}');
    cy.get('#submit').click();
  });

  it('should include inputed data in modal window', () => {
    const {
      firstName, lastName, email,
      randomGender, mobileNumber, birth, hobby, address
    } = user;

    cy.checkTableRow('Student Name', `${firstName} ${lastName}`);
    cy.checkTableRow('Student Email', email);
    cy.checkTableRow('Gender', randomGender);
    cy.checkTableRow('Mobile', mobileNumber);
    cy.checkTableRow('Date of Birth', `${birth.day} ${birth.month}, ${birth.year}`);
    cy.checkTableRow('Hobbies', hobby);
    cy.checkTableRow('Address', address);
    cy.checkTableRow('State and City', 'NCR Delhi');
  });
});
