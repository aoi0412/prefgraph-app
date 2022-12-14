import { css } from '@emotion/css';
import { FC } from 'react';
import Text from '../../../../Components/Text';

const ListTitle: FC = () => (
  <div className={styles.container}>
    <Text size="lg" bold>
      ι½ιεΊη
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
