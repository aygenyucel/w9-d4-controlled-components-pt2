import { Component } from "react";
import { Card, Col } from "react-bootstrap";
import CommentArea from "./CommentArea";
import "./SingleBook.css";

class SingleBook extends Component {
  state = {
    isSelected: false,
    selectedBook: null,
  };

  render() {
    let { singleBookObject, key } = this.props;

    return (
      <Col xs={6} md={4} lg={3} className="mb-3 d-flex flex-column" key={key}>
        <Card
          onClick={() => {
            this.setState({
              isSelected: !this.state.isSelected,
              selectedBook: singleBookObject,
            });
            console.log("CLICKED!", this.state.selectedBook);
          }}
          className={
            this.state.isSelected ? "card-selected" : "card-not-selected"
          }
        >
          <Card.Img variant="top" src={singleBookObject.img} />
          <Card.Body className="d-flex align-items-center justify-content-center">
            <Card.Title>{singleBookObject.title}</Card.Title>
          </Card.Body>
        </Card>
        {this.state.isSelected && (
          <CommentArea selectedBook={this.state.selectedBook} />
        )}
      </Col>
    );
  }
}

export default SingleBook;
