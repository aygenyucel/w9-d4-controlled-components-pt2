//CommentArea should fetch and store the comments for the selected book, and contains two sub-components: CommentsList and AddComment.
import { Component } from "react";
import CommentList from "./CommentList";

class CommentArea extends Component {
  state = {
    selectedBookComments: [],
  };

  fetchAllComments = async () => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${this.props.selectedBook.asin}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZmI2NWQ0YmUzZDAwMTU4NDYwMmIiLCJpYXQiOjE2NjkyOTA3NjIsImV4cCI6MTY3MDUwMDM2Mn0.9Ka1gVwmbV3Nd01ZwPXXs9H_h5FbE58DgtwP3TQ-YTk",
          },
        }
      );

      if (response.ok) {
        let data = await response.json();
        this.setState({
          selectedBookComments: data,
        });
        console.log("selectedBookComments:", this.state.selectedBookComments);
        console.log(this.state.selectedBookId);
      } else {
        console.log("error when fetching the comments :(");
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.fetchAllComments();
  }

  render() {
    let { selectedBook } = this.props;

    return (
      <>
        <CommentList selectedBookComments={this.state.selectedBookComments} />
      </>
    );
  }
}

export default CommentArea;
