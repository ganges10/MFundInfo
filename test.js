import mFund from "./index.js";


let nav = new mFund()
/*
nav.getSchemeCode("ICICI Prudential Floating Interest Fund Plan C - Dividend Daily").then(obj=>{
    console.log(obj)
})

nav.getAllFundFamilies().then(obj=>{
    console.log(obj)
})

nav.getCategoryBySchemeType(1).then(obj=>{
    console.log(obj)
})*/


/*
nav.fetchNAVbyCode("01-Jan-2015","108272").then(obj=>{
    console.log(obj)
})
*/

/*
nav.latestNav("108272").then(obj=>{
    console.log(obj)
})*/

//console.log(nav.fundCalculator("SIP",6679,15,20))
console.log(nav.goalSIPCalculator(10000000,15,20))