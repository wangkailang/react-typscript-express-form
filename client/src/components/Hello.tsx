import * as React from 'react';
import { IncrementAge, DecrementAge } from '../actions/interface';

interface Props {
  age: {
    age: number,
    name: string,
  },
  onIncrement: () => IncrementAge,
  onDecrement: () => DecrementAge,
}

const Hello: React.SFC<Props> = props => {
  const { age, onDecrement, onIncrement } = props;
  return (
    <div>
      <h2>
        hello {age.name + ' ' + age.age}
      </h2>
      <div>
        <button onClick={onDecrement}>-</button>
        <button onClick={onIncrement}>+</button>
      </div>
    </div>
  );
}

export default Hello;