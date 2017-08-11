import { AgeActionType } from '../actions/age';
import { INCREMENT_AGE, DECREMENT_AGE } from '../constants/index';

interface State {
  age: number,
  name: string,
}
const initialState = {
  age: 1,
  name: 'typescript',
};

export function age(state: State = initialState, action: AgeActionType) {
  switch (action.type) {
    case INCREMENT_AGE:
      return { ...state, age: state.age + 1 };
    case DECREMENT_AGE:
      return { ...state, age: Math.max(1, state.age - 1) };
    default:
      return state;
  }
}