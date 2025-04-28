import { useState } from "react";

const ValidationForm = ({title, name}) => {
  const initalState = {
    fname: "",
    lname: "",
    email: "",
    password: "",
    mobile: "",
    gender: "",
  };
  const [inputForm, setInputForm] = useState(initalState);

  const [error, setError] = useState({});

  const handleChanged = (e) => {
    // console.log(e.target);
    const { name, value } = e.target;

    setInputForm({
      ...inputForm,
      [name]: value,
    });
  };

  const validation = () => {
    let errorList = {};

    if (inputForm.fname == "") {
      errorList.fnameError = "Firstname is Required";
    }

    if (inputForm.lname == "") {
      errorList.lnameError = "Lastname is Required";
    }
    if (inputForm.email == "") {
      errorList.emailError = "Email is Required";
    }
    if (inputForm.password == "") {
      errorList.passError = "Password is Required";
    } else if (inputForm.password.length < 5) {
      errorList.passError = "Password length is minimum 6 character.";
    }

    if (inputForm.mobile == "") {
      errorList.mobileError = "Mobile is Required";
    } else if (inputForm.mobile.length != 10) {
      errorList.mobileError = "Mobile Number is Not Valid";
    }

    if (inputForm.gender == "") {
      errorList.genderError = "Gender is Required";
    }

    setError(errorList);
    if (Object.keys(errorList).length > 0) {
      return false;
    } else {
      return true;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validation()) {
      console.log("Form Submit...", inputForm);
      setInputForm(initalState);
    }
  };
  return (
    <>
      <h2>{title} </h2>
      <form onSubmit={handleSubmit}>
        <label>Firstname: </label>
        <input
          type="text"
          name="fname"
          value={inputForm.fname}
          onChange={handleChanged}
          style={{ borderColor: error.fnameError ? "red" : "" }}
        />
        {error.fnameError ? <i>{error.fnameError}</i> : ""}
        <br />
        <br />
        <label>Lastname: </label>
        <input
          type="text"
          name="lname"
          value={inputForm.lname}
          onChange={handleChanged}
        />
        {error.lnameError ? <i>{error.lnameError}</i> : ""}
        <br />
        <br />
        <label>Email: </label>
        <input
          type="email"
          name="email"
          value={inputForm.email}
          onChange={handleChanged}
        />
        {error.emailError ? <i>{error.emailError}</i> : ""}
        <br />
        <br />
        <label>password: </label>
        <input
          type="password"
          name="password"
          value={inputForm.password}
          onChange={handleChanged}
        />
        {error.passError ? <i>{error.passError}</i> : ""}
        <br />
        <br />
        <label>Gender: </label>
        <input
          type="radio"
          name="gender"
          value="Male"
          onChange={handleChanged}
        />
        Male
        <input
          type="radio"
          name="gender"
          value="Female"
          onChange={handleChanged}
        />
        Female
        {error.genderError ? <i>{error.genderError}</i> : ""}
        <br />
        <br />
        <label>MobileNo: </label>
        <input
          type="text"
          name="mobile"
          value={inputForm.mobile}
          onChange={handleChanged}
        />
        {error.mobileError ? <i>{error.mobileError}</i> : ""}
        <br />
        <br />
        <button>Submit</button>
      </form>
    </>
  );
};

export default ValidationForm;
