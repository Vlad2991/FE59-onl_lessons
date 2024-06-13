import { useState } from "react";
import styles from "./styles.scss";

export const Modal = ({ setIsShowModal }) => {
  const [values, setValues] = useState({});

  const handleChangeEmail = (event) => {
    // setValues({ ...values, email: event.target.value });
    setValues((prevState) => ({ ...prevState, email: event.target.value }));
  };

  const handleChangePass = (event) => {
    setValues((prevState) => ({ ...prevState, pass: event.target.value }));
  };

  const handleChangeCountry = (event) => {
    setValues((prevState) => ({ ...prevState, country: event.target.value }));
  };

  console.log(values);
  const countryList = [
    "Беларусь",
    "Россия",
    "Украина",
    "Казахстан",
    "США",
    "Канада",
    "Польша",
  ];

  const handleClick = () => {
    setIsShowModal(false);
  };

  const handleSave = () => {
    console.log("Отправляем все данные в values на сервер: ", values);
  };

  return (
    <div className="modal">
      <div className="modal__wrapper">
        <h4 className="modal__title">Sing in now</h4>
        <label htmlFor="modalEmail">Email</label>
        <input
          type="text"
          className="modal__input"
          id="modalEmail"
          onInput={handleChangeEmail}
        />
        <label htmlFor="modalPass">Password</label>
        <input
          type="text"
          className="modal__input"
          id="modalPass"
          onInput={handleChangePass}
        />
        <label htmlFor="modalCountry">Choose your country:</label>
        <select
          className="modal__input"
          id="modalCountry"
          onChange={handleChangeCountry}
        >
          {countryList.map((item, index) => {
            return (
              <option value={item} key={`${item}_${index}}`}>
                {item}
              </option>
            );
          })}
          {/* <option value="Беларусь">Беларусь</option>
          <option value="Россия">Россия</option>
          <option value="Украина">Украина</option>
          <option value="Казахстан">Казахстан</option>
          <option value="США">США</option>
          <option value="Канада">Канада</option>
          <option value="Польша">Польша</option> */}
        </select>
        <div className="modal__actions">
          <button className="modal__cancel" onClick={handleClick}>
            Cancel
          </button>
          <button className="modal__save" onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};
