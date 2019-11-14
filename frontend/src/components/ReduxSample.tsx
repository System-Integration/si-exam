import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../reducers/slices/counterSlice";
import { IGlobalState } from "../reducers/rootReducers";

export const ReduxSample: React.FC = () => {
  const counter = useSelector((state: IGlobalState) => state.counter);
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <h1 data-testid="count-value">{counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </React.Fragment>
  );
};
