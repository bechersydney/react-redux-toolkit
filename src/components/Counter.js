import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../store/counter-store";
import classes from "./Counter.module.css";

const Counter = () => {
    const dispatch = useDispatch();
    const { value, isDataShown } = useSelector((state) => state.counter); // using useSelector you can directly get the slice of the state in store
    const toggleCounterHandler = () => {
        dispatch(counterActions.toggle());
    };
    const incrementHandler = (value) => {
        dispatch(counterActions.increment(value));
    };
    const decrementHandler = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {isDataShown && <div className={classes.value}>{value}</div>}
            <div>
                <button onClick={() => incrementHandler(1)}>increment</button>
                <button onClick={() => incrementHandler(5)}>
                    increment by 5
                </button>
                <button onClick={decrementHandler}>decrement</button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

export default Counter;
