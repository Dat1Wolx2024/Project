// Filter.js
import React from 'react';

function Filter({ setFilter }) {
  return (
    <div>
      <button onClick={() => setFilter('all')}>All</button>
      <button onClick={() => setFilter('completed')}>Completed</button>
      <button onClick={() => setFilter('incomplete')}>Incomplete</button>
    </div>
  );
}

export default Filter;
