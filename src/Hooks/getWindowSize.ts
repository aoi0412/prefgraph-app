/* eslint-disable no-console */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<{
    width: number;
    height: number;
  }>({ width: window.innerWidth, height: window.innerHeight });
  useEffect(() => {
    window.addEventListener('resize', () => {
      console.log(window.innerWidth);
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    });
  }, []);
  return windowSize;
};
