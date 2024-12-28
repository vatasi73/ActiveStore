import { Box } from "@mui/material";
import * as theme from "./CardWrapperThemes";

const CardWrapper = ({ children }) => {
  return <Box style={theme.CardWrapper}>{children}</Box>;
};

export default CardWrapper;
