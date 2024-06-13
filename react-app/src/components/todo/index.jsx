export const ToDo = ({ todo, handleChange }) => {
  return (
    <div className="todo" key={todo.id}>
      <div className="todo__wrapper">
        <input
          type="checkbox"
          className="todo__completed"
          checked={todo.completed}
          onChange={() => handleChange(todo.id)}
        />
        <p className="todo__title">{todo.title}</p>
      </div>
    </div>
  );
};
