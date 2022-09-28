import axios, { AxiosError, AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { apiResult, errorResponce, prefData, resultData } from '../types';

const url = 'https://opendata.resas-portal.go.jp/api/v1/prefecturess';
export const useFetchPrefList = () => {
  const [data, setData] = useState<resultData<prefData[]> | null>(null);
  const [error, setError] = useState<errorResponce | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    if (process.env.REACT_APP_RESAS_API_KEY) {
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
          setData({
            message: res.data.message,
            result: res.data.result ? res.data.result : [],
          });
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
      setError({
        statusCode: '',
        message: 'APIキーが正しくありません',
        description: '正しいAPIキーを設定してください',
      });
    }
  }, []);

  return { data, error, isLoading };
};
