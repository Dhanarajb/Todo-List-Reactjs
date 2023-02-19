import React, { useState } from 'react';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editTask, setEditTask] = useState(null);

  const handleNewTaskChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: newTask }]);
      setNewTask('');
    }
  };

  const handleEditTask = (task) => {
    setEditTask(task);
    setNewTask(task.text);
  };

  const handleUpdateTask = () => {
    if (newTask.trim() !== '') {
      const updatedTasks = tasks.map((task) =>
        task.id === editTask.id ? { ...task, text: newTask } : task
      );
      setTasks(updatedTasks);
      setEditTask(null);
      setNewTask('');
    }
  };

  const handleDeleteTask = (task) => {
    const filteredTasks = tasks.filter((t) => t.id !== task.id);
    setTasks(filteredTasks);
  };

  return (
    <div>
      <h1>Todo List</h1>

      <div>
        <input type="text" value={newTask} onChange={handleNewTaskChange} />
        <button onClick={handleAddTask}>Add</button>
      </div>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task === editTask ? (
              <div>
                <input
                  type="text"
                  value={newTask}
                  onChange={handleNewTaskChange}
                />
                <button onClick={handleUpdateTask}>Update</button>
              </div>
            ) : (
              <div>
                <span>{task.text}</span>
                <button onClick={() => handleEditTask(task)}>Edit</button>
                <button onClick={() => handleDeleteTask(task)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
