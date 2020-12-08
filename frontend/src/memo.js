// // import React, { useState, useEffect, useCallback } from "react";
// // import "./App.css";
// // const TodoForm = ({ addTodo }) => {

// //   const [NEWTODO, setNEWTODO] = useState("");
// //   const [todos, settodos] = useState([]);
// //   const newtodo = useCallback(
    
// //     (e) => {
// //       setNEWTODO(e.target.value);
// //       settodos([
// //         ...todos,
// //         {
// //           id: todos.length + 1,
// //           content: NEWTODO,
// //           done: false,
// //         },
// //       ]);
// //     },
// //     [NEWTODO, todos]
    
// //   );


// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     if (!NEWTODO) return;
// //     addTodo(NEWTODO);
// //     setNEWTODO(e.target.value);
// //     e.target.value=''
// //   };
// //   useEffect(() => {
// //     handleSubmit()
// //     console.log('todos' ,todos);
// //   }, [todos]);

// //   return (
// //     <form onSubmit={handleSubmit}>
// //       <div>
// //         <label className="label"> Task </label>
// //         <input
// //         id='newtodo'
// //           type="text"
// //           className="input"
// //           value={NEWTODO}
// //           name="task"
// //           onChange={newtodo}
// //           placeholder="What do you need to do?"
// //         />

// //         <input className="submit" type="submit" name="save" value="Save Item" />
// //       </div>
// //     </form>
// //   );
// // };

// // function Todo({ todo, index, completeTodo, removeTodo }) {
// //   return (
// //     <div
// //       className="todo"
// //       style={{ background: todo.isCompleted ? "#A6FBF4" : "" }}
// //     >
// //       {todo.text}
// //       <div>
// //         <button className="button1" onClick={() => completeTodo(index)}>
// //           ✔
// //         </button>
// //         <button className="button2" onClick={() => removeTodo(index)}>
// //           X
// //         </button>
// //       </div>
// //     </div>
// //   );
// // }

// // function App() {
// //   const [todos, setTodos] = React.useState([]);

// //   const addTodo = (text) => {
// //     const newTodos = [...todos, { text }];
// //     setTodos(newTodos);
// //   };

// //   const completeTodo = (index) => {
// //     const newTodos = [...todos];
// //     newTodos[index].isCompleted = true;
// //     setTodos(newTodos);
// //   };

// //   const removeTodo = (index) => {
// //     const newTodos = [...todos];
// //     newTodos.splice(index, 1);
// //     setTodos(newTodos);
// //   };

// //   return (
// //     <div className="app">
// //       <div className="todo-list">
// //         <h2>TO DO:</h2>
// //         {todos.map((todo, index) => (
// //           <Todo
// //             key={index}
// //             index={index}
// //             todo={todo}
// //             completeTodo={completeTodo}
// //             removeTodo={removeTodo}
// //           />
// //         ))}
// //         <TodoForm addTodo={addTodo} />
// //       </div>
// //     </div>
// //   );
// // }

// // export default App;

// import React, { useState, useCallback, useEffect } from 'react';
// import "./App.css";
// import axios from 'axios';

// const App = () => {
//   const [newTodo, setNewTodo] = useState('');
//   const [todos, setTodos] = useState([]);

//   const onNewTodoChange = useCallback((event) => {
//     setNewTodo(event.target.value);
//   }, []);

//   const formSubmitted = useCallback((event) => {
//     event.preventDefault();
//     if (!newTodo.trim()) return;
//     setTodos([
//       {
//         id: todos.length ? todos[0].id + 1 : 1,
//         content: newTodo,
//         done: false,
//       },
//       ...todos
//     ]);

    
//     setNewTodo('');
//   }, [newTodo, todos]);

//   useEffect(() => {
//     console.log('todos', todos);
//   }, [todos]);

//   const addTodo = useCallback((todo, index) => (event) => {
//     const newTodos = [...todos];
//     axios.post('http://localhost:4000/todos')
//     .then(res=> setNewTodo(res.todo))
//     .catch(error => console.log(error + ' ' + 'from axios get'))
//     // newTodos.splice(index, 1, {
//     //   ...todo,
//     //   done: !todo.done
//     // });
//     setTodos(newTodos);
//   }, [todos]);
//   const getTodos = () => {
//     axios.get('http://localhost:4000/todo')
//         .then(res => setTodos(res.data))
//         .then(console.log(todos))
//             .catch(error => console.log(error + ' ' + 'from axios get'))
// }


//   const removeTodo = useCallback((todo) => (event) => {
//     setTodos(todos.filter(otherTodo => otherTodo !== todo));
//   }, [todos]);
//   const completeTodo = (index) => {
//     const newTodos = [...todos];
//     newTodos[index].isCompleted = true;
//     setTodos(newTodos);
//   };


//   return (
//     <div>
//     <div
//           className="todo"
//           //  style={{ background: todo.done ? "#A6FBF4" : "" }}
//        >
   
//       <form onSubmit={formSubmitted}>
//         <label className="label" htmlFor="newTodo">Enter a Todo:</label>
//         <input
//           id="newTodo"
//           name="newTodo"
//           value={newTodo}
//           onChange={onNewTodoChange}
//           className="input"
//         />
//         <button className="submit" >Add Todo</button>
//       </form>
//      </div>
//      <div>
//       <ul>
//         {todos.map((todo, index) => (
//           <li key={todo.id}>
//             <input
//               checked={todo.done}
//               type="checkbox"
//               onChange={addTodo(todo, index)}
//               background= "#A6FBF4" 
//             />
//             <span className={todo.done ? 'done' : ''}>{todo.content}</span>
//             <div>  <button className="button2" onClick={removeTodo(todo)}> X</button>
         
//          <button className="button1" onClick={() => completeTodo(index)}>
//            ✔
//          </button>
//      </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//     </div>
//   );
// };



// export default App;