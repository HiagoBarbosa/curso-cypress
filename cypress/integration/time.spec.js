/// <reference types="cypress"/>

describe('Work with alerts', () => {
    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    it('Goin back to the past', () => {
  /*       cy.get('#buttonNow').click()
        cy.get('#resultado > span').should('contain', '12/01/2021')

        cy.clock()
        cy.get('#buttonNow').click()
        cy.get('#resultado > span').should('contain', '12/01/2021') */

        const dt = new Date(2012, 3, 10, 15, 23, 50)
        cy.clock(dt.getTime())
        cy.get('#buttonNow').click()
        cy.get('#resultado > span').should('contain', '10/04/2012')
    })

    it.only('Goes to the future', () => {
        cy.get('#buttonTimePassed').click()
        cy.get('#resultado > span').should('contain', '15731')
        cy.get('#resultado > span').invoke('text').should('gt', 1573179702885)

        cy.clock()
        cy.get('#buttonTimePassed').click()
      /*   cy.get('#resultado > span').invoke('text').should('lte', 0)
        cy.wait(1000)

        cy.get('#buttonTimePassed').click()
        cy.get('#resultado > span').invoke('text').should('lte', 1000)
 */
        cy.tick(5000)
        cy.get('#buttonTimePassed').click()
        cy.get('#resultado > span').invoke('text').should('gte', 5000)
    })

    it.only('Goes to the future', () => {
        cy.get('#buttonTimePassed').click()
        cy.get('#resultado > span').should('contain', '15731')
        cy.get('#resultado > span').invoke('text').should('gt', 15731)

        cy.clock()
        cy.get('#buttonTimePassed').click()
        cy.get('#resultado > span').invoke('text').should('lte', 0)
        cy.tick(1000)
        cy.get('#buttonTimePassed').click()
        cy.get('#resultado > span').invoke('text').should('lte', 5000)

        cy.tick(5000)
        cy.get('#buttonTimePassed').click()
        cy.get('#resultado > span').invoke('text').should('gte', 5000)
    })
})