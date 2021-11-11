# MFundInfo
MfundInfo is a package that lets you retrieve mutual fund related data.

## Usage
1. To install the package, use the following command:<br/>
  ~~~~ {.html}
  npm i mfundinfo
  ~~~~
2. To use the package in your javascript file, use the following import statement:<br/>
  ~~~~ {.html}
  import mfund from mfundinfo
  ~~~~
## Functionalities
* ```getSchemeCode(schemeName)``` function returns the scheme code for a given scheme name.
* ```getAllFundFamilies()``` function returns the list of all active fund families
*  ```getCategoryBySchemeType(type)``` function returns the category based on the scheme type. Pass 1 as the argument if you wish to specify <i>Open ended schemes</i>, 2 as an argument if your choice is <i>Close Ended Scheme</i>, 3 if you want to go with <i>Interval Fund Schemes</i>. If no argument is passed, by default, it will consider <i>All scheme types</i>.
*  ```getSchemeByFamily(family)``` function returns the list of active schemes in the specified fund family.
*  ```fetchNAVbyCode(date,code)``` function returns the net asset value of the specified scheme on the specified date.
*  ```latestNav(code)``` function returns the latest net asset value for the specified scheme.
*  ```fundCalculator(itype,pr,rate,years)``` takes in the type of investement which can be specified as <i>LS</i> for lumpsum investement or <i>SIP</i> in case of Systematic Investement Plan. Along with the type, the amount invested, rate of returns expected and furation have to be specified. The output is an approximation of the expected future value and totally depends on the market values.
* ```goalSIPCalculator(goal,rate,years)``` helps provide an approximate monthly investement amount to attain a goal amount with an expected rate of returns and the duration for which user is willing to invest. The output is an approximation and may vary depending on the market value.

## Example
~~~~{.html}
import mFund from mfundinfo;


let nav = new mFund()

nav.getSchemeCode("ICICI Prudential Floating Interest Fund Plan C - Dividend Daily").then(obj=>{
    console.log(obj)
})

nav.getAllFundFamilies().then(obj=>{
    console.log(obj)
})

nav.getCategoryBySchemeType(1).then(obj=>{
    console.log(obj)
})

nav.fetchNAVbyCode("01-Jan-2015","108272").then(obj=>{
    console.log(obj)
})

nav.latestNav("108272").then(obj=>{
    console.log(obj)
})

console.log(nav.fundCalculator("SIP",6679,15,20))

console.log(nav.goalSIPCalculator(10000000,15,20))
~~~~
