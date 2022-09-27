import { useWindowSize } from '../Hooks/getWindowSize';
import { getDevicemode } from '../Utils/getDeviceMode';

/* eslint-disable arrow-body-style */
const Menu = () => {
  const windowSize = useWindowSize();
  return (
    <div
      style={{
        width: getDevicemode(windowSize.width) === 'PC' ? '400px' : '80%',
        backgroundColor: 'red',
        height: '100%',
      }}
    >
      Menu
    </div>
  );
};

export default Menu;
