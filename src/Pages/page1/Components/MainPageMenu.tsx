import { useState } from 'react';
import Menu from '../../../Layout/Menu';
import HambergerButton from './Menu/HambergerButton';
import ListTitle from './Menu/ListTitle';
import MenuHeader from './Menu/MenuHeader';
import PrefList from './Menu/PrefList';

const MainPageMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div>
        <HambergerButton onClick={() => setIsMenuOpen(true)} />
      </div>
      <Menu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen}>
        <MenuHeader />
        <ListTitle />
        <PrefList />
      </Menu>
    </div>
  );
};

export default MainPageMenu;
