"use client";
import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import axios from "axios";

const CandlestickChart = () => {
  const [resData, setResData] = useState([]);

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

  const seriesData = resData.map((item) => ({
    x: new Date(item.x),
    y: [item.open, item.high, item.low, item.close],
  }));

  const series = [
    {
      data: seriesData,
    },
  ];

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
