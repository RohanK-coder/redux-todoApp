import React from 'react';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

const App = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>React Redux Example</h1>
      <AddTodo/>
      <Todos/>
      
      
    </div>
  );
};

export default App;
