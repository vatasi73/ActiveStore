import SCard from "../UI/SCard";
import SButton from "../UI/SButton";
import { memo } from "react";

const Cart = ({ product, onRemove }) => {
  return (
    <SCard photo={product.photo} name={product.name} price={product.price}>
      <SButton
        text="Удалить из корзины"
        handleClick={() => onRemove(product)}
      />
    </SCard>
  );
};

export default memo(Cart);
