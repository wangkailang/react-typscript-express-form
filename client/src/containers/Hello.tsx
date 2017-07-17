import Hello from '../components/Hello';
import * as actions from '../actions';
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
export function mapDispatchToProps(dispatch: Dispatch<actions.AgeAction>) {
  return {
    onIncrement: () => dispatch(actions.incrementAge()),
    onDecrement: () => dispatch(actions.decrementAge()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);