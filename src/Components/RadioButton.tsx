/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { FC } from 'react';
import './RadioButton.css';

type Props = {
  isOn: boolean;
  setIsOn: (bool: boolean) => void;
};
const RadioButton: FC<Props> = ({ isOn, setIsOn }) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
      padding: '1px',
      borderRadius: 100,
      width: '20px',
      height: '20px',
      border: 'solid 2px #61dafb',
    }}
  >
    <div onClick={() => setIsOn(!isOn)} className={` RadioButton ${isOn && 'RadioButton--isOn'}`} />
  </div>
);

export default RadioButton;
