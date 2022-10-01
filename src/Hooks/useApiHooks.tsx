import axios, { AxiosError, AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { apiResult, errorResponce, populationResult, prefData, resultData } from '../types';
import { isLoadingAtom, prefDataListAtom } from '../Utils/recoil';

export const useFetchPrefList = () => {
  const [data, setData] = useRecoilState(prefDataListAtom);

  const [error, setError] = useState<errorResponce | null>(null);

  const [isLoading, setIsLoading] = useRecoilState(isLoadingAtom);

  const url = 'https://opendata.resas-portal.go.jp/api/v1/prefectures';

  useEffect(() => {
    setIsLoading(true);
    if (process.env.REACT_APP_RESAS_API_KEY && data.length === 0) {
      axios
        .get(url, { headers: { 'X-API-KEY': process.env.REACT_APP_RESAS_API_KEY } })
        .then((res: AxiosResponse<apiResult<prefData[]>>) => {
          if (res.status !== 200) {
            setError({
              statusCode: `${res.status}`,
              message: res.statusText,
              description: 'APIがうまく動きませんでした',
            });
          } else if (res.data.statusCode) {
            setError({
              statusCode: res.data.statusCode,
              message: res.data.message,
              description: res.data.description ? res.data.description : '',
            });
          }
          if (res.data.result) {
            setData(res.data.result);
          }
        })
        .catch((e: AxiosError<{ error: string }>) => {
          setError({
            statusCode: e.code ? e.code : '',
            message: e.message,
            description: '',
          });
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
      setError({
        statusCode: '',
        message: 'APIキーが正しくありません',
        description: '正しいAPIキーを設定してください',
      });
    }
  }, []);

  return { data, error, isLoading };
};

export const useFetchPopulation = (prefCode: number) => {
  const [result, setResult] = useState<resultData<populationResult | null> | null>(null);
  const [error, setError] = useState<errorResponce | null>(null);
  const url = `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=-&prefCode=${prefCode}`;
  const fetchPopulation = () => {
    if (process.env.REACT_APP_RESAS_API_KEY) {
      axios
        .get(url, { headers: { 'X-API-KEY': process.env.REACT_APP_RESAS_API_KEY } })
        .then((res: AxiosResponse<apiResult<populationResult>>) => {
          if (res.status !== 200) {
            setError({
              statusCode: `${res.status}`,
              message: res.statusText,
              description: 'APIがうまく動きませんでした',
            });
          } else if (res.data.statusCode) {
            setError({
              statusCode: res.data.statusCode,
              message: res.data.message,
              description: res.data.description ? res.data.description : '',
            });
          }
          setResult({
            message: res.data.message,
            result: res.data.result ? res.data.result : null,
          });
        })
        .catch((e: AxiosError<{ error: string }>) => {
          setError({
            statusCode: e.code ? e.code : '',
            message: e.message,
            description: '',
          });
        });
    } else {
      setError({
        statusCode: '',
        message: 'APIキーが正しくありません',
        description: '正しいAPIキーを設定してください',
      });
    }
  };

  return { result, error, fetchPopulation };
};
