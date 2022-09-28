/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { FC, ReactNode } from 'react';
import { useWindowSize } from '../Hooks/getWindowSize';
import { getDevicemode } from '../Utils/getDeviceMode';
import './Menu.css';

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  children: ReactNode;
};
const Menu: FC<Props> = ({ isOpen, setIsOpen, children }) => {
  const deviceMode = getDevicemode(useWindowSize().width);
  return (
    <>
      <nav className={` DrawerMenuLeft ${deviceMode === 'PC' && 'PCmode'} ${!isOpen && 'DrawerMenuLeft--isClose'}`}>
        {children}
      </nav>
      <div className={` backDrop ${isOpen && 'backDrop--isOpen'}`} onClick={() => setIsOpen(false)} />
    </>
  );
};

export default Menu;
