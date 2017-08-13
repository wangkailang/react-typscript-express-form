import * as ageActions from './age';
import * as toggleActions from './toggle';

export interface Actions {
  ageActions: object,
  toggleActions: object,
}

const actions: Actions = {
  ageActions,
  toggleActions,
};

export default actions;