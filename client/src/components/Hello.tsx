import * as React from 'react';

export interface Props {
  props: {
    age: {
      name: string;
      age?: number;
    }
  };
  onIncrement?: () => void;
  onDecrement?: () => void;
}

function Hello({ props: { age }, onIncrement, onDecrement }: Props) {
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