import { type SpecialProjectParameters } from "../../api/types";
import CloseSvg from "../../assets/svg/close.svg?react";
import DownIcon from "../../assets/svg/arrow.svg?react";
import MenuIcon from "../../assets/svg/dots.svg?react";
import TgIcon from "../../assets/png/icon_tg.png";

import "./Header.css";

interface HeaderProps {
  specialParams: SpecialProjectParameters | null;
  children?: React.ReactNode;
}

export const Header = ({ specialParams, children }: HeaderProps) => {
  return (
    <div className="header__container">
      <div className="header__top">
        <div className="header__close">
          <CloseSvg className="header__close-icon" width={7} height={7} />
          <span className="header__close-text">Закрыть</span>
        </div>

        <div className="header__middle">
          <img className="header__tg-icon" src={TgIcon} alt="Символ Телеграм" />
          <a
            href={specialParams?.telegram_header_link_value}
            className="header__tg"
          >
            наш tg-канал
          </a>
        </div>

        <div className="header__menu">
          <DownIcon width={13} height={6} />
          <MenuIcon width={13} height={6} />
        </div>
      </div>

      {children}
    </div>
  );
};
