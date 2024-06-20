import React, { useState, useEffect } from "react";
import { Header } from "../header";
import { Banner } from "../banner";
import { ToDos } from "../todos";
import { Modal } from "../modal";
import { Blog } from "../blog";
import styles from "./styles.scss";

export const App = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [page, setPage] = useState("home");
  const [isBlackTheme, setIsBlackTheme] = useState(false);

  const handleChangeTheme = () => {
    setIsBlackTheme((prevStat) => !prevStat);
  };

  // useEffect(() => {
  //   console.log("Запрос на сервер");
  // });

  useEffect(() => {
    // ..что-то что должно выполняться

    return () => {
      //..что-то что должно выполняться когда компонент размонтируется
      // то же что и   componentWillUnmount;
    };
  }, []); // то же что и componentDidMount;

  useEffect(() => {
    // ..что-то что должно выполняться только когда меняется page
  }, [page]); // то же что и componentDidUpdate с обновлением page;

  useEffect(() => {
    // ..что-то что должно выполняться
  }); // то же что и componentDidUpdate;

  return (
    <React.Fragment>
      <Header
        setIsShowModal={setIsShowModal}
        setPage={setPage}
        isBlackTheme={isBlackTheme}
        handleChangeTheme={handleChangeTheme}
      />
      <section className={isBlackTheme ? "black-theme" : ""}>
        {page === "home" && (
          <Banner setIsShowModal={setIsShowModal} isBlackTheme={isBlackTheme} />
        )}
        {page === "blog" && <Blog />}
        {page === "todos" && <ToDos />}
      </section>
      {isShowModal && <Modal setIsShowModal={setIsShowModal} />}
    </React.Fragment>
  );
};
