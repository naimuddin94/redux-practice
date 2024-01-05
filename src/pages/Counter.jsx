import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
} from "../features/counter/counterSlice";
import { useState } from "react";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(0);

  const addValue = Number(incrementAmount) || 0;

  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  };
  return (
    <section className="w-fit p-10 mx-auto">
      <h1 className="text-3xl font-bold text-center">Counter: {count}</h1>
      <div className="flex justify-center gap-3 mt-5">
        <button
          className="btn btn-circle btn-accent"
          onClick={() => dispatch(increment())}
        >
          ➕
        </button>
        <button
          className="btn btn-circle btn-secondary"
          onClick={() => dispatch(decrement())}
        >
          ➖
        </button>
      </div>

      <div className="mt-5 text-center">
        <input
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
          type="text"
          placeholder="Type here"
          className="input input-bordered input-secondary w-28"
        />
        <div className="flex gap-2 justify-center mt-5">
          <button
            className="btn btn-warning"
            onClick={() => dispatch(incrementByAmount(addValue))}
          >
            Add Amount
          </button>
          <button className="btn btn-secondary" onClick={resetAll}>
            Reset
          </button>
        </div>
      </div>
    </section>
  );
};

export default Counter;
