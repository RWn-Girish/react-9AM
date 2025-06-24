import { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { signUpAsync } from "../services/Actions/authAction";

const SignUP = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {isCreated, errorMSG} = useSelector(state => state.authReducer);
  const [inputForm, setInputForm] = useState({
    email: "",
    password: "",
    cpassword: "",
  });

  const handleChanged = (e) => {
    const { name, value } = e.target;

    setInputForm({
      ...inputForm,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(inputForm);
    if(inputForm.password == inputForm.cpassword){
      dispatch(signUpAsync(inputForm))
    }
  };

  useEffect(()=> {
    if(isCreated){
      navigate("/sign-in")
    }
  }, [isCreated]);
  return (
    <>
      <h1>SignUP Page</h1>
      {errorMSG ? <p>{errorMSG}</p> : ""}
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">
            Email
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              placeholder="Enter Your Email"
              name="email"
              value={inputForm.email}
              onChange={handleChanged}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">
            Password
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="password"
              placeholder="Enter Your Password"
              name="password"
              value={inputForm.password}
              onChange={handleChanged}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">
            Confirm Password
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="password"
              placeholder="Enter Your Confirm Password"
              name="cpassword"
              value={inputForm.cpassword}
              onChange={handleChanged}
            />
          </Col>
        </Form.Group>
        <Button type="submit">Sign UP</Button>
      </Form>
      <p>
        Already an Account? <Link to={"/sign-in"}>Sign IN</Link>
      </p>
    </>
  );
};

export default SignUP;
