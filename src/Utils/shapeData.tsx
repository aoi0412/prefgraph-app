import { populationResult, populationTypeData, resultData } from '../types';

export const apiToGraph = (apiData: resultData<populationResult>): populationTypeData[] => {
  const tmp: populationTypeData[] = [];
  apiData.result.data.forEach((data) => {
    tmp.push({
      populationType: data.label,
      data: data.data,
    });
  });
  return tmp;
};

export const addToGraphData = (data: populationTypeData[]) => {};

export const deleteFromGraphData = (data: populationTypeData[]) => {};
