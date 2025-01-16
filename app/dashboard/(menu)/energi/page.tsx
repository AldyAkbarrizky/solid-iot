"use client";

import { Card } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
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

const Energi = () => {
  const budgetData = {
    datasets: [
      {
        label: "Budget",
        data: [75, 78], //
        backgroundColor: ["green", "gray"],
        borderColor: ["green", "gray"],
        borderWidth: 1,
      },
    ],
  };

  const energyData = {
    datasets: [
      {
        label: "Energy Consumption",
        data: [100, 100, 100],
        backgroundColor: ["#5CC8BE", "#357AF6", "#AF52DE"],
        borderColor: ["#5CC8BE", "#357AF6", "#AF52DE"],
        borderWidth: 1,
      },
    ],
  };

  const barChartData = {
    labels: ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"],
    datasets: [
      {
        label: "Gas",
        data: [48, 70, 60, 18, 30, 48, 7],
        backgroundColor: "#357AF6",
      },
      {
        label: "Electricity",
        data: [79, 100, 90, 30, 65, 78, 65],
        backgroundColor: "#5CC8BE",
      },
    ],
  };

  const lineChartData = {
    labels: ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"],
    datasets: [
      {
        label: "Heating",
        data: [48, 70, 60, 18, 30, 48, 7],
        backgroundColor: "#AF52DE",
      },
      {
        label: "Fridge",
        data: [54, 20, 78, 100, 35, 24, 31],
        backgroundColor: "#5CC8BE",
      },
      {
        label: "Oven",
        data: [79, 100, 90, 30, 65, 78, 65],
        backgroundColor: "#357AF6",
      },
    ],
  };

  return (
    <section className="p-4 h-full">
      <div className="flex flex-col w-full h-full gap-4">
        <Card
          className="rounded-none h-[375px]"
          title={
            <span className="flex gap-2">
              Cost
              <ExclamationCircleOutlined className="text-black cursor-pointer" />
            </span>
          }
          extra={<span>...</span>}
        >
          <div className="flex">
            {/* Half Doughnut Chart (1st part) */}
            <div className="w-[25%] flex flex-col items-center">
              <div className="text-center">Budget</div>
              <div className="w-[200px] h-[200px]">
                <Doughnut
                  data={budgetData}
                  options={{ rotation: -90, circumference: 180 }}
                />
              </div>
              <div className="flex justify-between w-[30%] text-[16px]">
                <span className="font-bold">Budget </span>
                <span>153M</span>
              </div>
              <div className="flex justify-between w-[30%] text-[16px] mt-2">
                <span className="font-bold">Used </span>
                <span>76 kWh</span>
              </div>
            </div>

            {/* Bar Chart (2nd part) */}
            <div className="flex-1 h-64">
              <Bar
                data={barChartData}
                options={{
                  responsive: true,
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                  maintainAspectRatio: false,
                }}
              />
            </div>

            {/* Legend (3rd part) */}
            <div className="w-[25%] flex justify-center items-center">
              <div className="flex flex-col gap-4 justify-center items-center border border-gray-400 w-[50%] p-4 rounded-lg">
                28/06/2022 Tuesday
                <table className="table-auto w-[90%]">
                  <tbody>
                    <tr>
                      <td className="w-4">
                        <span className="block w-2 h-2 bg-[#5CC8BE] rounded-full"></span>
                      </td>
                      <td className="text-left">Electricity</td>
                      <td className="w-16 text-right text-gray-400">8 Jt</td>
                    </tr>
                    <tr>
                      <td className="w-4">
                        <span className="block w-2 h-2 bg-[#357AF6] rounded-full"></span>
                      </td>
                      <td className="text-left">Gas</td>
                      <td className="w-16 text-right text-gray-400">5 Jt</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Card>
        <Card
          className="rounded-none h-[375px]"
          title={
            <span className="flex gap-2">
              Energy Consumption
              <ExclamationCircleOutlined className="text-black cursor-pointer" />
            </span>
          }
          extra={<span>...</span>}
        >
          <div className="flex">
            {/* Half Doughnut Chart (1st part) */}
            <div className="w-[25%] flex flex-col items-center">
              <div className="w-[240px] h-[240px]">
                <Doughnut
                  data={energyData}
                  options={{ plugins: { title: { display: false } } }}
                />
              </div>
            </div>

            {/* Bar Chart (2nd part) */}
            <div className="flex-1 h-64">
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

            {/* Legend (3rd part) */}
            <div className="w-[25%] flex justify-center items-center">
              <div className="flex flex-col gap-4 justify-center items-center border border-gray-400 w-[50%] p-4 rounded-lg">
                01/07/2022 05:00 am
                <table className="table-auto w-[90%]">
                  <tbody>
                    <tr>
                      <td className="w-4">
                        <span className="block w-2 h-2 bg-[#AF52DE] rounded-full"></span>
                      </td>
                      <td className="text-left">Heating</td>
                      <td className="w-16 text-right text-gray-400">
                        1.12 kWh
                      </td>
                    </tr>
                    <tr>
                      <td className="w-4">
                        <span className="block w-2 h-2 bg-[#357AF6] rounded-full"></span>
                      </td>
                      <td className="text-left">Fridge</td>
                      <td className="w-16 text-right text-gray-400">
                        0.91 kWh
                      </td>
                    </tr>
                    <tr>
                      <td className="w-4">
                        <span className="block w-2 h-2 bg-[#5CC8BE] rounded-full"></span>
                      </td>
                      <td className="text-left">Oven</td>
                      <td className="w-16 text-right text-gray-400">
                        0.78 kWh
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Energi;
