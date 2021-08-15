describe('Filling in the form', () => {
    before('Opening site', () => {
        cy.visit('https://demoqa.com/automation-practice-form');
    });

    it('Practice Form', () => {
        cy.get('#firstName').type(`Nina`);
        cy.get('#lastName').type(`Simone`);
        cy.get('#userEmail').type(`arizona99@ukr.net`);
        cy.get('.custom-control-label').contains('Female').click();
        cy.get('#userNumber').type(`0123456789`);
        cy.get('#dateOfBirthInput').type(`{selectall}`).type('01 Jun 1990{enter}');
        cy.get('#subjectsContainer').type('En').contains('div', 'English').click({ force: true });
        cy.get('.custom-control-label').contains('Sports').click();
        cy.get('.custom-control-label').contains('Reading').click();
        cy.get('.custom-control-label').contains('Music').click();
        cy.get('#currentAddress').type(`Poland, Warsaw`);
        cy.get('#state').click().contains('Rajasthan').click();
        cy.get('#city').click().contains('div', 'Jaipur').click({ force: true });

        cy.get('#submit').click();

        cy.contains('tbody tr', 'Student Name').should('contain.text', 'Nina Simone');
        cy.contains('tbody tr', 'Student Email').should('contain.text', 'arizona99@ukr.net');
        cy.contains('tbody tr', 'Gender').should('contain.text', 'Female');
        cy.contains('tbody tr', 'Date of Birth').should('contain.text', '01 June,1990');
        cy.contains('tbody tr', 'Subjects').should('contain.text', 'English');
        cy.contains('tbody tr', 'Hobbies').should('contain.text', 'Sports, Reading, Music');
        cy.contains('tbody tr', 'Address').should('contain.text', 'Poland, Warsaw');
        cy.contains('tbody tr', 'State and City').should('contain.text', 'Rajasthan Jaipur');

    });
});
