/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { FC } from 'react';
import Switch from './Switch';
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
    <Switch isOn={isSelected} setIsOn={onSelect} />
  </div>
);

export default MenuItem;
