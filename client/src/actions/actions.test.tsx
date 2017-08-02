import { incrementAge } from './age';
import * as constants from '../constants';

describe('age actions', () => {
  it('should have a type of INCREMENT_AGE', () => {
    expect(incrementAge()).toEqual({
      type: constants.INCREMENT_AGE
    });
  })
})