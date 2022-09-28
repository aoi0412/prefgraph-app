/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { FC } from 'react';
import Text from './Text';

type Props = {
  isSelected: boolean;
  title: string;
  onSelect: () => void;
};
const MenuItem: FC<Props> = ({ isSelected, title, onSelect }) => (
  <div
    style={{
      padding: '12px',
      borderBottom: 'solid 1px gray',
      height: '40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    }}
  >
    <div style={{ marginLeft: '8px' }}>
      <Text size="md">{title}</Text>
    </div>
    <button
      onClick={onSelect}
      style={{
        border: 'black 1px solid',
        marginRight: '8px',
        backgroundColor: 'white',
        width: '20px',
        height: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
      }}
      type="button"
    >
      {isSelected && (
        <img style={{ width: '12px', height: '12px' }} alt="checkIcon" src={require('../images/check.png')} />
      )}
    </button>
  </div>
);

export default MenuItem;
