import mFund from "./index.js";
/*mFund.mfundDetail("119551").then(obj => {  
    console.log(obj)
}).catch(err => {
    console.log(err)
})*/
let nav = new mFund()
nav.fundHistory("119551").then(obj =>{
    console.log(obj)
})
