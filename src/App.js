import React, { useState } from 'react';

const TodoList = () => {
  const [list, setList] = useState([]);
  const [task, setTask] = useState('');

  const addTask = (e) => {
    e.preventDefault();
    setList([...list, task]);
    setTask('');
  };

  const removeTask = (index) => {
    setList([...list.slice(0, index), ...list.slice(index + 1)]);
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
            {item}
            <button onClick={() => removeTask(index)}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
