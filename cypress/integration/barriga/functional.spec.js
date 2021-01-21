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

    it('Should update an account', () => {
        cy.get(loc.MENU.SETTINGS).click()
        cy.get(loc.MENU.CONTAS).click()
        //cy.get(':nth-child(7) > :nth-child(2) > .fa-edit')
        cy.xpach(loc.CONTAS.FN_XP_BTN_ALTERAR('Conta de teste')).click()
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

    it('Should create a transaction', () => {
        cy.get(loc.MENU.MOVIMENTACAO).click()
        cy.get(loc.MOVIMENTACAO.DESCRICAO).type('Desc')
        cy.get(loc.MOVIMENTACAO.VALOR).type('123')
        cy.get(loc.MOVIMENTACAO.INTERESSADO).type('Inter')
        cy.get(loc.MOVIMENTACAO.CONTA).select('Conta Alterada')
        cy.get(loc.MOVIMENTACAO.STATUS).click()
        cy.get(loc.MOVIMENTACAO.BTN_SALVAR).click()
        cy.get(loc.MESSAGE).should('contain', 'sucesso')

        cy.get(loc.EXTRATO.LINHA).should('have.length', 7)
        cy.xpath(loc.EXTRATO.FN_XP_BUSCA_ELEMENTO('Desc', '123')).should('exist')
    })

    it('Should get balance', () => {
        cy.get(loc.MENU.HOME).click()
        cy.xpath(loc.SALDO.FN_XP_SALDO_CONTA('Conta Alterada')).should('contain', 123,00)
    })

    it('Should remova a transaction', () => {
        cy.get(loc.MENU.EXTRATO).click()
        cy.get(loc.EXTRATO.FN_XP_REMOVER_ELEMENTO('Desc')).click()
        cy.get(loc.MESSAGE).should('contain', 'sucesso')

    })
})