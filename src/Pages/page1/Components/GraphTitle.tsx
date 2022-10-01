import { css } from '@emotion/css';
import { FC } from 'react';
import { useRecoilValue } from 'recoil';
import Text from '../../../Components/Text';
import { selectedPopulationTypeAtom } from '../../../Utils/recoil';

const GraphTitle: FC = () => {
  const selectedPopulation = useRecoilValue(selectedPopulationTypeAtom);
  return (
    <div className={styles.container}>
      <Text size="lg" bold>
        {selectedPopulation}
      </Text>
    </div>
  );
};

const styles = {
  container: css`
    text-align: center;
    right: 0;
  `,
};

export default GraphTitle;
