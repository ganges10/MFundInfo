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
~~~~
