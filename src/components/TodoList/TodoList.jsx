import React, { useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import TodoItem from '../TodoItem/TodoItem';
import styles from './TodoList.module.css';

function TodoList({ filter }) {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Study', status: 'active' },
    { id: 2, text: 'Algorithm', status: 'active' },
    { id: 3, text: 'Shopping', status: 'active' },
  ]);
  const handleUpdate = (updated) => {
    setTodos(todos.map((todo) => (todo.id === updated.id ? updated : todo)));
  };
  const handleAdd = (todo) => {
    setTodos([...todos, todo]);
  };
  const handleDelete = (deleted) => {
    setTodos(todos.filter((todo) => todo.id !== deleted.id));
  };
  const filtered = getFilterTodoItem(todos, filter);
  return (
    <section className={styles.todolist}>
      <ul className={styles.list}>
        {filtered.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}

function getFilterTodoItem(todos, filter) {
  if (filter === 'all') {
    return todos;
  } else {
    return todos.filter((todo) => todo.status === filter);
  }
}

export default TodoList;
