import React, { useState, useEffect } from "react";
import { Header } from "../header";
import { Banner } from "../banner";
import { ToDos } from "../todos";
import { Modal } from "../modal";
import styles from "./styles.scss";

export const App = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        // setData(json)
        setData([
          {
            userId: 1,
            id: 1,
            title: "delectus aut autem",
            completed: false,
          },
          {
            userId: 1,
            id: 2,
            title: "quis ut nam facilis et officia qui",
            completed: false,
          },
          {
            userId: 1,
            id: 3,
            title: "fugiat veniam minus",
            completed: false,
          },
          {
            userId: 1,
            id: 4,
            title: "et porro tempora",
            completed: true,
          },
          {
            userId: 1,
            id: 5,
            title:
              "laboriosam mollitia et enim quasi adipisci quia provident illum",
            completed: false,
          },
        ]);
      });
  }, []);

  return (
    <React.Fragment>
      <Header setIsShowModal={setIsShowModal} />
      <Banner setIsShowModal={setIsShowModal} />
      <ToDos data={data} setData={setData} />
      {isShowModal ? <Modal setIsShowModal={setIsShowModal} /> : null}
      {/* {isShowModal && <Modal setIsShowModal={setIsShowModal} />} */}
    </React.Fragment>
  );
};
