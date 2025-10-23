import { type Product } from "../../api/types";
import { discountPrice, formatPrice } from "../../utils/priceCount";
import { FavouriteButton } from "../../components/FavouriteButton/FavouriteButton";
import placeholder from "../../assets/placeholder.jpg";
import "./ProductItem.css";

interface ProductItemProps {
  product: Product;
  variant?: "card" | "search";
  showBadges?: boolean;
  showFavourite?: boolean;
  isFavourite?: boolean;
  onToggleFavourite?: (productId: number) => void;
}

export const ProductItem = ({
  product,
  variant = "card",
  showBadges = true,
  showFavourite = true,
  isFavourite = false,
  onToggleFavourite,
}: ProductItemProps) => {
  const mainImage =
    product.images.find((img) => img.MainImage) || product.images[0];
  const isPlaceholder = !mainImage?.Image_URL;
  const imageUrl = mainImage?.Image_URL || placeholder;

  const handleFavouriteClick = () => {
    onToggleFavourite?.(product.id);
  };

  return (
    <div className={`product product--${variant}`}>
      <div className="product__image-container">
        <img
          src={imageUrl}
          alt={product.name}
          className={`product__image ${
            isPlaceholder ? "product__image--placeholder" : ""
          }`}
          onError={(e) => {
            e.currentTarget.src = placeholder;
            e.currentTarget.classList.add("product__image--placeholder");
          }}
        />

        {showBadges && product.marks.length > 0 && (
          <div className="product__badges">
            {product.marks.map((mark, index) => (
              <span
                key={index}
                className={`product__badge product__badge-${mark.Mark_Name.toLowerCase()}`}
                style={{ backgroundColor: mark.color_code }}
              >
                {mark.Mark_Name}
              </span>
            ))}
          </div>
        )}

        {showFavourite && (
          <FavouriteButton
            isFavourite={isFavourite}
            onClick={handleFavouriteClick}
            size={variant === "search" ? 16 : 20}
          />
        )}
      </div>

      <div className="product__info">
        {variant === "search" ? (
          <>
            <p className="product__name">{product.name}</p>
            <div className="product__price">
              {product.old_price ? (
                <>
                  <span className="product__current-price">
                    {formatPrice(product.price)} ₽
                  </span>
                  <span className="product__old-price">
                    {formatPrice(product.old_price)} ₽
                  </span>
                  <span className="product__discount">
                    -{discountPrice(product.old_price, product.price)}%
                  </span>
                </>
              ) : (
                <span className="product__current-price">
                  {formatPrice(product.price)} ₽
                </span>
              )}
            </div>
          </>
        ) : (
          <>
            <div className="product__price">
              {product.old_price ? (
                <>
                  <span className="product__current-price">
                    {formatPrice(product.price)} ₽
                  </span>
                  <span className="product__old-price">
                    {formatPrice(product.old_price)} ₽
                  </span>
                  <span className="product__discount">
                    -{discountPrice(product.old_price, product.price)}%
                  </span>
                </>
              ) : (
                <span className="product__current-price">
                  {formatPrice(product.price)} ₽
                </span>
              )}
            </div>
            <p className="product__name">{product.name}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductItem;
