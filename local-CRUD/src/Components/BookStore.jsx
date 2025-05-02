import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import generateUniqueId from 'generate-unique-id';

const getStorageData = () => {
    let books = JSON.parse(localStorage.getItem('Books'))
    return books ? books : []
}

const BookStore = () => {
    const intialState = {
        id: "",
        title: "",
        desc: "",
        category: "",
        price: "",
        image: "",
    }
    const [inputForm, setInputForm] = useState(intialState);
    const [storageData, setStorageData] = useState(getStorageData());

    const handleChanged = (e) => {
        const {name, value} = e.target;

        setInputForm({
            ...inputForm,
            [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // let id = Math.floor(Math.random() * 100000);
        let id = generateUniqueId({
            useLetters: false,
            length: 5
        });
        inputForm.id = id;
        console.log("Submit Form ==> ", inputForm);
        setStorageData([...storageData, inputForm])
        setInputForm(intialState);
    }

    useEffect(()=> {
        localStorage.setItem("Books", JSON.stringify(storageData));
    }, [storageData]);


  return (
    <>
      <Container>
        <h2>Book Store</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group
            as={Row}
            className="mb-3"
          >
            <Form.Label column sm="2">
              Title
            </Form.Label>
            <Col sm="10">
              <Form.Control type="text" placeholder="Enter Book Title" name="title" value={inputForm.title} onChange={handleChanged} />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
          >
            <Form.Label column sm="2">
              Description
            </Form.Label>
            <Col sm="10">
              <Form.Control type="text" placeholder="Enter Book Description" name="desc" value={inputForm.desc} onChange={handleChanged} />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
          >
            <Form.Label column sm="2">
              Price
            </Form.Label>
            <Col sm="10">
              <Form.Control type="number" placeholder="Enter Book Price" name="price" value={inputForm.price} onChange={handleChanged} />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
          >
            <Form.Label column sm="2">
              Category
            </Form.Label>
            <Col sm="10">
              <Form.Select aria-label="Default select example" name="category" onChange={handleChanged}>
                <option>Select Category</option>
                <option value="Eduation">Eduation</option>
                <option value="Comady">Comady</option>
                <option value="Story">Story</option>
              </Form.Select>
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
          >
            <Form.Label column sm="2">
              Book Image
            </Form.Label>
            <Col sm="10">
                <Form.Control type="text" placeholder="Enter Book Image URL" name="image" value={inputForm.image} onChange={handleChanged} />
            </Col>
          </Form.Group>

          <Button type="submit">Add Book</Button>
        </Form>
      </Container>
    </>
  );
};

export default BookStore;
