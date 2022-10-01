import { FC } from 'react';
import { css } from '@emotion/css';
import Switch from './Switch';
import Text from './Text';

type Props = {
  isSelected: boolean;
  title: string;
  onSelect: () => void;
};
const MenuItem: FC<Props> = ({ isSelected, title, onSelect }) => (
  <div className={styles.container}>
    <div className={styles.textContainer}>
      <Text size="md">{title}</Text>
    </div>
    <Switch isOn={isSelected} setIsOn={onSelect} />
  </div>
);

const styles = {
  container: css`
    padding: 12px;
    border-bottom: solid 1px gray;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  textContainer: css`
    margin-left: 8px;
  `,
};

export default MenuItem;
