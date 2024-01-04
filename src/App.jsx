import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./features/counter/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
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
    </section>
  );
}

export default App;
