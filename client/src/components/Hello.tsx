import * as React from 'react';

export interface Props {
  name: string;
  age?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

function Hello({ name, age = 1, onIncrement, onDecrement }: Props) {
  if (age <= 0) {
    throw new Error('You could be not right');
  }

  return (
    <div>
      <h2>
        hello {name + ' ' + age}
      </h2>
      <div>
        <button onClick={onDecrement}>-</button>
        <button onClick={onIncrement}>+</button>
      </div>
    </div>
  );
}

export default Hello;