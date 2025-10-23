import banner from "../../assets/jpg/banner.jpg"
import "./Banner.css";

export const Banner = () => {
  return (
    <div className="banner__container">
     <img className="banner__image" src={banner} alt="Банер"/>
    </div>
  );
};
