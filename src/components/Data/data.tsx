import { useEffect, useMemo, useState } from "react";
import { getVantageData } from "../Utils/util";
import { storeData } from "../Utils/storedata";
import { CategoryScale, Chart as Chartjs } from "chart.js/auto";
import { Line } from "react-chartjs-2";

Chartjs.register(CategoryScale);

function Data() {
  const [apiData, setApiData] = useState([]);
  const compName = "AMZN";
  const fetchData = useMemo(() => storeData(apiData), [apiData]);
  useEffect(() => {
    getVantageData(compName).then((data) => {
      setApiData(data);
      console.log(data);
    });
  }, []);

  return (
    <>
      <div className=" max-[880px]:w-[30rem] max-[880px]:h-[20rem] w-[55rem] h-[35rem] flex flex-col gap-4 bg-white rounded-2xl shadow-xl shadow-white/15">
        <h1 className=" font-mono font-bold text-3xl text-center m-4">
          Stock Data
        </h1>
        <Line
          data={{
            labels: fetchData.getXData,
            datasets: [
              {
                label: "AMAZON",
                data: fetchData.getYData,
              },
            ],
          }}
        />
      </div>
    </>
  );
}

export default Data;
