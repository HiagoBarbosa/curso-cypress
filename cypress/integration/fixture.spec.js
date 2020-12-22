/// <reference types="cypress"/>

describe('Fixtures tests', () => {
    it('Get data form fixture file', function () {
        cy.visit('https://wcaquino.me/cypress/componentes.html')

        cy.fixture('userData').as('usuario').then(() => {
            cy.get('#formNome').type(this.usuario.nome)
            cy.get('#formSobrenome').type(this.usuario.sobrenome)
            cy.get(`[name=formSexo][value=${this.ususario.sexo}]`).click()
            cy.get(`[name=formComidaFavorita][value=${this.usuario.comida}]`).click()
            cy.get('#formEscolaridade').select(this.usuario.escolaridade)
            cy.get('formEsport').select(this.usuario.esporte)
            cy.get('#formCadastrar')
            cy.get('#resultado > :nth-child(1)').should('contain','Cadastrado!')
        })
    })
})