/// <reference types="cypress"/>

describe('Work with alerts', () => {
    it('navigates', () => {
        cy.visit('https://apple.com')
      })
      
      // split visiting different origin in another test
      it('navigates to new origin', () => {
        cy.visit('https://google.com')      // yup all good
      })
})