import { FC } from 'react';

type Props = {
  onClick: () => void;
};
const HambergerButton: FC<Props> = ({ onClick }) => (
  <button style={{ position: 'relative', padding: 0, width: '32px', height: '32px' }} type="button" onClick={onClick}>
    <span
      style={{
        position: 'absolute',
        top: '-25%',
        bottom: 0,
        right: 0,
        left: 0,
        margin: 'auto',
        padding: 0,
        display: 'inline-block',
        backgroundColor: 'black',
        height: '2px',
        width: '20px',
        color: 'black',
      }}
    />
  </button>
);

export default HambergerButton;
