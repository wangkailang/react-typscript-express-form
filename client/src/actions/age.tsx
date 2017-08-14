import * as constants from '../constants';
import { IncrementAge, DecrementAge } from './interface';

export type AgeActionType = IncrementAge | DecrementAge;

export function incrementAge(): IncrementAge {
  return {
    type: constants.INCREMENT_AGE
  };
}

export function decrementAge(): DecrementAge {
  return {
    type: constants.DECREMENT_AGE
  };
}