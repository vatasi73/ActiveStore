import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import * as theme from "./SCardThemes";
import DefaultPhoto from "../assets/photo.jpg";

const SCard = ({ children, name, price }) => {
  return (
    <Card sx={theme.Card}>
      <CardMedia style={theme.CardMedia} image={DefaultPhoto} title={name} />
      <CardContent sx={theme.CardContent}>
        <Typography variant="h3" style={theme.TextProductName}>
          {name},
        </Typography>
        <Typography variant="p">Цена: {price} ₽</Typography>
      </CardContent>
      <CardActions>{children}</CardActions>
    </Card>
  );
};

export default SCard;
