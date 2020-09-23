/// <reference types="cypress"/>

describe('Esperas...', () => {
    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() => { 
        cy.reload()
    })

    it('Deve aguardar element oestar disponivel', () => {
        cy.get('#novoCampo')
            .should('not.exist')
        cy.get('#buttonDelay')
            .click()
        cy.get('#novoCampo')
            .should('not.exist')
        cy.get('#novoCampo')
            .should('exist')
        cy.get('#novoCampo')
            .type('Funciona')
    })

    it.only('Deve fazer retrys', () => {
        cy.get('#buttonDelay')
            .click()
        cy.get('#novoCampo')
            .should('exist')
            .type('Funciona')
    })

    it.only('Uso do fins', () => {
        cy.get('#buttonList').click()
        cy.get('#lista li')
            .find('span')
            .should('contain', 'Item 1')

        //cy.get('#lista li')
          //  .find('span')
           // .should('contain', 'Item 2')

        cy.get('#lista li span')
           .should('contain', 'Item 2')
    })
})