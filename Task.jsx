// Task.js
import React from 'react';

function Task({ task, toggleTaskCompletion }) {
  return (
    <li>
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.name}
      </span>
      <button onClick={() => toggleTaskCompletion(task.id)}>
        {task.completed ? 'Undo' : 'Complete'}
      </button>
    </li>
  );
}

export default Task;