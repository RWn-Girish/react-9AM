import { useCallback, useState } from "react";
import Button from "./Button";
import Test from "./Test";

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleInc = useCallback(() => {
        setCount(count => count + 1);
    }, []);
    
    const handleDec = useCallback(() => {
        setCount(count => count - 1);
    }, [])

    return (
        <>
            <h2>Counter App : {count}</h2>
            <Test />
            {/* <button onClick={handleInc}>Increment</button> &nbsp;
            <button onClick={handleDec}>Decrement</button> */}
            <Button name={"Increment"} handelClick={handleInc}/>
            <Button name={"Decrement"} handelClick={handleDec} />
        </>
    )
};

export default Counter;