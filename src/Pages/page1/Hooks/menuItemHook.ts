import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { useFetchPopulation } from '../../../Hooks/useApiHooks';
import { errorResponce, populationResult, prefData, resultData } from '../../../types';
import { prefsPopulationDataAtom, selectedPrefDataAtom } from '../../../Utils/recoil';
import { apiToGraph } from '../../../Utils/shapeData';

export const usePrefItem = (
  data: prefData
): { isSelected: boolean; error: errorResponce | null; onSelect: (data: prefData) => void } => {
  const [isSelected, setIsSelected] = useState(false);
  const [selectedPref, setSelectedPref] = useRecoilState(selectedPrefDataAtom);
  const [prefsPopulationData, setPrefsPoplationData] = useRecoilState(prefsPopulationDataAtom);
  const { result, error, fetchPopulation } = useFetchPopulation(data.prefCode);
  const onSelect = () => {
    let tmp = [...selectedPref];
    if (tmp.find((pref) => pref.prefCode === data.prefCode)) {
      tmp = tmp.filter((pref) => pref.prefName !== data.prefName);
    } else {
      if (!Object.hasOwn(prefsPopulationData, data.prefName)) {
        fetchPopulation();
      }
      tmp.push(data);
    }
    setSelectedPref(tmp);
    setIsSelected(!isSelected);
  };
  useEffect(() => {
    if (result && result.result) {
      const tmp = { ...prefsPopulationData };
      tmp[data.prefName] = apiToGraph(result as resultData<populationResult>, data.prefName);
      setPrefsPoplationData(tmp);
    }
  }, [result]);

  return { isSelected, error, onSelect };
};
