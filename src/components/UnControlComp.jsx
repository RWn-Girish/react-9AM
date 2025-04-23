import { useRef } from "react";

const UnControlComp = () => {
    // DOM Changed -> useRef

    let fnameRef = useRef();
    let emailRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Form Submit...");
        console.log("Fname ===> ", fnameRef.current.value)
        console.log("Email ===> ", emailRef.current.value)

        fnameRef.current.value = ""
        emailRef.current.value = ""
    }

    return (
        <>
            <h2>UnControl Component</h2>
            <form onSubmit={handleSubmit}>
                <label>Name: </label>
                <input type="text" name="fname" ref={fnameRef} />
                <br />
                <br />
                <label>Email: </label>
                <input type="email" name="email" ref={emailRef} />
                <br />
                <br />
                <button>Submit</button>
            </form>
        </>
    )
};

export default UnControlComp;