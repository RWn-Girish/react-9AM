import { useState } from "react";

const ControlComp = () => {

    const styleObj = {border: "1px dashed red", margin: "5px"}

    // State handle input
    let [fname, setFname] = useState("");
    let [email, setEmail] = useState("");

    const handleName = (e) => {
            setFname(e.target.value);
    }
    const handleEmail = (e) => {
            setEmail(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Form Submitted....");
        console.log("Fname ===> ", fname);
        console.log("Email ===> ", email);

        setFname("");
        setEmail("");
    }


    return(
        <>
            <h2 className="">Control Component</h2>
            <form style={styleObj} onSubmit={handleSubmit}>
                <label>Name: </label>
                <input type="text" name="fname" value={fname} onChange={handleName} />
                <br />
                <br />
                <label>Email: </label>
                <input type="email" name="email" value={email} onChange={handleEmail} />
                <br />
                <br />
                <button>Submit</button>
            </form>
        </>
    )
};

export default ControlComp;