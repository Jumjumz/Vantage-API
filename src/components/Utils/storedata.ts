
interface ApiData {
    "Time Series (Daily)":{
        [key: string] : {
            "1. open": string;
            "2. high": string;
            "3. low": string;
            "4. close" : string;
        }
    }
}


export const storeData = (apiData:ApiData) => {
    const INDEX_SEARCH  = "Time Series (Daily)";
    const getXData : string[] = [];
    const getY1Data : string[] = [];
    const getY2Data : string[] = [];
    const getY3Data : string[] = [];
    const getY4Data : string[] = [];

    for (const key in apiData[INDEX_SEARCH]) {
        getXData.push(key);
        getY1Data.push(apiData[INDEX_SEARCH][key]["1. open"]);
        getY2Data.push(apiData[INDEX_SEARCH][key]["2. high"]);
        getY3Data.push(apiData[INDEX_SEARCH][key]["3. low"]);
        getY4Data.push(apiData[INDEX_SEARCH][key]["4. close"]);
        console.log(typeof (apiData[INDEX_SEARCH]));
    }

    return {getXData, getY1Data, getY2Data, getY3Data, getY4Data};
}