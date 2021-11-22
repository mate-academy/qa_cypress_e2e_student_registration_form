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
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
}

const faker = require("faker");

module.exports = (on, config) => {
    on("task", {
        freshUser() {
            user = {
                firstName: faker.name.firstName(),
                lastName: faker.name.lastName(),
                email: faker.internet.email(),
                password: "SuperSecret",
                phone: faker.datatype.number(),
                currentAdress: faker.lorem.words(3),
                age: faker.datatype.number({ 'min': 10, 'max': 50 }),
                salary: faker.datatype.number({ 'min': 1000, 'max': 9000 }),
                department: "QA",
            };
            return user;
        },
    });
};