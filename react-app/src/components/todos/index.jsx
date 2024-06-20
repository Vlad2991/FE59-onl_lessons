import React, { useEffect, useState, useId, useMemo, useCallback } from "react";
import { ToDo } from "../todo";
import { todosData } from "./mock-data.js";
import { Spinner } from "../spinner";
import styles from "./styles.scss";

export const ToDos = () => {
  const [data, setData] = useState(todosData);
  const [isLoading, setIsLoading] = useState(false);
  const [newTodo, setNewTodo] = useState(null);
  const [isShowCompleted, setIsShowCompleted] = useState(false);

  // const testEx_1 = useMemo(() => {
  //   return [1, 2, 3].map((item) => {
  //     console.log("один раз ", item);
  //     // много-много вычислений! но нужно вычислить один раз при создании

  //     return ++item;
  //   });
  // }, []);

  // const testEx_2 = [1, 2, 3].map((item) => {
  //   console.log("каждый раз при обновлении компонента ", item);
  //   // много-много вычислений! но нужно вычислить один раз при создании

  //   return ++item;
  // });

  // const id = useId();

  // useEffect(() => {
  //   console.log("useEffect - компонент полностью перересовался", newTodo);
  // });

  // useEffect(() => {
  //   setIsLoading(true);

  //   fetch("https://jsonplaceholder.typicode.com/todos")
  //     .then((response) => response.json())
  //     .then((json) => {
  //       // setData(json)
  //       setData(todosData);
  //     })
  //     .finally(() => setIsLoading(false));
  // }, []); //componentDidMount

  const handleCreateTodo = () => {
    const id = Math.round(Math.random() * 100000);

    const todo = {
      userId: 1,
      id,
      title: newTodo,
      completed: false,
    };

    // data.unshift(todo) // ТАК НЕЛЬЗЯ ДЕЛАТЬ!!!!!!!!!!
    // setData([todo, ...data]); // так можно но лучше так:
    setData((prevData) => [todo, ...prevData]);

    // {
    //   userId: 1,
    //   id: 1,
    //   title: "delectus aut autem",
    //   completed: false,
    // },
    // const newDate =
    // newTodo;
  };

  const handleChange = useCallback((id) => {
    // data[0].completed = !data[0].completed; // Так делать нельзя!!!!!!!!!!!!!!!!!
    setData((prevData) =>
      prevData.map((item) => {
        if (item.id === id) {
          return { ...item, completed: !item.completed };
        }

        return item;
      })
    );
  }, []);

  const handleDelete = useCallback((id) => {
    setData((prevData) => prevData.filter((item) => item.id !== id));
  }, []);

  const handleDeleteLastTodo = () => {
    setData((prevData) =>
      prevData.filter((_, index, array) => index !== array.length - 1)
    );
  };

  const handleDeleteAllTodo = () => {
    setData([]);
  };

  const handleShowAllTodo = () => {
    setIsShowCompleted(false);
  };

  const handleShowCompletedTodo = () => {
    setIsShowCompleted(true);
  };

  const handleEdit = (id, title) => {
    console.log("ToDos handleEdit", id, title);
    setData((prevData) =>
      prevData.map((item) => {
        if (item.id === id) {
          return { ...item, title };
        }

        return item;
      })
    );
    ///
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <section className="todos">
      <div className="container">
        <div className="todos__wrapper">
          <h2 className="todos__title">Todo List</h2>
          <div className="todos__form">
            <input
              type="text"
              // onInput={(event) => setNewTodo(event.target.value)}
              onBlur={(event) => setNewTodo(event.target.value)}
            />
            <button type="button" onClick={handleCreateTodo}>
              Create
            </button>
            <button type="button" onClick={handleDeleteLastTodo}>
              Delete Last
            </button>
            <button type="button" onClick={handleDeleteAllTodo}>
              Delete All
            </button>
            <button type="button" onClick={handleShowAllTodo}>
              Show All
            </button>
            <button type="button" onClick={handleShowCompletedTodo}>
              Show completed
            </button>
          </div>
          <ul className="todos__list">
            {data
              .filter((todo) => (isShowCompleted ? todo.completed : true))
              .map((todo) => {
                // всего 11 тудушек, данные у всех есть одинаковые
                // для первой мы используем LargeTodo (index === 0)
                // для 2-5 мы используем MediumTodo
                // для 5-1 мы используем smallTodo
                // if (!index) {
                //   return <LargeTodo .../>
                // }

                return (
                  <ToDo
                    key={todo.id}
                    todo={todo}
                    handleChange={handleChange}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                  />
                );
              })}
          </ul>
        </div>
      </div>
    </section>
  );
};
