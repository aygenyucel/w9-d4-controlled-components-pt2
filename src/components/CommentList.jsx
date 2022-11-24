import { ListGroup } from "react-bootstrap";

const CommentList = (props) => {
  let { selectedBookComments } = props;
  return (
    <ListGroup className="my-3" style={{ backgroundColor: "green" }}>
      {selectedBookComments?.map((comment) => (
        <ListGroup.Item>
          <div>
            <strong>"{comment.comment}"</strong>
          </div>
          <div>
            <span className="text-success">{comment.rate}</span>/5
          </div>
          {/* <div>elementId: {comment.elementId}</div> */}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default CommentList;
