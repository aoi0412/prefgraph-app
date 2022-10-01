/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
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
import { Line } from 'react-chartjs-2';
import { dataForGraph, dataset } from '../../../types';
import { dataForGraphDefault, populationTypeList } from '../../../Utils/defaultDatas';
import { prefsPopulationDataAtom, selectedPopulationTypeAtom, selectedPrefDataAtom } from '../../../Utils/recoil';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const PrefGraph = () => {
  const selectedPopulation = useRecoilValue(selectedPopulationTypeAtom);
  const prefsPopulationData = useRecoilValue(prefsPopulationDataAtom);
  const selectedPref = useRecoilValue(selectedPrefDataAtom);
  const [graphDatas, setGraphDatas] = useState<dataForGraph>(dataForGraphDefault);
  const [graphData, setGraphData] = useState<{
    labels: string[];
    datasets: dataset[];
  }>({
    labels: [],
    datasets: [],
  });
  useEffect(() => {
    const yearList: string[] = [];

    for (let i = 0; i < 13; i += 1) {
      yearList.push(`${1980 + i * 5}`);
    }
    const tmpGraphData = dataForGraphDefault;

    populationTypeList.forEach((population) => {
      const tmp: dataset[] = [];

      selectedPref.forEach((pref) => {
        if (Object.hasOwn(prefsPopulationData, pref.prefName)) {
          const tmp2 = prefsPopulationData[pref.prefName].find((data) => data.population === population)?.data;

          if (tmp2) tmp.push(tmp2);
        }
      });

      tmpGraphData[population] = {
        labels: yearList,
        datasets: tmp,
      };
    });
    setGraphDatas(tmpGraphData);
    setGraphData(tmpGraphData[selectedPopulation]);
  }, [selectedPref.length, prefsPopulationData]);
  useEffect(() => {
    setGraphData(graphDatas[selectedPopulation]);
  }, [selectedPopulation]);
  return <Line options={options} data={graphData} />;
};
export default PrefGraph;
