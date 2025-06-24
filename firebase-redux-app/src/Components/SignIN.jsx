import { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { signINAsync } from "../services/Actions/authAction";

const SignIN = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {user, errorMSG} = useSelector(state => state.authReducer);
    const [inputForm, setInputForm] = useState({
        email: "",
        password: ""
    })

    const handleChanged = (e) => {
        const {name, value} = e.target;

        setInputForm({
            ...inputForm,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signINAsync(inputForm));
    }

    useEffect(() => {
      if(user){
        navigate("/")
      }
    }, [user])
  return (
    <>
      <h1>SignIN Page</h1>
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
        <Button type="submit">Sign In</Button>
      </Form>
      <p>Create a New Account? <Link to={"/sign-up"}>Sign UP</Link></p>
    </>
  );
};

export default SignIN;
