import React from 'react';
import './App.css';
import { useWindowSize } from './Hooks/getWindowSize';
import MainPage from './Pages/page1/MainPage';

const App = () => {
  const windowSize = useWindowSize();
  return (
    <div style={{ height: windowSize.height, width: windowSize.width, backgroundColor: 'yellow' }}>
      <MainPage />
    </div>
  );
};

export default App;
