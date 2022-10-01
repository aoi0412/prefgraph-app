import { dataset, populationResult, populationType, prefData, prefsPopulationData, resultData } from '../types';
import { dataForGraphDefault, populationTypeList } from './defaultDatas';
import { setRandomColor } from './getRandomColor';

export const apiToGraph = (
  apiData: resultData<populationResult>,
  prefName: string
): {
  population: populationType;
  data: {
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string;
  };
}[] => {
  const tmp: {
    population: populationType;
    data: {
      label: string;
      data: number[];
      borderColor: string;
      backgroundColor: string;
    };
  }[] = [];
  const color = setRandomColor();
  apiData.result.data.forEach((data) => {
    const tmp2: number[] = [];
    data.data.forEach((value) => {
      tmp2.push(value.value);
    });
    tmp.push({
      population: data.label,
      data: {
        label: prefName,
        data: tmp2,
        borderColor: color,
        backgroundColor: color,
      },
    });
  });
  return tmp;
};

export const integratePrefData = (
  selectedPref: prefData[],
  populationData: prefsPopulationData,
  yearList: string[]
) => {
  const tmpGraphData = dataForGraphDefault;

  populationTypeList.forEach((population) => {
    const tmp: dataset[] = [];

    selectedPref.forEach((pref) => {
      if (Object.hasOwn(populationData, pref.prefName)) {
        const tmp2 = populationData[pref.prefName].find((data) => data.population === population)?.data;

        if (tmp2) tmp.push(tmp2);
      }
    });

    tmpGraphData[population] = {
      labels: yearList,
      datasets: tmp,
    };
  });
  return tmpGraphData;
};
