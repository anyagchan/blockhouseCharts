"use client";
import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import axios from "axios";

ChartJS.register(
  CategoryScale,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const LineChart = () => {
  const [resData, setResData] = useState({ labels: [], data: [] });

  useEffect(() => {
    const getLineData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8000/api/line-chart-data/`
        );
        setResData(res.data);
        console.log(res.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    getLineData();
  }, []);

  const data = {
    labels: resData.labels,
    datasets: [
      {
        data: resData.data,
        fill: false,
        borderColor: "rgb(52, 87, 213)",
        tension: 0.1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
        text: "Line Chart",
      },
    },
    scales: {
      y: {
        title: {
          display: false,
        },
        display: true,
        min: 10,
      },
      x: {
        title: {
          display: false,
          text: "Months",
        },
        display: true,
      },
    },
  };

  return (
    <div
      style={{
        display: "flex",
        height: "90%",
        width: "90%",
        maintainAspectRatio: false,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
