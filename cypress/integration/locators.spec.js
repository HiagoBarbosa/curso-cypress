/// <reference types="cypress"/>

describe('Work with basic elements', () => {
    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() => { 
        cy.reload()
    })

    it('using jquery selector', () => {
        cy.get(':nth-child(1) > :ntha-child(3) > [type="button"]')
        cy.get('table#tableausuarios tdoby > tr:eq(0) td:nth-child(3)')
        cy.get("[onclick ='Francisco]'")
        cy.get('#tabelaUsuarios td:contains(\'Doutorado\'):eq(0) ~ td:eq(3) > input')
        cy.get('#tabelaUsuarios tr:contains(\'Doutorado\'):eq(0) td:eq(6) > input')
    })

    it('using xpath', () => {
        cy.xpath('//input[contains(@onclick,\´Francisco\´)]')
        cy.xpath("//table[@id='tabelaUsuarios']//td[contains(.,'Francisco')]/..//input[@type='text']")
        cy.xpath("//td[contains(.,'Usuario A')]/following-sibling::td[contains(.,'Mestrado')]/..//input[@type='text']")
    })

    it('using spath', () =>{
        cy.xpath('//input')
        ///cy.xpath('//tabela[@id='tabelaUsuarios']//td[contains(.,'Francisco')]')
    } )
})

