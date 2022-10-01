/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { FC, ReactNode } from 'react';
import { css, cx } from '@emotion/css';

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  children: ReactNode;
};
const Menu: FC<Props> = ({ isOpen, setIsOpen, children }) => (
  <>
    <nav className={cx(styles.drawerMenu, { [styles.DrawerMenuIsClose]: !isOpen })}>{children}</nav>
    <div className={cx(styles.backDrop, { [styles.backDropIsOpen]: isOpen })} onClick={() => setIsOpen(false)} />
  </>
);

const styles = {
  drawerMenu: css`
    padding-top: 40px;
    transition: all 0.3s ease-in-out;
    transform: translate(0px);
    position: fixed;
    background-color: white;
    width: 60%;
    max-width: 300px;
    height: 100vh;
    z-index: 2;
    display: flex;
    flex: 1;
    flex-direction: column;
    box-shadow: rgba(0, 0, 0, 0.2) 2px 0px 8px;

    @media (min-width: 1000px) {
      width: 400px;
      position: relative;
      transform: translate(0px);
    }
  `,
  DrawerMenuIsClose: css`
    transform: translate(-100%);
  `,
  backDrop: css`
    transition: background-color 0.3s ease-in-out;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0);
    width: 100%;
    height: 100%;
    z-index: 1;
    pointer-events: none;
  `,
  backDropIsOpen: css`
    pointer-events: auto;
    background-color: rgba(0, 0, 0, 0.3);
  `,
};

export default Menu;
