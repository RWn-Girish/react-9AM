import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { getStorageData, setStorageData } from "../services/localData";
import { useNavigate, useParams } from "react-router";

const EditBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const intialState = {
    id: "",
    title: "",
    desc: "",
    category: "",
    price: "",
    image: "",
  };
  const [inputForm, setInputForm] = useState(intialState);

  const handleChanged = (e) => {
    const { name, value } = e.target;
    setInputForm({
      ...inputForm,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let books = getStorageData();
    let updatedData = books.map((book)=> {
      if(book.id == inputForm.id){
        return inputForm
      }else{
        return book
      }
    })
    setStorageData(updatedData);
    setInputForm(intialState);
    navigate("/");
  };

  useEffect(()=> {
    let books = getStorageData();
    let singleBook = books.find((book) => book.id == id);
    setInputForm(singleBook)
  }, [id]);

  return (
    <>
      <Container className="mt-4">
        <h2>Edit Book Page</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Title
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="text"
                placeholder="Enter Book Title"
                name="title"
                value={inputForm.title}
                onChange={handleChanged}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Description
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="text"
                placeholder="Enter Book Description"
                name="desc"
                value={inputForm.desc}
                onChange={handleChanged}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Price
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="number"
                placeholder="Enter Book Price"
                name="price"
                value={inputForm.price}
                onChange={handleChanged}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Category
            </Form.Label>
            <Col sm="10">
              <Form.Select
                aria-label="Default select example"
                name="category"
                onChange={handleChanged}
              >
                <option>Select Category</option>
                <option value="Education" selected={inputForm.category == 'Education'}>Education</option>
                <option value="Comady" selected={inputForm.category == 'Comady'}>Comady</option>
                <option value="Story" selected={inputForm.category == 'Story'}>Story</option>
              </Form.Select>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Book Image
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="text"
                placeholder="Enter Book Image URL"
                name="image"
                value={inputForm.image}
                onChange={handleChanged}
              />
            </Col>
          </Form.Group>
          <Button type="submit">Edit Book</Button>
        </Form>
      </Container>
    </>
  );
};

export default EditBook;
