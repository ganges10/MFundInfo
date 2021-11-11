import fetch from 'node-fetch'

class Mfund{
    async getData(url){
        let response = await fetch(url, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "latest-mutual-fund-nav.p.rapidapi.com",
                "x-rapidapi-key": "4f4f0b5e1emsh9f8c622c470e01fp1d9306jsn639168c632a8"
            }
        });
        let data = await response.json();
        return data;
    }

    async getSchemeCode(schemeName){
        if(typeof schemeName == "undefined"){
            return "Scheme Name not Specified!"
        }

        const data = await this.getData(`https://latest-mutual-fund-nav.p.rapidapi.com/fetchLatestNAV?SchemeName=${schemeName}`);
        if(data.length == 0){
            return "Invalid Scheme Name";
        }
        else{
            return data[0]['Scheme Code'];
        }

    }

    async getAllFundFamilies(){
        const result= await this.getData("https://latest-mutual-fund-nav.p.rapidapi.com/fetchAllMutualFundFamilies")
        return result;
    }

    async getCategoryBySchemeType(type){
        let scheme=""
        switch(type){
            case 1:
                scheme ="Open Ended Schemes"
                break;
            case 2:
                scheme="Close Ended Schemes"
                break;
            case 3:
                scheme="Interval Fund Schemes"
                break;
            default:
                scheme="All"
        }
        let data = await this.getData(`https://latest-mutual-fund-nav.p.rapidapi.com/fetchSchemeCategoriesBySchemeType?SchemeType=${scheme}`)
        let result=[]
        for(let i=0;i<data.length;i++){
            result[i]=data[i].substring(data[i].indexOf('(')+1,data[i].indexOf(')'))
        }
        return result;   
    }

    async getschemebyFamily(family){
        if(typeof family == "undefined"){
            return "Fund Family to be Mentioned!"
        }
        let data = await this.getData(`https://latest-mutual-fund-nav.p.rapidapi.com/fetchLatestNAV?MutualFundFamily=${family}`);
        let result=[];
        for(let i=0;i<data.length;i++){
            result[i]={"Scheme Code":data[i]['Scheme Code'],"Scheme Type":data[i]['Scheme Type'],"Scheme Name":data[i]['Scheme Name']};
        } 
        return result;
    }

    async fetchNAVbyCode(date,code) {
        if(typeof date == "undefined" || typeof code == "undefined"){
            return "Paramter missing!";
        }
        let data = await this.getData(`https://latest-mutual-fund-nav.p.rapidapi.com/fetchHistoricalNAV?Date=${date}&SchemeCode=${code}`);
        if(data.length==0){
            return "Inavlid Date/Code";
        }
        return {"Scheme Name":data[0]['Scheme Name'],"Net Asset Value":data[0]['Net Asset Value']};
    }

    async latestNav(code){
        if(typeof code== "undefined"){
            return "Code not Specified";
        }
        let data= await this.getData(`https://latest-mutual-fund-nav.p.rapidapi.com/fetchLatestNAV?SchemeCode=${code}`)
        if(data.length==0){
            return "Invalid Scheme Code";
        }
        return {"Scheme Name": data[0]['Scheme Name'],"NAV":data[0]['Net Asset Value'],"Scheme Type":data[0]['Scheme Type']}
    }

    fundCalculator(itype,pr,rate,years){
        let futureVal=0;
        if(itype == "LS"){
            futureVal = pr * (1 + rate/100)**years
        }
        else if(itype == "SIP"){
            let i = rate/100/12
            let n= years *12
            futureVal = pr *((1+i)**n-1)/i * (i+1)
        }
        else return "Invalid Investment Type!"

        return Math.round(futureVal);
    }
    goalSIPCalculator(goal,rate,years){
        let i = rate/100/12
        let n = years*12
        let monthlySIP = goal/(((1+i)**n-1)/i * (i+1))
        return Math.round(monthlySIP);
    }
}

export default Mfund;