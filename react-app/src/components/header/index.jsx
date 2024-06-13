import { Button } from "../button";
import icon from "./images/icon.svg";
import styles from "./styles.scss";

export const Header = ({ setIsShowModal }) => {
  // props === {setIsShowModal: () => void}
  return (
    <header className="header">
      <div className=".container">
        <div className="header__wrapper">
          <div className="header__log">
            <img src={icon} alt="" />
          </div>
          <nav className="header__nav">
            <ul className="header__list">
              <li className="header__item">
                <a
                  href="https://catalog.onliner.by/notebook"
                  className="header__link"
                >
                  Home
                </a>
              </li>
              <li className="header__item">
                <a href="#" className="header__link">
                  Blog
                </a>
              </li>
              <li className="header__item">
                <a href="#" className="header__link">
                  About
                </a>
              </li>
              <li className="header__item">
                <Button
                  title="Contact Us"
                  isPinkBackgroud={true}
                  setIsShowModal={setIsShowModal}
                />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
