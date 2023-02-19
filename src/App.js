// Import React and useState from 'react' and the component's stylesheet from './style.css'.
import React, { useState } from 'react';
import './style.css';

// Define a functional component named 'TodoList'.
const TodoList = () => {
  
//   Use the useState hook to create two pieces of state, 'list' and 'task'. 
//   The 'list' state is initialized to an empty array while the 'task' state is initialized to an empty string.
  const [list, setList] = useState([]);
  const [task, setTask] = useState('');

//   Define an 'addTask' function that accepts an event as its argument. 
//   The function is triggered when the form is submitted. 
//   It updates the 'list' state with the new task using 
//   the spread operator to create a new array that contains 
//   the existing list and the new task. It also resets the 'task' state to an empty string.
  const addTask = (e) => {
    e.preventDefault();
    setList([...list, task]);
    setTask('');
  };

//   Define a 'removeTask' function that accepts an id as its argument. 
//   The function is triggered when the 'x' button is clicked. 
//   It filters the 'list' state and creates a new array 
//   that does not include the task with the specified id. 
//   It then updates the 'list' state with the new array.
  const removeTask = (id) => {
    let newList = list.filter((item) => item.id !== id);
    setList(newList);
  };

  return (
    <div>
{/* //     Render a form that includes an input field and a button. 
//     The input field is bound to the 'task' state and updates 
//     it when the user types into it. The form's onSubmit event is set to the 'addTask' function. */}
      <form onSubmit={addTask}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
      <ul>
{/* //           Render an unordered list that displays the 'list' state as a list of items. 
//           Each item includes a button that triggers the 'removeTask' function. 
//           The key for each item is set to its index in the array. */}
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
// Export the 'TodoList' component as the default export.
export default TodoList;
