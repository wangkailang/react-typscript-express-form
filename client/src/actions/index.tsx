import * as ageActions from './age';
import * as toggleActions from './toggle';
import * as lodash from 'lodash';

const actions: any = lodash.assign(
  ageActions,
  toggleActions,
);

// export const filterDispatchers = (...args: Array<string>) => {
//   args.forEach((action: string) => {
//     if (!actions.hasOwnProperty(action)) {
//       throw new Error(`filterDispatchers: No Dispatcher named: ${action}`);
//     }
//   });
//   return lodash.pick(actions, args);
// }

export default actions;