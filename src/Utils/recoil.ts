import { atom } from 'recoil';
import { populationType, prefData, prefsPopulationData } from '../types';

export const prefDataListAtom = atom({
  key: 'prefDataListAtom',
  default: [] as prefData[],
});

export const selectedPrefDataAtom = atom({
  key: 'selectedDataAtom',
  default: [] as prefData[],
});

export const prefsPopulationDataAtom = atom({
  key: 'prefsPopulationDataAtom',
  default: {
    defalut: [],
  } as prefsPopulationData,
});

export const selectedPopulationTypeAtom = atom({
  key: 'selectedPopulationTypeAtom',
  default: '総人口' as populationType,
});

export const isLoadingAtom = atom({
  key: 'isLoadingAtom',
  default: true,
});
