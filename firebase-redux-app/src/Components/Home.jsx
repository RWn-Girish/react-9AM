import { Button, Spinner, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useEffect } from "react";
import { deleteBookAsync,  getAllBooksAsync} from "../services/Actions/booksAction";
import { useNavigate } from "react-router";
import { getCurrentUser } from "../services/getUser";
import { toast, ToastContainer} from 'react-toastify';

const Home = () => {
  const user = getCurrentUser();
  console.log("User: ==> ",user);
  const { books, isLoading } = useSelector((state) => state.bookReducer);
  const {name} = useSelector(state => state.counterReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/edit-book/${id}`);
  }
  const handleDelete = (id) => {
    dispatch(deleteBookAsync(id))
    toast.success("Book Delete Success");
  }

  useEffect(() => {
    dispatch(getAllBooksAsync());
    toast.success("Get All Books");
  }, []);
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <h1>Home Page {name}</h1>
      {isLoading ? <div>
      <Spinner animation="grow" variant="primary" />
      <Spinner animation="grow" variant="secondary" />
      <Spinner animation="grow" variant="success" />
      <Spinner animation="grow" variant="danger" />
      <Spinner animation="grow" variant="warning" />
      <Spinner animation="grow" variant="info" />
      <Spinner animation="grow" variant="light" />
      <Spinner animation="grow" variant="dark" />
      </div> : <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Desc</th>
            <th>Category</th>
            <th>Price</th>
            <th>Image</th>
            <th colSpan={2}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td>{book.title}</td>
              <td>{book.desc}</td>
              <td>{book.category}</td>
              <td>{book.price}</td>
              <td>
                <img src={book.image} height={80} />
              </td>
              <td>
                <Button onClick={()=> handleEdit(book.id)}>
                  <FaEdit />
                </Button>
              </td>
              <td>
                <Button onClick={()=> handleDelete(book.id)} variant="danger">
                  <FaTrash />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table> }
      
    </>
  );
};

export default Home;
