import { useState } from "react";
import moon from "./images/moon.svg";
import sun from "./images/sun.svg";
import styles from "./styles.scss";

export const ModeButton = ({ isBlackTheme, handleChangeTheme }) => {
  return (
    <div className="mode-button" onClick={handleChangeTheme}>
      <img src={isBlackTheme ? sun : moon} alt="" />
    </div>
  );
};
