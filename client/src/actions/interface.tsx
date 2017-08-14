import * as constants from '../constants';

export interface IncrementAge {
  type: constants.INCREMENT_AGE;
}

export interface DecrementAge {
  type: constants.DECREMENT_AGE;
}

export interface Toggle {
  type:  constants.TOGGLE_NAVIGATION,
}
