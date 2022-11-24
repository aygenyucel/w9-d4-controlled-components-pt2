import { Component } from "react";
import { Container, Form, Row } from "react-bootstrap";
import fantasyBooks from "../booksData/fantasy.json";
import SingleBook from "./SingleBook";

class BookList extends Component {
  state = {
    search: "",
    filteredBooks: [],
  };

  render() {
    let { listOfBooks = fantasyBooks } = this.props;

    const filterBook = (listOfBooks, search) => {
      return listOfBooks.filter((book) =>
        book.title.toLowerCase().includes(search)
      );
    };

    return (
      <Container>
        <hr />
        <div>Fantasy Books:</div>
        <br />
        <div>
          <Form className="d-flex">
            <Form.Control
              type="text"
              placeholder="Search in Fantasy books..."
              onChange={(e) =>
                this.setState({
                  search: e.target.value,
                  filteredBooks: filterBook(listOfBooks, e.target.value),
                })
              }
            />
          </Form>
        </div>
        <br />
        <Row>
          {this.state.search === ""
            ? listOfBooks.map((book) => <SingleBook singleBookObject={book} />)
            : this.state.filteredBooks.map((book) => (
                <SingleBook singleBookObject={book} />
              ))}
        </Row>
      </Container>
    );
  }
}

export default BookList;
