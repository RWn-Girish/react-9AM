import { Button, Card } from "react-bootstrap"
import { FaEdit, FaTrash } from "react-icons/fa"

const BookCard = ({booksData, handelDelete, handelEdit}) => {
    return (
        <div className="d-flex m-3 gap-4">
          
          {booksData.map((book) => (
            <Card key={book.id} style={{ width: "18rem" }}>
              <Card.Img variant="top" src={book.image} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>{book.desc}</Card.Text>
                <Card.Text>Price: {book.price}</Card.Text>
                <Card.Text>Category: {book.category}</Card.Text>
                <Button onClick={() => handelEdit(book.id)} variant="primary">
                  <FaEdit />
                </Button>
                &nbsp;
                <Button
                  onClick={() => handelDelete(book.id)}
                  variant="secondary"
                >
                  <FaTrash />
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
    )
};

export default BookCard;