import SCard from "../UI/SCard";
import SButton from "../UI/SButton";
import { memo } from "react";

const Favorites = ({ product, onRemove }) => {
  return (
    <SCard photo={product.photo} name={product.name} price={product.price}>
      <SButton
        text="Удалить из избранного"
        handleClick={() => onRemove(product)}
      />
    </SCard>
  );
};

export default memo(Favorites);
