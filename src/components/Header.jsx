import { Box, Typography } from "@mui/material";
import CustomLink from "../UI/CustomLink";
import * as theme from "./HeaderThemes";

const Header = () => {
  return (
    <Box sx={theme.Header}>
      <Box style={theme.HeaderContentWrapper}>
        <CustomLink to="/">
          <Box>
            <Typography variant="h1" sx={theme.HeaderLogo}>
              Store
            </Typography>
          </Box>
        </CustomLink>
        <Box style={theme.LinkWrapper}>
          <CustomLink to="cart">Корзина</CustomLink>
          <CustomLink to="favorites">Избранное</CustomLink>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
