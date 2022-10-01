import { css } from '@emotion/css';
import { useState } from 'react';
import Menu from '../../../Layout/Menu';
import HambergerButton from './Menu/HambergerButton';
import ListTitle from './Menu/ListTitle';
import PrefList from './Menu/PrefList';

const MainPageMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={styles.container}>
      <Menu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen}>
        <HambergerButton onClick={() => setIsMenuOpen(!isMenuOpen)} isOpen={isMenuOpen} />
        <ListTitle />
        <PrefList />
      </Menu>
    </div>
  );
};

const styles = {
  container: css`
    height: 100vh;
  `,
};

export default MainPageMenu;
