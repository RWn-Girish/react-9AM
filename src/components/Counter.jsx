import { useEffect, useState } from "react";


const Counter =  ({name, team}) =>  {
    
    const [count, setCount] = useState(10)

    const handleClick = () => {
        setCount(count+1)
    }

    // useEffect(()=> {
    //     console.log("Every Time Called")
    // });

    // useEffect(()=> {
    //     console.log("Only One Time When Comp Render.")
    // }, []);

    // useEffect(()=> {
    //     console.log("Every Time When Comp Update.")
    // }, [count]);


    return (
        <div>
            <h2>Hello {name}</h2>
            <h2>{team}</h2>
            <p>{count}</p>
            <button onClick={handleClick}>Increment</button>
        </div>
    )

}


export default Counter;