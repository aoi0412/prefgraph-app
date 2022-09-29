import { useState } from 'react';
import { useWindowSize } from '../../../Hooks/getWindowSize';
import Menu from '../../../Layout/Menu';
import { getDevicemode } from '../../../Utils/getDeviceMode';
import HambergerButton from './Menu/HambergerButton';
import ListTitle from './Menu/ListTitle';
import MenuHeader from './Menu/MenuHeader';
import PrefList from './Menu/PrefList';

const MainPageMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const deviceMode = getDevicemode(useWindowSize().width);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {deviceMode !== 'PC' && <HambergerButton onClick={() => setIsMenuOpen(true)} />}
      <Menu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} deviceMode={deviceMode}>
        <MenuHeader />
        <ListTitle />
        <PrefList />
      </Menu>
    </div>
  );
};

export default MainPageMenu;
