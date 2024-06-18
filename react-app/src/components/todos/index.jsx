import React, { useEffect, useState } from "react";
import { ToDo } from "../todo";
import { todosData } from "./mock-data.js";
import { Spinner } from "../spinner";
import styles from "./styles.scss";

export const ToDos = () => {
  const [data, setData] = useState(todosData);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        // setData(json)
        setData(todosData);
      })
      .finally(() => setIsLoading(false));
  }, [data]); //componentDidMount

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

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <section className="todos">
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
    </section>
  );
};
