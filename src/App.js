import React, { useState } from 'react';
import './style.css';
const TodoList = () => {
  const [list, setList] = useState([]);
  const [task, setTask] = useState('');

  const addTask = (e) => {
    e.preventDefault();
    setList([...list, task]);
    setTask('');
  };

  const removeTask = (id) => {
    let newList = list.filter((item) => item.id !== id);
    setList(newList);
  };

  return (
    <div>
      <form onSubmit={addTask}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {index}- {item}
            <button onClick={() => removeTask(item.id)}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
