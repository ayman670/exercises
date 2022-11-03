import React, { useState } from "react";

export default function App() {

  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = (todo) => {

    const newTodo = {
      id: Math.random(),
      todo: todo,
    };

    // add the todo to the list
    setList([...list, newTodo]);

    // clear input box
    setInput("");

  };


  const deleteTodo = (id) => {


    const newList = list.filter((todo) => todo.id !== id);

    setList(newList);
    
  };



  return (

    <div>

      <h1>Todo List</h1>

      <ul>

        {list.map((todo) => (

          <li key={todo.id}> {todo.todo}

            <button onClick={() => deleteTodo(todo.id)}> delete </button>

          </li>
        ))}
        
      </ul>


      <input type="text" value={input} onChange={ (e) => setInput(e.target.value) } />
      
      <button onClick={() => addTodo(input)}>Add</button>

    </div>
  );
}
