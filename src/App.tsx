/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React from 'react';
import './App.css';
import { useWindowSize } from './Hooks/getWindowSize';
import { useFetchPrefList } from './Hooks/useApiHooks';
import MainPage from './Pages/page1/MainPage';

const App = () => {
  const windowSize = useWindowSize();
  // const isLoading = useRecoilValue(isLoadingAtom);
  const result = useFetchPrefList();
  return (
    <div style={{ height: windowSize.height, width: windowSize.width, backgroundColor: 'white' }}>
      <div className={`splashScreen ${result.isLoading && 'splashScreen--isOpen'}`} />
      <MainPage />
    </div>
  );
};

export default App;
