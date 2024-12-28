import { Box, CircularProgress } from "@mui/material";
import * as theme from "./PreLoaderThemes";
const PreLoader = () => {
  return (
    <Box sx={theme.PreLoaderWrapper}>
      <CircularProgress sx={theme.PreLoader} />
    </Box>
  );
};

export default PreLoader;
