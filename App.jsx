// App.js
import React, { useState } from 'react';
import TaskList from './TaskList';
import AddTaskForm from './AddTaskForm';
import Filter from './Filter';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(tasks.map(task => task.id === taskId ? { ...task, completed: !task.completed } : task));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'incomplete') return !task.completed;
    return true;
  });

  return (
    <div>
      <h1>To-Do List</h1>
      <AddTaskForm addTask={addTask} />
      <Filter setFilter={setFilter} />
      <TaskList tasks={filteredTasks} toggleTaskCompletion={toggleTaskCompletion} />
    </div>
  );
}

export default App;