import { FC } from 'react';
import { css } from '@emotion/css';
import Switch from './Switch';
import Text from './Text';
import { errorResponce } from '../types';

type Props = {
  isSelected: boolean;
  title: string;
  onSelect: () => void;
  error: errorResponce | null;
};
const MenuItem: FC<Props> = ({ isSelected, title, onSelect, error }) => (
  <div className={styles.container}>
    {error ? (
      <div>{error.message}</div>
    ) : (
      <>
        <div className={styles.textContainer}>
          <Text size="md">{title}</Text>
        </div>
        <Switch isOn={isSelected} setIsOn={onSelect} />
      </>
    )}
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
