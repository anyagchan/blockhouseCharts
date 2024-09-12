"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import axios from "axios";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const CandlestickChart = () => {
  const [resData, setResData] = useState([]);

  // GET CHART DATA
  useEffect(() => {
    const getCandlestickData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8000/api/candlestick-data/`
        );
        setResData(res.data.data);
        console.log(res.data.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    getCandlestickData();
  }, []);

  // REFORMAT CHART DATA
  const seriesData = resData.map((item) => ({
    x: new Date(item.x),
    y: [item.open, item.high, item.low, item.close],
  }));

  const series = [
    {
      data: seriesData,
    },
  ];

  // SET CHART OPTIONS
  const options = {
    chart: {
      type: "candlestick",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      candlestick: {
        colors: {
          upward: "rgba(54, 162, 235, 0.5)",
          downward: "rgba(52, 87, 213, 0.5)",
        },
        borderColors: {
          upward: "rgb(54, 162, 235)",
          downward: "rgb(52, 87, 213)",
        },
      },
    },
    xaxis: {
      type: "datetime",
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        position: "relative",
      }}
    >
      <ReactApexChart
        options={options}
        series={series}
        type="candlestick"
        width="100%"
      />
    </div>
  );
};

export default CandlestickChart;
