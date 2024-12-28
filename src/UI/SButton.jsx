import { Button, Typography } from "@mui/material";
import * as theme from "./SButtonThemes";
const SButton = ({ text, handleClick, disabled }) => {
  return (
    <Button
      variant="contained"
      disableRipple
      onClick={handleClick}
      disabled={disabled}
      sx={theme.Button}
    >
      <Typography variant="span" sx={theme.ButtonText}>
        {text}
      </Typography>
    </Button>
  );
};

export default SButton;
