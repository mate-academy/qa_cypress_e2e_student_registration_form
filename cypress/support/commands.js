Cypress.Commands.add('inputByAttribute', (attribute, attributeValue) => {
    cy.get(`[${attribute} = ${attributeValue}]`)
});
