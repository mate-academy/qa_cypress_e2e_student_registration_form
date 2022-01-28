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
                username: faker.name.firstName() + random,
                lastname: `Asd${random}`,
                email: `test_${random}@mail.com`,
                password: '12345Qwert!',
                phone: random*1000,
                address: faker.address.city(),
                birthdate: '20 Dec 2000',
                subject: 'Computer Science'
            };
        },
    });
};

