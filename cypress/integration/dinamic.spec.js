/// <reference types="cypress"/>

describe('Dinamic test', () => {
    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        })
        const foods = ['Carne', 'Frango', 'Pizza', 'Vegetariano']

        beforeEach(food => {
            it(`Cadastro com comida ${food}`, () => {
                cy.get('#formNome').type('usuario')
                cy.get('#formSobrenome').type('qualquer')
                cy.get(`[name=formSexo][value=F]`).click()
                cy.xpath(`//label[contains(.,'${food}')]/preceding-sibling::input`)
                cy.get('#formEscolaridade').select('Doutorado')
                cy.get('formEsport').select('corrida')
                
                cy.get('#formCadastrar')
                cy.get('#resultado > :nth-child(1)').should('contain','Cadastrado!')
            
        })
    })
    it.only('Deve selecionar todos usando o each', () => {
        cy.get('#formNome').type('usuario')
        cy.get('#formSobrenome').type('qualquer')
        cy.get(`[name=formSexo][value=F]`).click()

        cy.get('[name=formComidaFavorita]').each($el => {
            //$el.click()
            if($el.val() != 'vegetariano')
            cy.wrap($el).click()
        })

        cy.get('#formEscolaridade').select('Doutorado')
        cy.get('formEsport').select('corrida')
        
       /*  cy.get('#formCadastrar')
        cy.get('#resultado > :nth-child(1)').should('contain','Cadastrado!') */
        //cy.clickAlert('#FormCadastro', 'Tem certeza que voce e vegetariano?')
    })
})