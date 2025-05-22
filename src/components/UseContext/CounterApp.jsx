import { useReducer } from "react";
import { myReducer } from "../../services/myReducer";

const CounterApp = () => {
    let initialState = {
        count: 10
    }

    const [val, dispatch] = useReducer(myReducer, initialState);

    const handleInc = () => {
        // state update
        dispatch({
            type: "INC"
        })
    }
    const handleDec = () => {
        // state update
        dispatch({
            type: "DEC"
        })
    }
    const handleReset = () => {
        // state update
        dispatch({
            type: "RESET"
        })
    }
    return(
        <>
            <h1>
                Counter App : {val.count}
            </h1>

            <button onClick={handleInc}>Increment</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleDec}>Decrement</button>
        </>
    )
};

export default CounterApp;