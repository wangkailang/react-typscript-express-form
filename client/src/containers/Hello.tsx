import Hello from '../components/Hello';
import * as ageActions from '../actions/age';
import { connect, Dispatch } from 'react-redux';
import { filterSelectors } from '../selectors';

// state datas
// export function mapStateToProps(props: { age: any}) {
//   return {
//     props
//   };
// }

// actions
export function mapDispatchToProps(dispatch: Dispatch<ageActions.AgeActionType>) {
  return {
    onIncrement: () => dispatch(ageActions.incrementAge()),
    onDecrement: () => dispatch(ageActions.decrementAge()),
  };
}


export default connect(filterSelectors('age'), mapDispatchToProps)(Hello);