/// <reference types="cypress"/>

it('A external test...', () =>{

})

describe('Should group tests...', () =>{
    describe('Should group more specific tests...', () => {
        it('A external test...', () =>{

        })
    })

    describe('Should group more specific tests 2...', () => {
        it.only('A external test 2...', () =>{

        })
    })

    it.skip('A internal test...', () =>{

    })  
})