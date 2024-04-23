import { useEffect, useMemo, useState } from "react";
import { getVantageData } from "../Utils/util";
import { storeData } from "../Utils/storedata";
import Plot from "react-plotly.js";

function Data() {
  const [apiData, setApiData] = useState<any>();
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
          Stock Data of {LABEL_NAME}
        </h1>
        <div className=" flex justify-center items-center">
          <Plot
            data={[
              {
                x: fetchData.getXData,
                y: fetchData.getY1Data,
                type: "scatter",
                mode: "lines+markers",
                marker: { color: "red" },
              },
            ]}
            layout={{ width: 750, height: 450 }}
          />
        </div>
      </div>
    </>
  );
}

export default Data;
