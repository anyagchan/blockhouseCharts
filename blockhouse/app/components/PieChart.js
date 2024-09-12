"use client";
import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  PieController,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Pie } from "react-chartjs-2";
import axios from "axios";

ChartJS.register(PieController, ArcElement, Tooltip, Legend);

const PieChart = () => {
  const [resData, setResData] = useState({ labels: [], data: [] });

  const CHART_COLORS = {
    Red: "rgb(255, 99, 132, 0.75)",
    Orange: "rgb(255, 159, 64, 0.75)",
    Yellow: "rgb(255, 205, 86, 0.75)",
    Green: "rgb(75, 192, 192, 0.75)",
    Blue: "rgb(54, 162, 235, 0.75)",
    Purple: "rgb(153, 102, 255, 0.75)",
    Grey: "rgb(201, 203, 207, 0.75)",
  };

  // GET CHART DATA
  useEffect(() => {
    const getPieData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8000/api/pie-chart-data/`
        );
        setResData(res.data);
        console.log(res.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    getPieData();
  }, []);

  // SETUP CHART DATASETS AND LABELS
  const data = {
    labels: resData.labels,
    datasets: [
      {
        label: "Dataset 1",
        data: resData.data,
        backgroundColor: resData.labels.map(
          (label) => CHART_COLORS[label] || "rgb(255, 255, 255)"
        ),
        hoverOffset: 4,
      },
    ],
  };

  // SET CHART OPTIONS
  const options = {
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
        text: "Pie Chart",
      },
    },
    scales: {
      y: {
        title: {
          display: false,
        },
        display: false,
        min: 10,
      },
      x: {
        title: {
          display: false,
        },
        display: false,
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
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
