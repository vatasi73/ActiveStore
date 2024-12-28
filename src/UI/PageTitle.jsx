import { Box, Typography } from "@mui/material";
import * as theme from "./PageTitleThemes";
const PageTitle = ({ title }) => {
  return (
    <Box sx={theme.TitleWrapper}>
      <Typography variant="h4">{title}</Typography>
    </Box>
  );
};

export default PageTitle;
