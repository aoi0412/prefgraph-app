/* eslint-disable react/jsx-no-useless-fragment */
import { css, cx } from '@emotion/css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { FC, useEffect, useRef, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { dataset } from '../types';
import { setRandomColor } from '../Utils/getRandomColor';
import Text from './Text';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

type Props = {
  message: string;
  isLoading: boolean;
};
const SplashScreen: FC<Props> = ({ message, isLoading }) => {
  const [count, setCount] = useState(2);
  if (count < 0) return <></>;
  return <SplashScreenItem isLoading={isLoading} count={count} setCount={setCount} message={message} />;
};

type Prop = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  message: string;
  isLoading: boolean;
};
const SplashScreenItem: FC<Prop> = ({ isLoading, count, setCount, message }) => {
  const isLoad = useRef(false);
  const getRandomNum = (max: number) => Math.floor(Math.random() * max);
  const labels: string[] = ['0', '1', '2', '3', '4', '5', '6'];
  const datasets: dataset[] = [
    {
      label: 'data1',
      data: [0, 6, 1, 5, 2, 4, 3],
      borderColor: '#000',
      backgroundColor: '#000',
    },
    {
      label: 'data2',
      data: [6, 0, 5, 1, 4, 2, 3],
      borderColor: '#c4c4c4',
      backgroundColor: '#c4c4c4',
    },
  ];
  const [data, setData] = useState<{ labels: string[]; datasets: dataset[] }>({ labels, datasets });
  useEffect(() => {
    isLoad.current = !isLoading;
  }, [isLoading]);
  useEffect(() => {
    const intervalId = setInterval(() => {
      const tmp: { labels: string[]; datasets: dataset[] } = { labels, datasets: [] };
      for (let i = 0; i < 2; i += 1) {
        const value: number[] = [];
        for (let j = 0; j < labels.length; j += 1) {
          value.push(getRandomNum(10));
        }
        const color = setRandomColor();
        tmp.datasets.push({
          data: value,
          label: `data${i}`,
          borderColor: color,
          backgroundColor: color,
        });
      }
      if (isLoad.current && message === '') {
        setCount((c) => c - 1);
      }
      setData(tmp);
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <div className={cx(styles.splashScreen, { [styles.splashScreenIsOpen]: count > 0 })}>
      <Line width={300} height={200} data={data} options={options} />
      <Text>{isLoading ? 'ロード中...' : message || 'ロード完了！'}</Text>
    </div>
  );
};

export const options = {
  responsive: false,
  maintainAspectRatio: true,
  plugins: {
    legend: {
      position: 'bottom' as const,
    },
  },
};

const styles = {
  splashScreen: css`
    transition: all 0.3s ease-in-out;
    background-color: rgba(0, 0, 0, 0);
    width: 100vw;
    height: 100vh;
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    pointer-events: none;
    visibility: hidden;
  `,
  splashScreenIsOpen: css`
    visibility: visible;
    pointer-events: auto;
    background-color: white;
  `,
};

export default SplashScreen;
