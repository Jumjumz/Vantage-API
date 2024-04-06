import { useEffect, useMemo, useState } from "react";
import { getVantageData } from "../Utils/util";
import { storeData } from "../Utils/storedata";
import { CategoryScale, Chart as Chartjs } from "chart.js/auto";
import { Line } from "react-chartjs-2";

Chartjs.register(CategoryScale);

function Data() {
  const [apiData, setApiData] = useState([""]);
  const compName = "AMZN";
  const LABEL_NAME = "AMAZON";
  const fetchData = useMemo(() => storeData(apiData), [apiData]);

  useEffect(() => {
    getVantageData(compName).then((data) => {
      setApiData(data);
      console.log(data);
    });
  }, []);

  return (
    <>
      <div className=" respo divSize pl-4 pr-4 flex flex-col gap-4 bg-white rounded-2xl shadow-xl shadow-white/15">
        <h1 className=" font-mono font-bold text-3xl text-center m-4">
          Stock Data
        </h1>
        <Line
          data={{
            labels: fetchData.getXData.slice(1, 25),
            datasets: [
              {
                label: LABEL_NAME,
                data: fetchData.getYData.slice(1, 200),
              },
            ],
          }}
        />
      </div>
    </>
  );
}

export default Data;
