import { ToggleType } from '../actions/toggle';
import { TOGGLE_NAVIGATION } from '../constants/index';

const initialState = false;

export function toggle(state: boolean = initialState, action: ToggleType) {
  if (action.type === TOGGLE_NAVIGATION) {
    return !state;
  }
  return state;
}
