import { FC, useState } from 'react';
import MenuItem from '../../../../Components/MenuItem';
import { prefData } from '../../../../types';

type Props = {
  data: prefData;
};
const PrefItem: FC<Props> = ({ data }) => {
  const [isSelected, setIsSelected] = useState(false);
  const { prefCode, prefName } = data;
  const onSelect = () => {
    console.log(prefCode);
    setIsSelected(!isSelected);
  };
  return <MenuItem title={prefName} isSelected={isSelected} onSelect={onSelect} />;
};

export default PrefItem;
