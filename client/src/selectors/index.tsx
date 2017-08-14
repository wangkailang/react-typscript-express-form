import { createSelector } from 'reselect';
import { StoreState } from '../types/index';
import * as componentSelectores from './components';
import * as lodash from 'lodash';

const selectors = lodash.assign(
  componentSelectores,
)

export function filterSelectors(...args: Array<any>) {
  // 筛选出需要取的数据的stateSelector
  const mapStateToProps = (state: StoreState) => {
    const inputSelectors: any = args.map(s => {
      const selector = `${s}Selector`;
      if (!selectors.hasOwnProperty(selector)) {
        throw new Error(`filterSelectors: No selector named: ${selector}`);
      }
      return selectors[selector];
    });
    return createSelector(
      inputSelectors,
      (...selected: Array<any>) => lodash.zipObject(args, selected),
    )(state);
  }
  return mapStateToProps;
}