import React from "react";
import styled from "styled-components";

import Button from "@/shared/ui2/Button";
import Spinner from "@/shared/ui2/Spinner";

import { useCounterViewModel } from "../controller/counterViewModel";
import { useCounterStoreImpl } from "../data/counterStoreImpl";

const Count = styled.span`
  font-size: 1.375rem;
  min-width: 4rem;
  display: inline-block;
`;

const CounterView = () => {
  const store = useCounterStoreImpl();
  const {
    count,
    canDecrement,
    isLoading,
    getCounter,
    incrementCounter,
    decrementCounter
  } = useCounterViewModel(store);

  React.useEffect(() => {
    getCounter();
  }, [getCounter]);

  return (
    <div className="App">
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Button onClick={decrementCounter} disabled={!canDecrement}>
            dec
          </Button>
          <Count>{count}</Count>
          <Button onClick={incrementCounter}>inc</Button>
        </>
      )}
    </div>
  );
};

export default CounterView;