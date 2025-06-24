import { useEffect } from "react";
import { Container, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { signOutAsync } from "../services/Actions/authAction";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {user} = useSelector(state => state.authReducer);

  const handleLogOut = () => {
    dispatch(signOutAsync());
  }
  useEffect(()=> {
    if(!user){
      navigate("/sign-in");
    }
  }, [user]);
  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">Appy Book Store</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Link to={"/add-book"}>Add Book</Link>
            </Navbar.Text>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Navbar.Text>
              {!user ?<Link to={"/sign-in"}>Login</Link> : <div><p>{user.email}</p> <button onClick={handleLogOut}>LogOut</button></div> }
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
