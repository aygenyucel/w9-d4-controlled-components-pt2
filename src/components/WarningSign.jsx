import { Alert } from "react-bootstrap";

function WarningSign(props) {
  let {
    customText = "this is a danger alert created in functional component!",
  } = props;

  return <Alert variant="danger">{customText}</Alert>;
}

export default WarningSign;
