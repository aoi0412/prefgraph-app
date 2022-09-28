import { atom } from 'recoil';
import { populationType, prefData } from '../types';

export const prefDataListAtom = atom({
  key: 'prefDataListAtom',
  default: [] as prefData[],
});

export const selectedPrefDataAtom = atom({
  key: 'selectedDataAtom',
  default: [] as prefData[],
});

export const selectedPopulationTypeAtom = atom({
  key: 'selectedPopulationTypeAtom',
  default: [] as populationType[],
});

export const isLoadingAtom = atom({
  key: 'isLoadingAtom',
  default: true,
});
