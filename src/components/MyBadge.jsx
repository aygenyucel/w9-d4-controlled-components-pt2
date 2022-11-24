import { Badge } from "react-bootstrap";

const MyBadge = (props) => {
  let { customText = "This is a badge component", customColor = "success" } =
    props;
  return <Badge variant={customColor}>{customText}</Badge>;
};

export default MyBadge;
