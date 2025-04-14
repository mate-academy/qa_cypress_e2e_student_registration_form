/// <reference types='cypress' />

describe('Student Registration page', () => {
  // eslint-disable-next-line no-unused-vars
  let user;
  const randomNumber = Math.floor(Math.random() * 1000);
  const userAdress = `Ternopil${randomNumber}`;
  // const getRandomDate = () => {
  //   const year = Math.floor(Math.random() * (2023 - 1980) + 1980);
  //   const month = Math.floor(Math.random() * 12) + 1;
  //   const day = Math.floor(Math.random() * 28) + 1;
  //   const months = [
  //     'January', 'February', 'March', 'April', 'May', 'June',
  //     'July', 'August', 'September', 'October', 'November', 'December'
  //   ];
  //   const formattedDate = `${day.toString().padStart(2, '0')} ${months[month - 1]}, ${year.toString().padEnd(4, ' ')}`;
  //   return formattedDate;
  // };
  // const randomDate = getRandomDate();
  before(() => {
    cy.task('generateUser').then((generateUser) => {
      user = generateUser;
    });
  });

  it('should to register', () => {
    cy.visit('/');
    cy.findByPlaceholder('First Name').type(user.firstName);
    cy.findByPlaceholder('Last Name').type(user.lastName);
    cy.findByPlaceholder('name@example.com').type(user.email);
    cy.contains('.custom-control-label', user.gender).click();
    cy.findByPlaceholder('Mobile Number').type(user.phone);
    cy.get('#dateOfBirthInput').type('{selectAll}28 Dec 2008{enter}');
    // cy.get('#dateOfBirthInput').type('{selectAll}' + randomDate + '{enter}');
    cy.get('#subjectsContainer').type('L{downArrow}{enter}');
    cy.contains('.custom-control-label', user.hobbies).click();
    cy.findByPlaceholder('Current Address').type(userAdress);
    cy.get('#state').type('E{enter}');
    cy.get('#city').type('E{enter}');
    cy.get('#submit').click();

    cy.contains('tr', 'Student Name')
      .should('contain', user.firstName)
      .and('contain', user.lastName);
    cy.contains('tr', 'Student Email')
      .should('contain', user.email);
    cy.contains('tr', 'Gender')
      .should('contain', user.gender);
    cy.contains('tr', 'Mobile')
      .should('contain', user.phone);
    cy.contains('tr', 'Date of Birth')
      .should('contain.text', '28 December,2008');
    // cy.contains('tr', 'Date of Birth')
    //   .should('contain', randomDate);
    cy.contains('tr', 'Subjects')
      .should('contain', 'Biology');
    cy.contains('tr', 'Hobbies')
      .should('contain', user.hobbies);
    cy.contains('tr', 'Address')
      .should('contain', userAdress);
    cy.contains('tr', 'State and City')
      .should('contain', 'Uttar Pradesh Merrut');
  });
});
