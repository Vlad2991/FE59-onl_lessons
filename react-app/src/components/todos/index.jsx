import React, { useEffect } from "react";
import { ToDo } from "../todo";
import styles from "./styles.scss";

export const ToDos = ({ data, setData }) => {
  const handleChange = (id) => {
    const newData = data.map((item) => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      }

      return item;
    });
    console.log("change", id, data, newData);

    // data[0].completed = !data[0].completed; // Так делать нельзя!!!!!!!!!!!!!!!!!
    setData(newData);
  };

  return (
    <div className="todos">
      <div className="container">
        <div className="todos__wrapper">
          {data.map((todo, index) => {
            // всего 11 тудушек, данные у всех есть одинаковые
            // для первой мы используем LargeTodo (index === 0)
            // для 2-5 мы используем MediumTodo
            // для 5-1 мы используем smallTodo
            // if (!index) {
            //   return <LargeTodo .../>
            // }

            return (
              <ToDo key={todo.id} todo={todo} handleChange={handleChange} />
            );
          })}
        </div>
      </div>
    </div>
  );
};
