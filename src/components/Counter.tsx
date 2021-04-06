import * as React from 'react';


interface Props {
  value: number;
  onIncrement(): void;
  onDecrement(): void;
}

class Counter extends React.Component<Props> {
  render(){
    const { onDecrement, onIncrement, value } = this.props;
    return (
      <div>
        <h1>카운터</h1>
        <h3>{value}</h3>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
      </div>
    );
  }
}

export default Counter;
