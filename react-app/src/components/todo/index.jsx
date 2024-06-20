import { useState } from "react";
import styles from "./styles.scss";

export const ToDo = ({ todo, handleChange, handleDelete, handleEdit }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [value, setValue] = useState(todo.title);

  const onClick = () => {
    setIsEdit(false);
    handleEdit(todo.id, value);
  };

  return (
    <li className="todo" key={todo.id}>
      <div className="todo__wrapper">
        <input
          type="checkbox"
          className="todo__completed"
          checked={todo.completed}
          onChange={() => handleChange(todo.id)}
        />
        <div className="todo__right">
          {isEdit ? (
            <>
              <input
                type="text"
                value={value}
                onInput={(event) => setValue(event.target.value)}
              />
              <button onClick={onClick}>Save</button>
            </>
          ) : (
            <p className="todo__title" onClick={() => setIsEdit(true)}>
              {todo.title}
            </p>
          )}
          <button onClick={() => handleDelete(todo.id)}>Delete</button>
        </div>
      </div>
    </li>
  );
};
