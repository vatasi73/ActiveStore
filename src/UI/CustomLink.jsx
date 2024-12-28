import { Link } from "react-router-dom";
import * as theme from "./CustomLinkThemes";
const CustomLink = ({ to, children }) => {
  return (
    <Link to={to} style={theme.CustomLink}>
      {children}
    </Link>
  );
};

export default CustomLink;
