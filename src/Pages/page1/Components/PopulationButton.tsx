import { css } from '@emotion/css';
import { FC } from 'react';
import RadioButton from '../../../Components/RadioButton';
import Text from '../../../Components/Text';
import { populationType } from '../../../types';
import { usePopulationButton } from '../Hooks/populationButtonHook';

type Props = {
  typeName: populationType;
};

const PopulationButton: FC<Props> = ({ typeName }) => {
  const [isOn, setIsOn] = usePopulationButton(typeName);
  return (
    <div className={styles.cotainer}>
      <RadioButton isOn={isOn} setIsOn={() => setIsOn(typeName)} />
      <Text size="md">{typeName}</Text>
    </div>
  );
};

const styles = {
  cotainer: css`
    display: flex;
    margin: 4px;
    gap: 20px;
  `,
};

export default PopulationButton;
