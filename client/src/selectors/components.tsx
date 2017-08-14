import { StoreState } from '../types/index';
export const toggleStateSelector  = (state: StoreState) => state.toggleState;
export const ageSelector = (state: StoreState) => state.age;