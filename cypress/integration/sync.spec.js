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

    it.only('Uso do find', () => {
        cy.get('#buttonListDOM').click()
        cy.get('#lista li')
            .find('span')
            .should('contain', 'Item 1')

        //cy.get('#lista li')
          //  .find('span')
           // .should('contain', 'Item 2')
        cy.get('#lista li span')
           .should('contain', 'Item 2')
    })

    it.only('Uso do timeout', () => {
        //"Utilizar defaultCommandTimeout: 100" em ultimio caso pois no cypress pois ele pega a execução inteira
        //cy.get('#buttonDelay')
          //  .click()
        //cy.get('#novoCampo', {timeout: 3000})
          //  .should('exist')

        //cy.get('#buttonListDOM').click()
        //cy.wait(5000) utilizar em casos extremo pois ele nao olha a aplixação 
        //cy.get('#lista li span', {timeout: 30000})
         //.should('contain', 'Item 2')    

        cy.get('#buttonListDOM').click()
        cy.get('#lista li span')
            .should('have.length', 1)
        cy.get('#lista li span')
            .should('have.length', 2)
    })

    it.only('Click Retry', () => {
        cy.get('#buttonCount')
            .click()
            .click()
            .should('have.value', '111')
    })

    it.only('Should vs Then', () => {
        cy.get('#buttonListDOM').then($el => {
            //console.log($el)
            expect($el).to.have.length(1)
            //should ele fica sendo executado ao longa da espera
            //then faz acertiva apenas uma vez nao funciona
            //cy.get('#buttonList')
        })
    })
})