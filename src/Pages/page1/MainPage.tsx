import { useWindowSize } from '../../Hooks/getWindowSize';
import { getDevicemode } from '../../Utils/getDeviceMode';
import GraphTitle from './Components/GraphTitle';
import MainPageMenu from './Components/MainPageMenu';
import PrefGraph from './Components/PrefGraph';
import PopulationButtonList from './Components/PopulationButtonList';

const MainPage = () => {
  const deviceMode = getDevicemode(useWindowSize().width);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: deviceMode === 'PC' ? 'row' : 'column',
        flex: 1,
        height: window.innerHeight,
      }}
    >
      <MainPageMenu />
      <div
        style={{
          marginTop: '32px',
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <GraphTitle />
        <PrefGraph />
        <div style={{ display: 'flex', justifyContent: 'flex-end', backgroundColor: 'black', width: '100%' }}>
          <PopulationButtonList />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
