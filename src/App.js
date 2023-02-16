import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';
import { DarkModeProvider } from './context/DarkModeContext';

function App() {
  const [filter, setFilter] = useState('all');
  const handleChangeFilter = (filter) => {
    setFilter(filter);
  };
  return (
    <>
      <DarkModeProvider>
        <Header value={filter} onChangeFilter={handleChangeFilter} />
        <TodoList filter={filter} />
      </DarkModeProvider>
    </>
  );
}

export default App;
