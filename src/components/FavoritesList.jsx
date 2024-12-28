import { useDispatch, useSelector } from "react-redux";

import CardWrapper from "../UI/CardWrapper";
import Favorites from "./Favorites";
import { Box } from "@mui/material";
import PageTitle from "../UI/PageTitle";
import PageSubtitle from "../UI/PageSubtitle";
import { removeFromFavorites, selectFavorites } from "../redux/productSlice";
import { useCallback } from "react";

const FavoritesList = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  const handleRemoveFromFavorites = useCallback(
    (product) => {
      dispatch(removeFromFavorites(product));
    },
    [dispatch]
  );

  return (
    <Box>
      <PageTitle title="Избранное" />
      <CardWrapper>
        {favorites.length === 0 ? (
          <PageSubtitle subtitle="Нет товаров в избранном" />
        ) : (
          favorites.map((product) => (
            <Favorites
              key={product.id}
              product={product}
              onRemove={handleRemoveFromFavorites}
            />
          ))
        )}
      </CardWrapper>
    </Box>
  );
};

export default FavoritesList;
