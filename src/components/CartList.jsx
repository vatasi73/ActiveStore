import { useSelector } from "react-redux";
import Cart from "./Cart";
import CardWrapper from "../UI/CardWrapper";
import { Box } from "@mui/material";
import PageTitle from "../UI/PageTitle";
import PageSubtitle from "../UI/PageSubtitle";
import { selectCart } from "../redux/productSlice";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/productSlice";

const CartList = () => {
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);

  const handleRemoveFromCart = useCallback(
    (product) => {
      dispatch(removeFromCart(product));
    },
    [dispatch]
  );

  return (
    <Box>
      <PageTitle title="Корзина" />
      <CardWrapper>
        {cart.length === 0 ? (
          <PageSubtitle subtitle="Корзина пуста" />
        ) : (
          cart.map((product) => (
            <Cart
              key={product.id}
              product={product}
              onRemove={handleRemoveFromCart}
            />
          ))
        )}
      </CardWrapper>
    </Box>
  );
};

export default CartList;
