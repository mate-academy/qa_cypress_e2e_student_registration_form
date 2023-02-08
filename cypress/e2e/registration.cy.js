/// <reference types='cypress' />

describe('Student Registration page', () => {
  let user
  before(() => {
    cy.visit('/');
    cy.task('generateUser').then(generateUser => {
      user = generateUser;
    })
  });

  it('should register new student', () => {
    cy.findByPlaceholder('First Name')
      .type(user.firstName);

    cy.findByPlaceholder('Last Name')
      .type(user.lastName);

    cy.findByPlaceholder('name@example.com')
      .type(user.email);

    cy.wrap(user.gender).then((num) => {
      switch(num) {
        case 1: cy.get('#gender-radio-1').click({ force: true })
        break
        case 2: cy.get('#gender-radio-2').click({ force: true })
        break
        default: cy.get('#gender-radio-3').click({ force: true })
      }
    });

    cy.findByPlaceholder('Mobile Number')
      .type(user.phoneNumber);

    cy.get('#dateOfBirthInput')
      .click();

    cy.pickDate('month-select')
      .select(user.birth.month);

    cy.pickDate('year-select')
      .select(`${user.birth.year}`);

    cy.pickDate('day')
      .contains(`${user.birth.day}`)
      .click();
  
    cy.wrap(user.subjects).then((num) => {
      const item = cy.get('.subjects-auto-complete__value-container');
      switch(num) {
        case 1: item.type('Ma{enter}')
        case 2: item.type('Hi{enter}')
        default: item.type('Bi{enter}')
      }
    });

    cy.wrap(user.hobbies).then((num) => {
      switch(num) {
        case 1: cy.get('#hobbies-checkbox-1').click({ force: true })
        case 2: cy.get('#hobbies-checkbox-2').click({ force: true })
        default: cy.get('#hobbies-checkbox-3').click({ force: true })
      }
    });

    cy.get('#uploadPicture').selectFile({
      contents: Cypress.Buffer.from('file contents'),
      fileName: 'picture.jpeg',
      lastModified: Date.now(),
    })

    cy.findByPlaceholder('Current Address')
      .type(user.address);

    cy.get('#state')
      .type('{enter}');

    cy.get('#city')
      .type('{enter}');

    cy.get('#submit')
      .click();

 // Cheking 'Thanks for submitting the form' pop up
 
    cy.contains('tr', 'Student Name')
     .should('contain', `${user.firstName} ${user.lastName}`);

    cy.contains('tr', 'Student Email')
     .should('contain', `${user.email}`);

     cy.wrap(user.gender).then((num) => {
      const item = cy.contains('tr', 'Gender');
      switch(num) {
        case 1: item.should('contain', 'Male');
        break
        case 2: item.should('contain', 'Female');
        break
        default: item.should('contain', 'Other');
      }
    });

    cy.contains('tr', 'Mobile')
     .should('contain', `${user.phoneNumber}`);

    cy.contains('tr', 'Date of Birth')
     .should('contain', `${user.birth.day} ${user.birth.month},${user.birth.year}`);

     cy.wrap(user.subjects).then((num) => {
      const item = cy.contains('tr', 'Subjects');
      switch(num) {
        case 1: item.should('contain', 'Maths, Hindi, Biology')
        case 2: item.should('contain', 'Hindi, Biology')
        default: item.should('contain', 'Biology')
      }
    });

    cy.wrap(user.hobbies).then((num) => {
      const item = cy.contains('tr', 'Hobbies');
      switch(num) {
        case 1: item.should('contain', 'Sports, Reading, Music')
        case 2: item.should('contain', 'Reading, Music')
        default: item.should('contain', 'Music')
      }
    });

    cy.contains('tr', 'Picture')
     .should('contain', 'picture.jpeg');

    cy.contains('tr', 'Address')
     .should('contain', `${user.address}`);

    cy.contains('tr', 'State and City')
     .should('contain', 'NCR Delhi');
  });
});
