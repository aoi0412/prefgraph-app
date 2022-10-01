export type prefData = {
  prefCode: number;
  prefName: string;
};

export type populationType = '総人口' | '年少人口' | '生産年齢人口' | '老年人口';
export type populationSingleData = {
  year: number;
  value: number;
};
export type populationTypeData = {
  populationType: populationType;
  data: populationSingleData[];
};
export type prefsPopulationData = {
  [prefName: string]: {
    population: populationType;
    data: dataset;
  }[];
};
export type dataset = {
  label: string;
  data: number[];
  borderColor: string;
  backgroundColor: string;
};

export type dataForGraph = {
  [population in populationType]: {
    labels: string[];
    datasets: dataset[];
  };
};

export type populationData = {
  year: number;
  value: number;
};
export type populationResult = {
  boundaryYear: number;
  data: { label: populationType; data: populationData[] }[];
};

export type apiResult<T> = {
  message: string;
  result?: T;
  statusCode?: string;
  description?: string;
};

export type errorResponce = {
  message: string;
  statusCode: string;
  description: string;
};

export type resultData<T> = {
  message: string;
  result: T;
};
