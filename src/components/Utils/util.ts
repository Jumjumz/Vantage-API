

const VITE_API_KEY = import.meta.env.VITE_VANTAGE_KEY;
// const VITE_MY_KEY = import.meta.env.VITE_VANTAGE_MYKEY;

export const getVantageData = async(symbol:string) => {
    const response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${VITE_API_KEY}`);
    const data = await response.json();
    return data;
}