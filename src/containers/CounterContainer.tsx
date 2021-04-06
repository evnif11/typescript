import * as React from 'react';
import Counter from 'components/Counter';
import { actionCreators as counterActions } from 'store/modules/counter';
import { connect } from 'react-redux';
import { StoreState } from 'store/modules';
import { bindActionCreators } from 'redux';

type Props = {
  value: number;
  CounterActions: typeof counterActions;
};

class CounterContainers extends React.Component<Props> {
  onIncrement = () => {
    const { CounterActions } = this.props;
    CounterActions.increment();
  }
  onDecrement = () => {
    const { CounterActions } = this.props;
    CounterActions.decrement();
  }
  render(){
    const { onIncrement, onDecrement } = this;
    const { value } = this.props;
    return (
      <Counter
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        value={value}
      />
    );
  }
}

export default connect(
  ({ counter }: StoreState) => ({
    value: counter.value
  }),
  (dispatch) => ({
    CounterActions: bindActionCreators(counterActions, dispatch)
  })
)(CounterContainers);
