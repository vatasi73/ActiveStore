import { Typography } from "@mui/material";
import * as theme from "./ErrorMsgThemes";
const ErrorMsg = () => {
  return (
    <Typography sx={theme.ErrorMsg}>Ошибка! Что то пошло не так!</Typography>
  );
};

export default ErrorMsg;
