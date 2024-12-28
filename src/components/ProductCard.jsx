import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  addToFavorites,
  selectCartStatus,
  selectFavoritesStatus,
} from "../redux/productSlice";
import SButton from "../UI/SButton";
import { Box } from "@mui/material";
import * as theme from "./ProductCardThemes";
import SCard from "../UI/SCard";
import { memo } from "react";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const inCart = useSelector(selectCartStatus(product.id));
  const inFavorites = useSelector(selectFavoritesStatus(product.id));

  const handleAddToCart = () => {
    if (!inCart) {
      dispatch(addToCart(product));
    }
  };

  const handleAddToFavorites = () => {
    if (!inFavorites) {
      dispatch(addToFavorites(product));
    }
  };

  return (
    <SCard photo={product.photo} name={product.name} price={product.price}>
      <>
        {product.quantity > 0 ? (
          <Box sx={theme.CartFavoritesButtonWrapper}>
            <SButton
              text={inCart ? "В корзине" : "В корзину"}
              handleClick={inCart ? null : handleAddToCart}
              disabled={inCart}
            />
            <SButton
              text={inFavorites ? "В избранном" : "В избранное"}
              handleClick={inFavorites ? null : handleAddToFavorites}
              disabled={inFavorites}
            />
          </Box>
        ) : (
          <SButton text="Отсутствует" disabled />
        )}
      </>
    </SCard>
  );
};

export default memo(ProductCard);
