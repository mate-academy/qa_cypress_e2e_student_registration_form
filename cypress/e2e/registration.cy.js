/// <reference types='cypress' />

describe('Student Registration page', () => {
  const user = {
    firstName: ["John", "Konor", "Will", "Illia", "Wolter"],
    lastNames: ["Smith", "Wick", "Danirus", "Brown", "White", "Miller"],
    subjects: ["Math", "Science", "English", "History", "Art"],    
    address: ["Khreshchatyk", "Golden", "Poshaina"]
  }

  const randomFirstName = user.firstName[Math.floor(Math.random() * user.firstName.length)];
  const randomLastName = user.lastNames[Math.floor(Math.random() * user.lastNames.length)];
  const randomIndex = Math.floor(Math.random() * 3);
  const randomHobby = Math.floor(Math.random() * 3) + 1;
  const randomSubject = user.subjects[Math.floor(Math.random() * user.subjects.length)];
  const randomAddress = `${user.address[Math.floor(Math.random() * user.address.length)]} 69`

  const email = `${randomFirstName.toLowerCase()}${randomLastName.toLowerCase()}@test.com`
  const phoneNumber ="0" + Math.floor(Math.random() * 1000000000).toString().padStart(9, "0");

  before(() => {
    cy.visit('/');
  });

  it('should allow to register new user', () => {
    cy.viewport(550, 750);

    cy.findByPlaceholder('First Name')
      .type(randomFirstName);

    cy.findByPlaceholder('Last Name')
     .type(randomLastName);

    cy.get('#userEmail').type(email);
    
    const genderList = cy.get("#genterWrapper > .col-md-9 > :nth-child(1), #genterWrapper > .col-md-9 > :nth-child(2), #genterWrapper > .col-md-9 > :nth-child(3)");
    genderList.eq(randomIndex).click();

    cy.findByPlaceholder('Mobile Number').type(phoneNumber);

    cy.get('#dateOfBirthInput').click()
      .get('.react-datepicker__navigation--previous').click().click()
      .get('.react-datepicker__month-select').select('September')
      .get('.react-datepicker__year-select').select('2000')
      .get('.react-datepicker__day--011').click();

    cy.get(".subjects-auto-complete__value-container").type(`${randomSubject}{enter}`)

    cy.get(`#hobbiesWrapper > .col-md-9 > :nth-child(${randomHobby})`).click();

    cy.findByPlaceholder('Current Address').type(randomAddress);
    cy.get("#state > .css-yk16xz-control")
      .click()
      .get("#react-select-3-option-2")
      .click();
    
    cy.focused().type("{enter}");

    cy.get("#closeLargeModal").click();
    
    cy.get('#example-modal-sizes-title-lg').should('contain.text', 'Thanks for submitting the form');
  });
});
