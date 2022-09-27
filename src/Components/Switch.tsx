/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { FC } from 'react';
import './Switch.css';

type Props = {
  isOn: boolean;
  setIsOn: (bool: boolean) => void;
};
const Switch: FC<Props> = ({ isOn, setIsOn }) => (
  <div onClick={() => setIsOn(!isOn)} className={` Switch ${isOn && 'Switch--isOn'}`}>
    <div className={` SwitchCircle ${isOn && 'SwitchCircle--isOn'}`} />
  </div>
);

export default Switch;
