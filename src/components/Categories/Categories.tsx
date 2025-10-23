import { type Category } from "../../api/types";
import placeholder from "../../assets/placeholder.jpg";
import "./Categories.css";

interface CategoriesProps {
  categories: Category[];
}

export const Categories = ({ categories }: CategoriesProps) => {
  const mainCategories = categories
    .filter(
      (category) =>
        category.parent_category_id === null &&
        category.Category_Image &&
        category.Category_Image.trim() !== "" && 
        !category.Category_Image.includes("google.com/Portrait") && 
        /^[а-яё][а-яё0-9\s\-]*$/i.test(category.Category_Name)
    )
    .slice(0, 12);

  if (mainCategories.length === 0) {
    return null;
  }

  return (
    <section className="categories">
      <div className="categories__wrapper">
        <div className="categories__info">
          {mainCategories.map((category) => (
            <div key={category.Category_ID} className="categories__card">
              <div className="categories__image">
                <img
                  src={category.Category_Image}
                  alt={category.Category_Name}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = placeholder;
                  }}
                />
              </div>
              <span className="categories__name">{category.Category_Name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
