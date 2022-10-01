import { dataForGraph, populationType } from '../types';

export const populationTypeList: populationType[] = ['総人口', '生産年齢人口', '年少人口', '老年人口'];

export const dataForGraphDefault: dataForGraph = {
  総人口: {
    labels: [],
    datasets: [],
  },
  生産年齢人口: {
    labels: [],
    datasets: [],
  },
  年少人口: {
    labels: [],
    datasets: [],
  },
  老年人口: {
    labels: [],
    datasets: [],
  },
};
