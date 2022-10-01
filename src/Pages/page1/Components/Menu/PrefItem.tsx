import { FC } from 'react';
import MenuItem from '../../../../Components/MenuItem';
import { prefData } from '../../../../types';
import { usePrefItem } from '../../Hooks/menuItemHook';

type Props = {
  data: prefData;
};
const PrefItem: FC<Props> = ({ data }) => {
  const { isSelected, error, onSelect } = usePrefItem(data);
  return <MenuItem error={error} title={data.prefName} isSelected={isSelected} onSelect={() => onSelect(data)} />;
};

export default PrefItem;
