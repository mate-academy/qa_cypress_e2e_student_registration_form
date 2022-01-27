/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
const faker = require('faker');

module.exports = (on, config) => {
    on('task', {
        freshUser() {
            const random = Math.round(Math.random() * 1000000);

            return {
                firstname: faker.name.firstName(),
                email: `test_${random}@mail.com`,
                mobile: 1275648374 + random,
                lastname: faker.name.lastName(),
                address: faker.address.city() + ', ' + faker.address.streetName()
            };
        },
    });
};

