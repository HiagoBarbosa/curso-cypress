// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

import loc from "./locators"


Cypress.Commands.add('clickAlert', (locator, message) =>{
    cy.get('#alert').click()
    cy.on('window:alert', msg =>{
        expect(msg).to.be.equal('Alert Simples')
    })
})

Cypress.Commands.add('login', (user, passwd) => {
    cy.visit('https://barriga.wcaquino.me/')
    cy.get(loc.LOGIN.USER).type('a@a')
    cy.get(loc.LOGIN.PASSWORD).type('a')
    cy.get(loc.LOGIN.BTN_LOGIN).click()
    cy.get(loc.MASSAGE).should('contain', 'Bem vindo')
})

Cypress.Commands.add('resetApp', () => {
    cy.get(loc.MENU.SETTINGS).click()
    cy.get(loc.MENU.RESET).click()
})