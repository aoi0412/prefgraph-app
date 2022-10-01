/* eslint-disable no-nested-ternary */
import { css, cx } from '@emotion/css';
import { FC } from 'react';

type Props = {
  onClick: () => void;
  isOpen: boolean;
};
const HambergerButton: FC<Props> = ({ onClick, isOpen }) => (
  <button className={styles.hamberger} type="button" onClick={onClick}>
    {[0, 1, 2].map((number) => (
      <span className={cx(styles.bar(number), { [styles.barIsOpen(number)]: isOpen })} />
    ))}
  </button>
);

const styles = {
  hamberger: css`
    right: -60px;
    position: fixed;
    width: 40px;
    height: 30px;
    background: none;
    border: none;
    appearance: none;
    cursor: pointer;
    margin: 8px;
    margin-top: 16px;
    top: 0px;
    @media (min-width: 1000px) {
      width: 0;
      height: 0;
    }
  `,
  bar: (index: number) => css`
    box-sizing: border-box;
    transition: all 0.4s;
    display: block;
    position: absolute;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: #000;
    border-radius: 4px;
    top: ${index === 0 ? '0px' : index === 1 ? '13px' : 'none'};
    bottom: ${index === 2 ? '0px' : 'none'};
    @media (min-width: 1000px) {
      width: 0;
      height: 0;
    }
  `,
  barIsOpen: (index: number) => css`
    transform: translateY(${index === 0 ? 13 : index === 2 ? -13 : 0}px)
      rotate(${index === 0 ? -45 : index === 2 ? 45 : 0}deg);
    opacity: ${index === 1 ? 0 : 1};
  `,
};

export default HambergerButton;
