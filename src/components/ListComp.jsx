import { Fragment, useRef, useState } from "react";


const ListComp = () => {
    const [listItem, setListItem] = useState(['Home','Business', 'About', 'Contact']);

    let inputRef = useRef()
    let inputRef1 = useRef()

    const handleClick = () => {
        console.log(inputRef.current);
        console.log(inputRef1.current);
    }

    return (
        <Fragment>
            {/* <h2>Static List</h2>
            <ul>
                <li>{listItem[0]}</li>
                <li>{listItem[1]}</li>
                <li>{listItem[2]}</li>
                <li>{listItem[3]}</li>
                <li>{listItem[4]}</li>
            </ul>
            <hr /> */}
            <h2 ref={inputRef}>Dynamic List</h2>
            <ol>
            {
                listItem.map((item, i) => (
                        <li key={i} >{item}</li>
                ))
            }
            </ol>
            <input type="text" ref={inputRef1}/>
            <button onClick={handleClick} >Submit</button>
        </Fragment>
    )
};


export default ListComp;