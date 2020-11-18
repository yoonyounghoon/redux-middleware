import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import Counter from "../components/Counter";
import {
  increase,
  decrease,
  decreaseAsync,
  increaseAsync,
} from "../modules/counter";

const CounterContainer = () => {
  const number = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();
  return (
    <Counter
      number={number}
      onIncrease={() => dispatch(increaseAsync())}
      onDecrease={() => dispatch(decreaseAsync())}
    />
  );
};

export default CounterContainer;
