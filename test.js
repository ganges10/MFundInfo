import mFund from "./index.js";


let nav = new mFund()

//testing the fundHistory feature
//If valid scheme code given returns the historical data
//If invalid scheme code or no scheme code is mentioned it shows error message
nav.fundHistory("108272").then(obj =>{
    console.log(obj)
})