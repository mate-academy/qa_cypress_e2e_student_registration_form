/// <reference types='cypress' />

it('User can to register account', () => {
    cy.visit('/automation-practice-form');
    
    cy.get('#firstName').type('Ohshit');
    cy.get('#lastName').type('Imsorry');
    cy.get('#userEmail').type('gachimuchi@ukr.net');

    cy.contains('Other').click();

    cy.get('#userNumber').type('8800555353');
    cy.get('#dateOfBirthInput').type('{selectall}').type('05 Sep 1997{enter}');
    cy.get('#subjectsContainer').type('Maths{enter}');

    cy.contains('Sports').click();
    cy.contains('Music').click();

    cy.get('#currentAddress').type('Ulitsya Pushkina Dom Kalatushkina');
    cy.get('#state').type('Haryana{enter}');
    cy.get('#city').type('Karnal{enter}');
    
    cy.get('#submit').click();

    cy.contains('tbody tr', 'Student Name').should('contain', 'Ohshit Imsorry');
    cy.contains('tbody tr', 'Student Email').should('contain', 'gachimuchi@ukr.net');
    cy.contains('tbody tr', 'Gender').should('contain', 'Other');
    cy.contains('tbody tr', 'Mobile').should('contain', '8800555353');
    cy.contains('tbody tr', 'Date of Birth').should('contain', '05 September,1997');
    cy.contains('tbody tr', 'Subjects').should('contain', 'Maths');
    cy.contains('tbody tr', 'Hobbies').should('contain', 'Sports, Music');
    cy.contains('tbody tr', 'Address').should('contain', 'Ulitsya Pushkina Dom Kalatushkina');
    cy.contains('tbody tr', 'State and City').should('contain', 'Haryana Karnal');
});
