/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import axios from 'axios';
import { prefData } from '../types';

const url = 'https://opendata.resas-portal.go.jp/api/v1/prefectures';
export const fetchPrefList = async () => {
  if (process.env.REACT_APP_RESAS_API_KEY) {
    await axios.get(url, { headers: { 'X-API-KEY': process.env.REACT_APP_RESAS_API_KEY } }).then((res) => {
      if (res.status !== 200) {
        console.log(`${res.statusText}がうまく動いていません`);
      } else if (res.data.message) {
        console.log(res.data.message);
      }
      //   return res.data.result as prefData[];
      console.log(res.data.result as prefData[]);
    });
  } else {
    alert('error');
  }
};
