import fetch from 'node-fetch'

class Mfund{
    constructor(){
    }

    getCode(name){

    }

    getFundByCategory(category){
        
    }

    fundHistory(code){
        return new Promise((done, err) => {
            if(typeof code === 'undefined') {
                err('Scheme Code not provided')
            } else {
                fetch(`https://api.mfapi.in/mf/${code}`)
                    .then(response => {
                        if (response.status === 200) {
                            response.json().then(obj =>{
                                console.log(obj['data'])
                                return obj['data']
                            })

                        } else {
                            err(`Sorry, Bad response code : ` + response.status)
                        }
                    })
                    .then(json => done(json))
                    .catch(error => console.error(`Sorry, Error: ` + error))
            }
        })
    }

}

export default Mfund;