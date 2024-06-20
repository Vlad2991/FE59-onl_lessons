import React, { useState, memo } from "react";
import styles from "./styles.scss";

// В React мы так НЕ ДЕЛАЕМ!!!!!!!
// const btn = document.querySelector(".header__button");
// btn.addEventListener("click", (event) => {
//   console.log("click");
// });
// input.addEventListener("input", (event) => {
//   console.log("input");
// });

const View = ({ title, isPinkBackgroud, setIsShowModal }) => {
  // export const Button = ({ title, isPinkBackgroud, setIsShowModal }) => {
  const [isActiveBtn, setIsActiveBtn] = useState(false);
  // console.log("Button");
  let className = "button";

  if (isPinkBackgroud) {
    className += " button_pink";
  }

  if (isActiveBtn) {
    className += " button_yellow";
  }

  const handleClick = () => {
    // isActiveBtn = true; // Так делать нельзя!!!!!!!!!!
    setIsActiveBtn(true);
    setIsShowModal(true);
  };

  return (
    <button type="button" className={className} onClick={handleClick}>
      {title}
    </button>
  );
};

export const Button = memo(View);
