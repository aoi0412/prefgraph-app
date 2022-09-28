import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { prefData } from '../../../types';
import { selectedPrefDataAtom } from '../../../Utils/recoil';

export const usePrefItem = (): [isSelected: boolean, onSelect: (data: prefData) => void] => {
  const [isSelected, setIsSelected] = useState(false);
  const [selectedPref, setSelectedPref] = useRecoilState(selectedPrefDataAtom);

  const onSelect = (data: prefData) => {
    let tmp = [...selectedPref];
    if (isSelected) {
      tmp = tmp.filter((pref) => pref.prefCode !== data.prefCode);
    } else {
      tmp.push(data);
    }
    console.log('selectedPref is', tmp);
    setSelectedPref(tmp);
    setIsSelected(!isSelected);
  };

  return [isSelected, onSelect];
};
