import HeartSvg from "../../assets/svg/heart.svg?react";
import HeartFilledSvg from "../../assets/svg/heart-filled.svg?react";
import "./FavouriteButton.css";

interface FavouriteButtonProps {
  isFavourite: boolean;
  onClick: () => void;
  size?: number;
}

export const FavouriteButton = ({
  isFavourite,
  onClick,
  size = 20,
}: FavouriteButtonProps) => {
  return (
    <button
      className={`favourite__btn ${
        isFavourite ? "favourite__btn--active" : ""
      }`}
      onClick={onClick}
      type="button"
    >
      {isFavourite ? (
        <HeartFilledSvg width={size} height={size} />
      ) : (
        <HeartSvg width={size} height={size} />
      )}
    </button>
  );
};
