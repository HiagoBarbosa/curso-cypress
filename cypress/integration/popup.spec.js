/// <reference types="cypress"/>

describe('Work with Popup', () => {
    it('Deve preencher o campo de texto', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.get('#frame1').then(iframe => {
            const body = iframe.contents().find('body')
            cy.wrap(body).find('#tfield')
                .type('funciona?')
                .should('have.value', 'funciona?')

        })

    })

    it('Deve verificar se o popup foi invocado', () => {
        cy.visit('https://wcaquino.me/cypress/frame.html')
            cy.get('#otherButton').click()
            cy.on('window:alert', msg =>{
                console.log(msg)
                expect(msg).to.be.equal('Click OK!')
            })
    })
})
