import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { FC } from 'react';
import { Line } from 'react-chartjs-2';
import { dataset } from '../../../types';
import { usePrefGraph } from '../Hooks/prefGraphHook';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom' as const,
    },
  },
};

const PrefGraph: FC = () => {
  const graphData: {
    labels: string[];
    datasets: dataset[];
  } = usePrefGraph();
  return <Line options={options} data={graphData} height={100} width={150} />;
};

export default PrefGraph;
