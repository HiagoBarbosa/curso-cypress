const { inRange } = require("cypress/types/lodash")
const { it } = require("mocha")

it('nada agora', function(){ })

//const soma = function (a, b){
  //  return a + b
//}

//const soma = (a, b) => {
  //  return a + b
//}

//const soma = (a, b) => a + b

//const soma = a => a + a

//const soma = () => 5+5

console.log(soma(1,4))

it('a function test...', function () {
    console.log('Function', this)
})

it('an arrow test...', () => {
    console.log('Arrow', this)
})