import * as constants from '../constants';
import { Toggle } from './interface';

export type ToggleType = Toggle;

export function toggle(): Toggle {
  return {
    type: constants.TOGGLE_NAVIGATION,
  };
}