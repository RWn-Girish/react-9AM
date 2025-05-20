import { memo, useMemo } from "react";

const Test = memo(() => {
    const total = useMemo(() => {
        let sum = 0;
        for(let i = 1; i<=152000000; i++){
            sum += i;
        }
        return sum;
    }, [])

    return (
        <>
            <p>Total is: {total}</p>
        </>
    )
});


export default Test;