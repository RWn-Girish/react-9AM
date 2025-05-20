import { memo } from "react";

const Button = memo(({name, handelClick}) => {
    console.log("Render Ele: ==> ", name);
    return (
        <button onClick={handelClick}>{name}</button>
    )
});

export default Button;