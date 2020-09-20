const { resolve, reject, some } = require("cypress/types/bluebird");

it('sem teste, ainda', () => {})

const getSomethig = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(13)
        }, 1000)
    })
}

const system = async () => {
    console.log('init')
    const some = await getSomethig
    console.log(`Something is ${some}`)
    console.log('end')

}


system();
//const getSomethig = callback => {
  //  setTimeout(() => {
        //console.log('respondendo...')
    //    callback(12);
    //}, 1000)
//}

//const system = () => {
  //  console.log('int');
    //getSomethig(some => {
      //  console.log(`Something is ${some}`)
        //console.log('end')
   // });
        
//}

