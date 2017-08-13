import * as constants from '../constants';

export interface Toggle {
  type:  constants.TOGGLE_NAVIGATION,
}

export type ToggleType = Toggle;

export function toggle(): Toggle {
  return {
    type: constants.TOGGLE_NAVIGATION,
  };
}