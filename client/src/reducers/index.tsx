import { combineReducers } from 'redux';
import { age } from './age';
import { toggle } from './toggle';
import { StoreState } from '../types';

export default combineReducers<StoreState>({
  age,
  toggleState: toggle,
});