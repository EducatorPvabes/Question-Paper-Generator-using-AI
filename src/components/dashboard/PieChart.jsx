import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Pie } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

const data = {
  labels: [
    "CSE",
    "IT",
    "ECE",
    "ME",
  ],
  datasets: [
    {
      data: [35, 20, 25, 20],
    },
  ],
};

const PieChart = () => {
  return <Pie data={data} />;
};

export default PieChart;