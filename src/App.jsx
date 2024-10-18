import React, { useState } from 'react';
import './App.css';
import Card from './components/Card.jsx';


function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [count, setCount] = useState(0);
  const [isTitleVisible, setIsTitleVisible] = useState(true); 

  const handleAddTodo = (e) => {
    if (e.key === 'Enter' || e.type === 'click') {
      if (inputValue.trim()) {
        setTodos([...todos, inputValue]);
        setInputValue('');
      }
    }
  };

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleTitleVisibility = () => {
    setIsTitleVisible(!isTitleVisible);
  };

  return (
    <div className={isDarkMode ? 'dark' : 'light'}>
      <h1>Todo App</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={handleAddTodo}
        placeholder="Add a todo"
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>

      <button onClick={handleThemeToggle}>
        Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
      </button>

      <h2>Counter</h2>
      <button onClick={handleDecrement}>-</button>
      <span>{count}</span>
      <button onClick={handleIncrement}>+</button>

      <Card 
        isTitleVisible={isTitleVisible} 
        handleTitleVisibility={handleTitleVisibility} 
      />
    </div>
  );
}

export default App;
