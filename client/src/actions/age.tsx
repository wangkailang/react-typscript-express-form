import * as constants from '../constants';

export interface IncrementAge {
  type: constants.INCREMENT_AGE;
}

export interface DecrementAge {
  type: constants.DECREMENT_AGE;
}

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