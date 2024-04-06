
export const storeData = (apiData:object | any) => {
    const getXData = [''];
    const getYData = [''];
    for (const key in apiData["Time Series (Daily)"]) {
        getXData.push(key);
        getYData.push(apiData["Time Series (Daily)"][key]["2. high"]);
        console.log(typeof apiData["Time Series (Daily)"]);
    }
    return {getXData, getYData};
};