import { useState } from "react";
import { getStorageData, setStorageData } from "../services/localData";
import { Button, Container, Table } from "react-bootstrap";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router";

const HomePage = () => {
  const navigate = useNavigate();
  let [books, setBooks] = useState(getStorageData());
  let [search, setSearch] = useState("");

  const handleDelete = (id) => {
    // console.log(id)
    books = books.filter((book) => book.id != id);
    setBooks(books);
    setStorageData(books);
  };

  const handleEdit = (id) => {
    navigate(`/edit-book/${id}`);
  };

  const handleChanged = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = () => {
    let data = [...books];
    let updatedData = data.filter((book) => {
      return (
        book.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
        book.category
          .toLocaleLowerCase()
          .includes(search.toLocaleLowerCase()) ||
        book.price.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      );
    });
    setBooks(updatedData);
    setSearch("");
  };
  const handleClear = () => {
    let data = getStorageData();
    setBooks(data);
  };

  const handleSorting = (type, field) => {
    let data = [...books];
    let updatedData;
    if (type == "asc") {
      if (field == "price") {
        updatedData = data.sort((a, b) => {
          return a[field] - b[field];
        });
      } else {
        updatedData = data.sort((a, b) => {
          return a[field].localeCompare(b[field]);
        });
      }
    } else {
      if (field == "price") {
        updatedData = data.sort((a, b) => {
          return b[field] - a[field];
        });
      } else {
        updatedData = data.sort((a, b) => {
          return b[field].localeCompare(a[field]);
        });
      }
    }

    setBooks(updatedData);
  };

  // const handleAsc = () => {
  //   let data = [...books];

  //   let updatedData = data.sort((a,b) => {
  //     return a.title.localeCompare(b.title)
  //   })
  //   setBooks(updatedData);
  // }
  // const handleDesc = () => {
  //   let data = [...books];

  //   let updatedData = data.sort((a,b) => {
  //     return b.title.localeCompare(a.title)
  //   })
  //   setBooks(updatedData);
  // }

  return (
    <>
      <Container className="mt-3">
        <h3>Home Page</h3>
        {books.length == 0 ? (
          <h4>Not Data Found</h4>
        ) : (
          <div>
            <div className="mb-3 d-flex gap-2">
              <input
                type="text"
                name="search"
                value={search}
                onChange={handleChanged}
              />
              <Button onClick={handleSearch}>Search</Button>
              <Button onClick={handleClear}>Clear</Button>
              {/* <Button variant="warning" onClick={() => handleSorting("asc")}>
                Asc
              </Button>
              <Button variant="warning" onClick={() => handleSorting("desc")}>
                Desc
              </Button> */}
            </div>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>
                    Title{" "}
                    <Button onClick={() => handleSorting("asc", "title")}>
                      ⬆
                    </Button>{" "}
                    <Button onClick={() => handleSorting("desc", "title")}>
                      ⬇
                    </Button>
                  </th>
                  <th>Desc</th>
                  <th>
                    Category{" "}
                    <Button onClick={() => handleSorting("asc", "category")}>
                      ⬆
                    </Button>{" "}
                    <Button onClick={() => handleSorting("desc", "category")}>
                      ⬇
                    </Button>
                  </th>
                  <th>
                    Price{" "}
                    <Button onClick={() => handleSorting("asc", "price")}>
                      ⬆
                    </Button>{" "}
                    <Button onClick={() => handleSorting("desc", "price")}>
                      ⬇
                    </Button>
                  </th>
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
                      <Button onClick={() => handleEdit(book.id)}>
                        <FaEdit />
                      </Button>
                    </td>
                    <td>
                      <Button
                        variant="danger"
                        onClick={() => handleDelete(book.id)}
                      >
                        <FaTrash />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        )}
      </Container>
    </>
  );
};

export default HomePage;
