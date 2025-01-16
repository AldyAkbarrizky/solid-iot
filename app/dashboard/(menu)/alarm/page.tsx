"use client";

import LiquidGauge from "@/components/LiquidGauge";
import { Card } from "antd";
import React from "react";
import {
  CircularProgressbar,
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import { Doughnut, Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement, // Import ArcElement for Doughnut charts
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
} from "chart.js";
import "react-circular-progressbar/dist/styles.css";
import WindGauge from "@/components/WindComponent";
import WindComponent from "@/components/WindComponent";

// Register chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement
);

const Alarm = () => {
  const lineChartData = {
    labels: ["11:46:11", " ", " ", "11:46:11", " ", " ", "11:46:11"],
    datasets: [
      {
        label: "Heating",
        data: [48, 70, 60, 18, 30, 48, 7],
        backgroundColor: "#19A2D0",
      },
    ],
  };

  return (
    <section className="h-full w-full p-4">
      {/* Container for both rows */}
      <div className="h-full flex flex-col gap-4">
        {/* First row - 4 columns */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card
            className="h-full rounded-none text-center"
            title="CO2 / Barometric Pressure"
          >
            <div className="flex flex-col justify-center items-center h-full">
              <span className="font-bold">Temperature</span>
              <div className="w-32 h-32 mt-2">
                <CircularProgressbarWithChildren
                  value={15}
                  styles={buildStyles({
                    strokeLinecap: "butt",
                    pathColor: "#14B8A6",
                  })}
                >
                  <div className="font-bold text-lg">15.40</div>
                  <div className="text-sm">degree</div>
                </CircularProgressbarWithChildren>
              </div>
              <div className="flex items-center mt-4 h-28">
                <Line
                  data={lineChartData}
                  options={{
                    responsive: true,
                    scales: { x: { stacked: true }, y: { stacked: false } },
                    plugins: {
                      legend: {
                        display: false,
                      },
                    },
                    maintainAspectRatio: false,
                  }}
                />
              </div>
            </div>
          </Card>

          <Card
            className="h-full rounded-none text-center"
            title="CO2 / Barometric Pressure"
          >
            <div className="flex flex-col justify-center items-center h-full">
              <span className="font-bold">Wind Speed</span>
              <div className="w-32 h-32 mt-2">
                <CircularProgressbarWithChildren
                  value={6}
                  styles={buildStyles({
                    strokeLinecap: "butt",
                    pathColor: "#14B8A6",
                  })}
                >
                  <div className="font-bold text-lg">6</div>
                  <div className="text-sm">m/s</div>
                </CircularProgressbarWithChildren>
              </div>
              <div className="flex items-center mt-4 h-28">
                <Line
                  data={lineChartData}
                  options={{
                    responsive: true,
                    scales: { x: { stacked: true }, y: { stacked: false } },
                    plugins: {
                      legend: {
                        display: false,
                      },
                    },
                    maintainAspectRatio: false,
                  }}
                />
              </div>
            </div>
          </Card>

          <Card
            className="h-full rounded-none text-center"
            title="CO2 / Barometric Pressure"
          >
            <div className="flex flex-col justify-center items-center h-full">
              <span className="font-bold">CO2</span>
              <LiquidGauge initialValue={50} />
              <div className="flex items-center mt-4 h-28">
                <Line
                  data={lineChartData}
                  options={{
                    responsive: true,
                    scales: { x: { stacked: true }, y: { stacked: false } },
                    plugins: {
                      legend: {
                        display: false,
                      },
                    },
                    maintainAspectRatio: false,
                  }}
                />
              </div>
            </div>
          </Card>

          <Card
            className="h-full rounded-none text-center"
            title="Precipitation / Wind Direction"
          >
            <div className="flex flex-col justify-center items-center h-full">
              <span className="font-bold">Rainfall</span>
              <LiquidGauge initialValue={20} />
              <div className="flex items-center mt-4 h-28">
                <Line
                  data={lineChartData}
                  options={{
                    responsive: true,
                    scales: { x: { stacked: true }, y: { stacked: false } },
                    plugins: {
                      legend: {
                        display: false,
                      },
                    },
                    maintainAspectRatio: false,
                  }}
                />
              </div>
            </div>
          </Card>
        </div>

        {/* Second row - 3 columns */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card className="h-full rounded-none text-center" title="Humidity">
            <div className="flex flex-col justify-center items-center h-full">
              <div className="w-32 h-32 mt-2">
                <CircularProgressbarWithChildren
                  value={65}
                  styles={buildStyles({
                    strokeLinecap: "butt",
                    pathColor: "#14B8A6",
                  })}
                >
                  <div className="font-bold text-lg">65</div>
                  <div className="text-sm">%</div>
                </CircularProgressbarWithChildren>
              </div>
              <div className="flex items-center mt-4 h-28">
                <Line
                  data={lineChartData}
                  options={{
                    responsive: true,
                    scales: { x: { stacked: true }, y: { stacked: false } },
                    plugins: {
                      legend: {
                        display: false,
                      },
                    },
                    maintainAspectRatio: false,
                  }}
                />
              </div>
            </div>
          </Card>

          <Card
            className="h-full rounded-none text-center"
            title="Barometric Pressure"
          >
            <div className="flex flex-col justify-center items-center h-full">
              <LiquidGauge initialValue={30} />
              <div className="flex items-center mt-4 h-28">
                <Line
                  data={lineChartData}
                  options={{
                    responsive: true,
                    scales: { x: { stacked: true }, y: { stacked: false } },
                    plugins: {
                      legend: {
                        display: false,
                      },
                    },
                    maintainAspectRatio: false,
                  }}
                />
              </div>
            </div>
          </Card>

          <Card
            className="h-full rounded-none text-center"
            title="Wind Direction"
          >
            <div className="flex justify-center items-center h-full mt-6">
              <WindComponent degree={120} />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Alarm;
