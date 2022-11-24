import { Component } from "react";
import { Button, Form } from "react-bootstrap";

class AddComment extends Component {
  state = {
    isClicked: false,
    newComment: {
      author: "example@example.com",
      comment: "",
      rate: "",
      elementId: this.props.selectedBookId,
    },
  };

  onClick = () => {
    this.setState({ isClicked: !this.state.isClicked });
  };

  onChangeHandler = (value, fieldToSet) => {
    this.setState({
      newComment: {
        ...this.state.newComment, // this creates a copy of reservation!
        [fieldToSet]: value,
      },
    });
  };

  onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      // await waits for the promise to complete before moving on
      // (it pauses the execution of your function)

      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/`,
        {
          method: "POST",
          body: JSON.stringify(this.state.newComment),
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZmI2NWQ0YmUzZDAwMTU4NDYwMmIiLCJpYXQiOjE2NjkyOTA3NjIsImV4cCI6MTY3MDUwMDM2Mn0.9Ka1gVwmbV3Nd01ZwPXXs9H_h5FbE58DgtwP3TQ-YTk",
          },
        }
      );
      console.log("response", response);

      if (response.ok) {
        alert("Added your comment!");
        this.setState({
          newComment: {
            comment: "",
            rate: "",
          },
        });
      } else {
        console.log("something went wrong :(");
        // you'll fall here if the server had a problem handling your request
      }
    } catch (error) {
      console.log(error);
      // you'll fall here instead if you have let's say an internet problem
      // or you were never able to contact the server in the first place
    }
  };

  render() {
    return (
      <div>
        {!this.state.isClicked && (
          <Button
            onClick={this.onClick}
            style={{ backgroundColor: "green", fontSize: "0.8rem" }}
          >
            Add Comment
          </Button>
        )}
        {this.state.isClicked && (
          <Form onSubmit={this.onSubmitHandler}>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label className="d-flex justify-content-start">
                Your comment:
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={this.state.newComment.comment}
                onChange={(e) =>
                  this.onChangeHandler(e.target.value, "comment")
                }
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label className="d-flex justify-content-start">
                Your Rate:
              </Form.Label>
              <Form.Control
                as="select"
                value={this.state.newComment.rate}
                onChange={(e) => this.onChangeHandler(e.target.value, "rate")}
                required
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        )}
      </div>
    );
  }
}

export default AddComment;
