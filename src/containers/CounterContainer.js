import React from "react";
import { connect } from "react-redux";
import Counter from "../components/Counter";
import {
  increase,
  decrease,
  increaseAsync,
  decreaseAsync,
} from "../modules/counter";

const CounterContainer = ({
  increase,
  decrease,
  number,
  increaseAsync,
  decreaseAsync,
}) => {
  return (
    <div>
      <Counter
        number={number}
        onIncrease={increaseAsync}
        onDecrease={decreaseAsync}
      />
    </div>
  );
};

export default connect((state) => ({ number: state.counter }), {
  increaseAsync,
  decreaseAsync,
})(CounterContainer);
