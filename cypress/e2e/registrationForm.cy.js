const { generateUser } = require("../support/generate");

describe("User should be able", () => {
  beforeEach(() => {
    cy.visit("https://demoqa.com/automation-practice-form");
    cy.viewport(600, 1000);
  });
   
  it("to submit a filled form", () => {
    const { firstName, lastName, email, phoneNumber, address } = generateUser();

    cy.get('#firstName').type(firstName);

    cy.get('#lastName').type(lastName);

    cy.get('#userEmail').type(email);

    cy.get('[for="gender-radio-2"]').click();

    cy.get('#userNumber').type(phoneNumber);

    cy.get('#dateOfBirthInput').click();

    cy.get('.react-datepicker__year-select').select('2002');

    cy.get('.react-datepicker__month-select').select('April');

    cy.get('.react-datepicker__day--017').click();

    cy.get('.subjects-auto-complete__value-container').type('History{enter}').type('Maths{enter}');

    cy.get('[type="checkbox"]#hobbies-checkbox-1').check({force:true});

    cy.get('[type="checkbox"]#hobbies-checkbox-3').check({force:true});

    cy.get('#currentAddress').type(address);

    cy.contains('Select State').type('NCR{enter}');

    cy.contains('Select City').type('Gurgaon{enter}');

    cy.get('.btn.btn-primary')
    .click();

    cy.contains('Thanks for submitting the form')
    .should('be.visible');

    cy.get('.modal-body').should('contain', firstName)
      .and('contain', lastName)
      .and('contain', email)
      .and('contain', 'Female')
      .and('contain', phoneNumber)
      .and('contain', '17 April,2002')
      .and('contain', 'History, Maths')
      .and('contain', 'Sports, Music')
      .and('contain', address)
      .and('contain', 'NCR Gurgaon');
  })
  
});
