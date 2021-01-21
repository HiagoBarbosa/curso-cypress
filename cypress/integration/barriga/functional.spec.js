/// <reference types="cypress"/>

import loc from '../../support/locators'
import '../../support/commandsContas'

describe('Work with alerts', () => {
    before(() => {
        cy.login('a@a', 'a')
        cy.resetApp()
    })

    it('Should create an account', () => {
        cy.acessarMenuConta()
        cy.inserirConta().type('Conta de teste')
        cy.get(loc.CONTAS.BTN_SAVE).click()
        cy.get(loc.MASSAGE).should('contain', 'Conta inserida com sucesso')
    })

    it.only('Should update an account', () => {
        cy.get(loc.MENU.SETTINGS).click()
        cy.get(loc.MENU.CONTAS).click()
        //cy.get(':nth-child(7) > :nth-child(2) > .fa-edit')
        cy.xpach(loc.CONTAS.XP_BTN_ALTERAR)
        cy.get(loc.CONTAS.NOME).clear().type('Conta alterada')
        cy.get(loc.CONTAS.BTN_SAVE).click()
        cy.get(loc.MASSAGE).should('contain', 'Conta alterada com sucesso')
    })

    it('Should not create an accouont with same name', () => {
        cy.acessarMenuConta()
        cy.get(loc.CONTAS.NOME).type('Conta Alterada')
        cy.get(loc.CONTAS.BTN_SAVE).click()
        cy.get(loc.MASSAGE).should('contain','code 400')
    })
})