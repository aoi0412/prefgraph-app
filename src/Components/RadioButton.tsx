/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { FC } from 'react';
import { css, cx } from '@emotion/css';

type Props = {
  isOn: boolean;
  setIsOn: (bool: boolean) => void;
};
const RadioButton: FC<Props> = ({ isOn, setIsOn }) => (
  <div className={styles.RadioButton}>
    <div onClick={() => setIsOn(!isOn)} className={cx(styles.RadioCircle, { [styles.RatioCircleIsOn]: isOn })} />
  </div>
);

const styles = {
  RadioCircle: css`
    transition: all 0.3s ease-in-out;
    border-radius: 20px;
    width: 80%;
    height: 80%;
    background-color: rgba(0, 0, 0, 0);
  `,
  RatioCircleIsOn: css`
    background-color: #61dafb;
  `,
  RadioButton: css`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    padding: 1px;
    border-radius: 100px;
    width: 20px;
    height: 20px;
    border: solid 2px #61dafb;
  `,
};

export default RadioButton;
