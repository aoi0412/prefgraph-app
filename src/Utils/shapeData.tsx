import { populationResult, populationType, resultData } from '../types';

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
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    });
  });
  return tmp;
};
