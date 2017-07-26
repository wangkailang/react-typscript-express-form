import Hello from '../components/Hello';
import * as ageActions from '../actions/age';
import { StoreState } from '../types/index';
import { connect, Dispatch } from 'react-redux';

// state datas
export function mapStateToProps({ age, name }: StoreState) {
  return {
    age,
    name,
  };
}

// actions
export function mapDispatchToProps(dispatch: Dispatch<ageActions.AgeActionType>) {
  return {
    onIncrement: () => dispatch(ageActions.incrementAge()),
    onDecrement: () => dispatch(ageActions.decrementAge()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);