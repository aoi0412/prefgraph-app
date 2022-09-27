import { useState } from 'react';
import Switch from '../../../../Components/Switch';
import Text from '../../../../Components/Text';

const Total = () => {
  const [isOn, setIsOn] = useState(false);
  return (
    <div style={{ display: 'flex', margin: '4px', gap: '20px' }}>
      <Switch isOn={isOn} setIsOn={setIsOn} />
      <Text size="md">総人口</Text>
    </div>
  );
};

export default Total;
