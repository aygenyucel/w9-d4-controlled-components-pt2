import { Component } from "react";
import { Card, Col } from "react-bootstrap";
import "./SingleBook.css";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  render() {
    let { singleBookObject } = this.props;

    const toggleClass = () => {
      this.setState({ selected: !this.state.selected });
    };
    return (
      <Col xs={6} md={4} lg={3} className="mb-3" key={singleBookObject.asin}>
        <Card
          onClick={toggleClass}
          className={
            this.state.selected ? "card-selected" : "card-not-selected"
          }
        >
          <Card.Img variant="top" src={singleBookObject.img} />
          <Card.Body className="d-flex align-items-center justify-content-center">
            <Card.Title>{singleBookObject.title}</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleBook;
