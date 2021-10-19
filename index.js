import fetch from 'node-fetch'

class Mfund{
    constructor(){

    }

    getCode(name){

    }

    getFundByCategory(category){
        
    }
    fundDetail(code){
        return new Promise((done, err) => {
            if(typeof code === 'undefined') {
                err('Scheme Code not provided')
            } else {
                fetch(`https://api.mfapi.in/mf/${code}`)
                    .then(response => {
                        if (response.status === 200) {
                            return this.getDataPart(response,'meta')

                        } else {
                            err(`Sorry, Bad response code : ` + response.status)
                        }
                    })
                    .then(json => done(json))
                    .catch(error => console.error(`Sorry, Error: ` + error))
            }
        })
    }

    async getDataPart(response,part){
        const data=await response.json();
        return data[part];
    }

    fundHistory(code){
        return new Promise((done, err) => {
            if(typeof code === 'undefined') {
                err('Scheme Code not provided')
            } else {
                fetch(`https://api.mfapi.in/mf/${code}`)
                    .then(response => {
                        if (response.status === 200) {
                            return this.getDataPart(response,'data')

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