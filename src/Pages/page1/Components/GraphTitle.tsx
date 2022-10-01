import { css } from '@emotion/css';
import { useRecoilValue } from 'recoil';
import Text from '../../../Components/Text';
import { selectedPopulationTypeAtom } from '../../../Utils/recoil';

const GraphTitle = () => {
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
