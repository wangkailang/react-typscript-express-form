import { AgeActionType } from '../actions/age';
import { StoreState } from '../types/index';
import { INCREMENT_AGE, DECREMENT_AGE } from '../constants/index';

const initialState = {
  age: 1,
  name: 'typescript',
};

export function age(state: StoreState = initialState, action: AgeActionType): StoreState {
  switch (action.type) {
    case INCREMENT_AGE:
      return { ...state, age: state.age + 1 };
    case DECREMENT_AGE:
      return { ...state, age: Math.max(1, state.age - 1) };
    default:
      return state;
  }
}