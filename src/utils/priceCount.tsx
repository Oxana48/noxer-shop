export const discountPrice = (old_price: number | null, price: number) => {
  return old_price ? Math.round((1 - price / old_price) * 100) : null;
};

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat("ru-RU").format(price);
};
