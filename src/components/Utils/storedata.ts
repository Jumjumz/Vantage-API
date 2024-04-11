

export const storeData = (apiData:any) => {
    const INDEX_SEARCH  = "Time Series (Daily)";
    const getXData = [''];
    const getY1Data = [''];
    const getY2Data = [''];
    const getY3Data = [''];
    const getY4Data = [''];

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