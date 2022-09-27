import { useState } from 'react';
import Menu from '../../../Layout/Menu';
import HambergerButton from './Menu/HambergerButton';

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
        <p>aiueo</p>
      </Menu>
    </div>
  );
};

export default MainPageMenu;
