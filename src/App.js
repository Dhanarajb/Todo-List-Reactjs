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

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleEditTask = (task) => {
    setEditTask(task);
    setNewTask(task.text);
  };

  const handleUpdateTask = () => {
    setTasks(
      tasks.map((task) =>
        task.id === editTask.id ? { ...task, text: newTask } : task
      )
    );
    setEditTask(null);
    setNewTask('');
  };

  return (
    <div>
      <h1>Todo List</h1>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {editTask && editTask.id === task.id ? (
              <div>
                <input type="text" value={newTask} onChange={handleNewTaskChange} />
                <button onClick={handleUpdateTask}>Update</button>
              </div>
            ) : (
              <div>
                <span>{task.text}</span>
                <button onClick={() => handleEditTask(task)}>Edit</button>
                <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>

      <div>
        <input type="text" value={newTask} onChange={handleNewTaskChange} />
        <button onClick={editTask ? handleUpdateTask : handleAddTask}>
          {editTask ? 'Update' : 'Add'}
        </button>
        {editTask && <button onClick={() => setEditTask(null)}>Cancel</button>}
      </div>
    </div>
  );
};

export default TodoList;
