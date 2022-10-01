import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { populationType } from '../../../types';
import { selectedPopulationTypeAtom } from '../../../Utils/recoil';

export const usePopulationButton = (
  typeName: populationType
): [isOn: boolean, setIsOn: (typeName: populationType) => void] => {
  const [isSelected, setIsSelected] = useState(false);
  const [selectedPopulationType, setSelectedPopulationType] = useRecoilState(selectedPopulationTypeAtom);
  useEffect(() => {
    if (selectedPopulationType === typeName) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
  }, [selectedPopulationType === typeName]);
  const onSelect = (type: populationType) => {
    setSelectedPopulationType(type);
  };

  return [isSelected, onSelect];
};
