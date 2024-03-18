
export const storeData = (apiData:any) => {
    const getXData = [''];
    const getYData = [];
    for (let key in apiData["Time Series (Daily)"]) {
        getXData.push(key);
        getYData.push(apiData["Time Series (Daily)"][key]["1. open"])
    }
    return {getXData, getYData};
};