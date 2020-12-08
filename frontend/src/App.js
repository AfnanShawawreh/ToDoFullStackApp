import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import "./App.css";
import axios from "axios";

const App = () => {
  const { register, handleSubmit } = useForm();
  const [todos, setTodos] = useState([]);
  const [isComplite, setIsComplite] = useState(false);

  const onSubmit = (data) => {
    return axios
      .post("http://localhost:4000/api/add", data)
      .then(todos.push(data))
      .then(function (response) {
        console.log("fnh55", response.data);
      })

      .catch(function (error) {
        console.log(error);
      });
  };

  const todoListV = () => {
    return axios
      .get("http://localhost:4000/api/all")

      .then((response) => setTodos(response.data))
      .then(console.log("afnan"))
      .catch(function (error) {
        console.log(error);
      });
  };
 const deleteTodo = (_id) => {
    return axios
      .delete("http://localhost:4000/api/all/" + _id)
      .then((res) => console.log("item " + _id + " has been deleted"))
      .then(
        setTimeout(function () {
          window.location.reload();
        }, 200)
      )
      .catch((error) =>
        console.log(error + " " + "from axios delete" + " " + _id)
      );
  };
  useEffect(() => {
    todoListV();
  }, []);

  return (
    <div className="todolist">
      <div className="heading">
        <h1 className="title">To-Do List</h1>
      </div>
      <div className="todo">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            name="todo"
            className="input"
            placeholder="What do you need to do?"
            ref={register}
          />

          <input className="submit" type="submit" value="Save Item" />
        </form>
      </div>

      <div className="items">
        <ul>
          {todos.map((todof) => (
            <li id="list-item" key={todof._id}>
              <span className="lilist" id="todo">
                {todof.todo}
              </span>
              <button className="button2" onClick={() => deleteTodo(todof._id)}>
                {" "}
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default App;
