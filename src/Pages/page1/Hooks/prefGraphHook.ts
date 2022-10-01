/* eslint-disable @typescript-eslint/no-shadow */
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { dataForGraph, dataset } from '../../../types';
import { dataForGraphDefault } from '../../../Utils/defaultDatas';
import { getYearList } from '../../../Utils/getYearList';
import { prefsPopulationDataAtom, selectedPopulationTypeAtom, selectedPrefDataAtom } from '../../../Utils/recoil';
import { integratePrefData } from '../../../Utils/shapeData';

// グラフで使用するカスタムフック
export const usePrefGraph = (): {
  labels: string[];
  datasets: dataset[];
} => {
  const [graphDatas, setGraphDatas] = useState<dataForGraph>(dataForGraphDefault);
  const [graphData, setGraphData] = useState<{
    labels: string[];
    datasets: dataset[];
  }>({
    labels: [],
    datasets: [{ label: 'aiueo', data: [1], borderColor: '#999', backgroundColor: '#999' }],
  });
  usePopulationTypeChange(setGraphData, graphDatas);
  usePrefsDataChange(setGraphData, setGraphDatas);

  return graphData;
};

// 人口構成選択時に実行されるHooks
const usePopulationTypeChange = (
  setGraphData: (data: { labels: string[]; datasets: dataset[] }) => void,
  graphDatas: dataForGraph
) => {
  const selectedPopulation = useRecoilValue(selectedPopulationTypeAtom);
  useEffect(() => {
    setGraphData(graphDatas[selectedPopulation]);
  }, [selectedPopulation]);
};

// グラフに表示する都道府県を選択した時に実行されるHooks
const usePrefsDataChange = (
  setGraphData: (data: { labels: string[]; datasets: dataset[] }) => void,
  setGraphDatas: (data: dataForGraph) => void
) => {
  const selectedPopulation = useRecoilValue(selectedPopulationTypeAtom);
  const prefsPopulationData = useRecoilValue(prefsPopulationDataAtom);
  const selectedPref = useRecoilValue(selectedPrefDataAtom);
  useEffect(() => {
    const yearList: string[] = getYearList();
    const tmp = integratePrefData(selectedPref, prefsPopulationData, yearList);
    setGraphDatas(tmp);
    setGraphData(tmp[selectedPopulation]);
  }, [selectedPref.length, prefsPopulationData]);
};
