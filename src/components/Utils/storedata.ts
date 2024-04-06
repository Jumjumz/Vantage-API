
export const storeData = (apiData:any) => {
    const INDEX_SEARCH = "Time Series (Daily)";
    const getXData = [''];
    const getYData = [''];
    for (const key in apiData[INDEX_SEARCH]) {
        getXData.push(key);
        getYData.push(apiData[INDEX_SEARCH][key]["2. high"]);
        console.log(typeof (apiData[INDEX_SEARCH]));
    }
    return {getXData, getYData};
}