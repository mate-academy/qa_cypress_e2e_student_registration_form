cy.get('td:contains("Student Name") + td')
  .should('contain.text', 'John Doe');
cy.get('td:contains("Student Email") + td')
  .should('contain.text', 'johndoe@example.com');
cy.get('td:contains("Gender") + td')
  .should('contain.text', 'Male');
cy.get('td:contains("Mobile") + td')
  .should('contain.text', '1234567890');
cy.get('td:contains("Date of Birth") + td')
  .should('contain.text', '01 January,1990');
cy.get('td:contains("Subjects") + td')
  .should('contain.text', 'Maths, Physics');
cy.get('td:contains("Hobbies") + td')
  .should('contain.text', 'Sports, Reading');
cy.get('td:contains("Address") + td')
  .should('contain.text', '123 Cypress Street');
cy.get('td:contains("State and City") + td')
  .should('contain.text', 'NCR Delhi');
