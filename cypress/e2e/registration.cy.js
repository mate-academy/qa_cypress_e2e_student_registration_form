/// <reference types='cypress' />

let user;
describe('Student Registration page', () => {
  beforeEach(() => {
    cy.task('generateUser').then((generateUser) => {
      user = generateUser;
    });
    cy.visit('');
  });

  it('shoud register a new student', () => {
    const { testData } = user;
    cy.get('#firstName').type(testData.firstName);
    cy.get('#lastName').type(testData.lastName);
    cy.get('#userEmail').type(testData.email);

    cy.get('.custom-control-label').contains(testData.randomGender).click();

    cy.get('#userNumber').type(testData.mobileNumber);

    cy.get('#dateOfBirthInput').click();
    cy.birthDate('month-select').select(testData.birthMonth);
    cy.birthDate('year-select').select(testData.birthYear);
    cy.birthDate('month').contains(testData.birthDay).click();

    cy.get('.subjects-auto-complete__value-container').type(
      'En{downarrow}{enter}' + 'En{enter}'
    );

    cy.hobbies(testData.randomHobbie1).click();
    cy.hobbies(testData.randomHobbie2).click();
    cy.hobbies(testData.randomHobbie3).click();

    cy.get('#currentAddress').type(
      `Name:${testData.firstName} ${testData.lastName};
email:${testData.email}; mobile:${testData.mobileNumber};
birthDay:${testData.birthDay}; birthMonth:${testData.birthMonth};
birthYear:${testData.birthYear}; Gender:${testData.randomGender};
Hobbies:${testData.randomHobbie1},${testData.randomHobbie2},${testData.randomHobbie3}`
    );

    cy.get('#state').type('{downarrow}{enter}');
    cy.get('#city').type('{downarrow}{enter}');

    cy.get('#submit').click();

    cy.contains('tr', 'Student Name').should(
      'contain',
      `${testData.firstName} ${testData.lastName}`
    );
    cy.contains('tr', 'Gender').should('contain', testData.randomGender);
    cy.contains('tr', 'Mobile').should('contain', testData.mobileNumber);
    cy.contains('tr', 'Date of Birth').should('contain', testData.birthYear);
    cy.contains('tr', 'Subjects').should('contain', 'Computer');
    cy.contains('tr', 'Picture').should('contain', '');
    cy.contains('tr', 'Address')
      .should('contain', `Name:${testData.firstName} ${testData.lastName}`)
      .and(
        'contain',
        `email:${testData.email}; mobile:${testData.mobileNumber}`
      )
      .and(
        'contain',
        `birthDay:${testData.birthDay}; birthMonth:${testData.birthMonth}`
      )
      .and(
        'contain',
        `birthYear:${testData.birthYear}; Gender:${testData.randomGender}`
      )
      .and(
        'contain',
        `Hobbies:${testData.randomHobbie1},${testData.randomHobbie2},${testData.randomHobbie3}`
      );
    cy.contains('tr', 'State and City').should('contain', 'Uttar');
  });
});
