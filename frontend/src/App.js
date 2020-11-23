import React from "react";
import "./App.css";
function TodoForm({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label className="label"> Task </label>
        <input
          type="text"
          className="input"
          value={value}
          name="task"
          onChange={(e) => setValue(e.target.value)}
          placeholder="What do you need to do?"
        />

        <input className="submit" type="submit" name="save" value="Save Item" />
      </div>
    </form>
  );
}

function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div className="todo" style={{ background: todo.isCompleted ? "#A6FBF4" : "" }}>
      {todo.text}
      <div>
        <button className="button1" onClick={() => completeTodo(index)}>
          ✔
        </button>
        <button className="button2" onClick={() => removeTodo(index)}>
          X
        </button>
      </div>
    </div>
  );
}

function App() {
  const [todos, setTodos] = React.useState([]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        <h2>TO DO:</h2>
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
