import { useEffect, useState } from "react";


const Counter =  ({name, team}) =>  {
    
    const [count, setCount] = useState(10)

    const handleClick = (a) => {
        setCount(count+1)
        console.log("Test: ", a);
    }
   
    const handleDec = () => {
        setCount(count => count-1)
    }

    const handleMouseOver = () => {
        console.log("Mouse Over Event called");
    }
    
    const handleMouseLeave = () => {
        console.log("Mouse Leave Event called");
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

    let hello = () => {
        if(count > 10){
            return <h2>{team}</h2>
        }else{
            return "";
        }
    }

    return (
        <div>
            <h2 onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>Hello {name}</h2>
            {/* {count > 10 ? <h2>{team}</h2> : ""} */}
            {hello()}
            <p>{count}</p>
            <button onClick={()=> handleClick('Hello')}>Increment</button>
            <button onClick={()=> handleDec()}>Decrement</button>
        </div>
    )

}


export default Counter;