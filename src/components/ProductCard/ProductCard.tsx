import { useState } from "react";
import { type Product } from "../../api/types";
import { ProductItem } from "../ProductItem/ProductItem";
import "./ProductCard.css";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isFavourite, setIsFavourite] = useState(false);

  const onToggleFavourite = () => {
    setIsFavourite(!isFavourite);
  };

  return (
    <div className="product__card">
      <ProductItem
        product={product}
        variant="card"
        showBadges={true}
        showFavourite={true}
        isFavourite={isFavourite}
        onToggleFavourite={onToggleFavourite}
      />
      <button className="product__btn">Выбрать</button>
    </div>
  );
};

export default ProductCard;
