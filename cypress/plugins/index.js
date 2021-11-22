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

const { random } = require("faker");
const faker = require("faker");

module.exports = (on, config) => {
    on("task", {
        newUser() {
            user = {
              firstName: faker.name.firstName() + `${Math.round(Math.random() * 10000)}`,
              lastName: faker.name.lastName() + `${Math.round(Math.random() * 10000)}`,
              userEmail: faker.internet.email(),
              userNumber: `${Math.round(Math.random() * 1000000000)}`,
              address: Math.random().toString(36).substr(2, 15),
              age: `${Math.round(Math.random() * 100)}`,
              salary: `${Math.round(Math.random() * 10000)}`,

              firstName1: faker.name.firstName(),
              lastName1: faker.name.lastName(),
              userEmail1: faker.internet.email(),
              age1: `${Math.round(Math.random() * 100)}`,
              salary1: `${Math.round(Math.random() * 10000)}`,

              firstName2: faker.name.firstName(),
              lastName2: faker.name.lastName(),
              userEmail2: faker.internet.email(),
              age2: `${Math.round(Math.random() * 100)}`,
              salary2: `${Math.round(Math.random() * 10000)}`,

              firstName3: faker.name.firstName(),
              lastName3: faker.name.lastName(),
              userEmail3: faker.internet.email(),
              age3: `${Math.round(Math.random() * 100)}`,
              salary3: `${Math.round(Math.random() * 10000)}`,
            };
            return user;

        },
    });
};
