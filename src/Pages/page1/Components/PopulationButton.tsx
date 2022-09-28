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
    <div style={{ display: 'flex', margin: '4px', gap: '20px' }}>
      <RadioButton isOn={isOn} setIsOn={() => setIsOn(typeName)} />
      <Text size="md">{typeName}</Text>
    </div>
  );
};

export default PopulationButton;
