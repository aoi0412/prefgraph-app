import { css } from '@emotion/css';
import { FC } from 'react';
import Text from '../../../../Components/Text';

const ListTitle: FC = () => (
  <div className={styles.container}>
    <Text size="lg" bold>
      都道府県
    </Text>
  </div>
);

const styles = {
  container: css`
    padding: 4px;
    padding-left: 12px;
    margin: 0;
  `,
};

export default ListTitle;
