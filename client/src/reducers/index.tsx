import { combineReducers } from 'redux';
import { age } from './age';
import { StoreState } from '../types';

export interface RootState {
  age: StoreState;
}

export default combineReducers<RootState>({
  age,
});