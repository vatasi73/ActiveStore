import ProductCard from "./ProductCard";

import CardWrapper from "../UI/CardWrapper";
import { Box } from "@mui/material";
import PageTitle from "../UI/PageTitle";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  fetchItems,
  selectItems,
  selectItemsStatus,
} from "../redux/FetchProductSlice";

import ErrorMsg from "./ErrorMsg";
import PreLoader from "./PreLoader";

const ProductList = () => {
  const dispatch = useDispatch();

  const items = useSelector(selectItems);
  const status = useSelector(selectItemsStatus);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchItems());
    }
  }, [dispatch, status]);

  if (status === "loading") return <PreLoader />;
  if (status === "rejected") return <ErrorMsg />;

  return (
    <Box>
      <PageTitle title="Товары" />
      <CardWrapper>
        {items.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </CardWrapper>
    </Box>
  );
};

export default ProductList;
