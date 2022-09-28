export type prefData = {
  prefCode: number;
  prefName: string;
};

export type graphSingleData = {
  year: number;
  [prefName: string]: number;
};

export type populationType = '総人口' | '年少人口' | '生産年齢人口' | '老年人口';

export type prefDataForGraph = {
  [title in populationType]: graphSingleData[];
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
