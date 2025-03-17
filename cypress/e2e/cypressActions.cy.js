/// <reference types='cypress' />

describe('ToolsQA', () => {
  before(() => {
   cy.visit('https://demoqa.com/automation-practice-form') 
  });

  it('Fill all fields in forms & click on [submit]', () => {
    cy.get('[placeholder="First Name"]').type('Boris');
    cy.get('[placeholder="Last Name"]').type('Johnsoniuk');
    cy.get('[placeholder="name@example.com"]').type('Johnsoniuk@qa.team');
    cy.get('input[name="gender"]').first().check({force: true});
    cy.get('[id="userNumber"]').type('0971234567');
    cy.get('[id="dateOfBirthInput"]')
      .type('{selectall}')
      .type('01 Jan 1990 {enter}');
    cy.get('.subjects-auto-complete__value-container').type('Math{enter} econ{enter}');
    cy.get('input[type="checkbox"]').check(['1','3'], {force: true});
    cy.get('[id="currentAddress"]').type('5th street');
    cy.get('#state').click().type('{downArrow}{enter}');
    cy.get('#city').click().type('{downArrow}{downArrow}{enter}'); 
    

    cy.get('#submit').click({force: true});
  });

  it('Validate inputed data in modal window', () => {
    // Student name
    cy.contains('tr', 'Student')
      .should('contain', 'Boris Johnsoniuk');
    // Email
    cy.contains('tr', 'Email')
      .should('contain', 'Johnsoniuk@qa.team');
    //Gender
    cy.contains('tr', 'Gender')
      .should('contain', 'Male');
    // Mobile
    cy.contains('tr', 'Mobile')
      .should('contain', '0971234567');
    // Date of birth
    cy.contains('tr', 'Date of Birth')
      .should('contain', '01 January,1990');
    //Subjects
    cy.contains('tr', 'Subjects')
      .should('contain', 'Maths, Economic');
    // Hobbies
    cy.contains('tr', 'Hobbies')
      .should('contain', 'Sports, Music');
    // Picture
    cy.contains('tr', 'Picture')
      .should('contain', '');
    // Address
    cy.contains('tr', 'Address')
      .should('contain', '5th street');
    // State and City
    cy.contains('tr', 'State and City')
      .should('contain', 'NCR Gurgaon');
  });
});
