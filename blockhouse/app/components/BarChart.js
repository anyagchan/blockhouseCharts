"use client";
import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import axios from "axios";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const [resData, setResData] = useState({ labels: [], data: [] });

  // GET CHART DATA
  useEffect(() => {
    const getBarData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8000/api/bar-chart-data/`
        );
        setResData(res.data);
        console.log(res.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    getBarData();
  }, []);

  // SETUP CHART DATASETS AND LABELS
  const data = {
    labels: resData.labels,
    datasets: [
      {
        label: "Data",
        data: resData.data,
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        borderColor: "rgba(54, 162, 235, 0.85)",
        borderWidth: 2,
      },
    ],
  };

  // SET CHART OPTIONS
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
        text: "Bar Chart",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
        },
      },
      x: {
        title: {
          display: false,
        },
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
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
