import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import generateUniqueId from "generate-unique-id";
import BookCard from "./BookCard";

const getStorageData = () => {
  let books = JSON.parse(localStorage.getItem("Books"));
  return books ? books : [];
};

const BookStore = () => {
  const intialState = {
    id: "",
    title: "",
    desc: "",
    category: "",
    price: "",
    image: "",
  };
  const [inputForm, setInputForm] = useState(intialState);
  const [storageData, setStorageData] = useState(getStorageData());
  const [isEdit, setIsEdit] = useState(false);

  const handleChanged = (e) => {
    const { name, value } = e.target;

    setInputForm({
      ...inputForm,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isEdit) {
      // let id = Math.floor(Math.random() * 100000);
      let id = generateUniqueId({
        useLetters: false,
        length: 5,
      });
      inputForm.id = id;
      console.log("Submit Form ==> ", inputForm);
      setStorageData([...storageData, inputForm]);
      
    }else{
      let data = storageData.map((book)=> {
        if(book.id == inputForm.id){
          return inputForm
        }else{
          return book
        }
      })
      setStorageData(data);
      setIsEdit(false)
    }

    setInputForm(intialState);
  };

  const handelEdit = (id) => {
    // console.log(id);
    let data = storageData.find((book) => book.id == id);
    // console.log(data);
    setInputForm(data);
    setIsEdit(true);
  };
  
  const handelDelete = (id) => {
    // console.log(id);
    let data = storageData.filter((book) => book.id != id);
    // console.log(data)
    setStorageData(data);
  };

  useEffect(() => {
    localStorage.setItem("Books", JSON.stringify(storageData));
  }, [storageData]);

  return (
    <>
      <Container>
        <h2>Book Store</h2>
        <Form onSubmit={handleSubmit}>
        <Form.Control
                type="text"
                placeholder="Enter Book Title"
                name="id"
                value={inputForm.id}
                onChange={handleChanged}
                hidden
        />
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
                <option value="Education" selected={isEdit && inputForm.category == 'Education'}>Education</option>
                <option value="Comady" selected={isEdit && inputForm.category == 'Comady'}>Comady</option>
                <option value="Story" selected={isEdit && inputForm.category == 'Story'}>Story</option>
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
          <Button type="submit">{isEdit ? "Update"  : "Add"} Book</Button>
        </Form>
        <hr />
        <h2>Books List</h2>
        <BookCard booksData={storageData} handelDelete={handelDelete} handelEdit={handelEdit} />
      </Container>
    </>
  );
};

export default BookStore;
