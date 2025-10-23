import { type SpecialProjectParameters } from "../../api/types";
import TgSvg from "../../assets/svg/tg.svg?react";
import "./Footer.css";

interface FooterProps {
  specialParams?: SpecialProjectParameters | null;
}

export const Footer = ({ specialParams }: FooterProps) => {
  const botUsername =
    specialParams?.telegram_bot_username_value?.replace("@", "") ||
    "noxerai_bot";
  const botLink = `https://t.me/${botUsername}`;

  return (
    
      <div className="footer__container">
        <p>Разработано на платформе Noxer</p>
        <div className="footer__bot-info">
          <TgSvg />
          <a href={botLink} className="footer__link">
            noxerai_bot
          </a>
        </div>
      </div>
  
  );
};
