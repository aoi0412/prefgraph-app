/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { FC, useRef } from 'react';
import { css } from '@emotion/css';

type Props = {
  isOn: boolean;
  setIsOn: (bool: boolean) => void;
};
const Switch: FC<Props> = ({ isOn, setIsOn }) => {
  const circleRef = useRef<HTMLDivElement>(null);
  const switchRef = useRef<HTMLDivElement>(null);
  const clickCircle = () => {
    if (circleRef.current && switchRef.current) {
      circleRef.current.classList.toggle('toggle');
      switchRef.current.classList.toggle('toggle');
      setIsOn(!isOn);
    }
  };
  return (
    <div onClick={clickCircle} className={styles.Switch} ref={switchRef}>
      <div ref={circleRef} className={styles.SwitchCircle} />
    </div>
  );
};

const styles = {
  SwitchCircle: css`
    transition: all 0.3s ease-in-out;
    transform: translate(0px);
    position: fixed;
    width: 20px;
    height: 20px;
    border-radius: 20px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.2) 2px 0px 8px;

    &.toggle {
      transform: translate(16px);
    }
  `,
  Switch: css`
    transition: all 0.3s ease-in-out;
    transform: translate(0px);
    width: 36px;
    height: 20px;
    border-radius: 20px;
    background-color: #c4c4c4;
    border: 1px solid #c4c4c4;

    &.toggle {
      background-color: #61dafb;
      border: 1px solid #61dafb;
    }
  `,
};

export default Switch;
