import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import styles from './TodoItem.module.css';

function TodoItem({ todo, onUpdate, onDelete }) {
  const { text, status } = todo;
  const handleDelete = () => {
    onDelete(todo);
  };
  const handleChange = (e) => {
    const status = e.target.checked ? 'completed' : 'active';
    onUpdate({ ...todo, status });
  };
  return (
    <>
      <li className={styles.todo} key={todo.id}>
        <input
          className={styles.checkbox}
          type="checkbox"
          id={todo.id}
          checked={status === 'completed' ? true : false}
          onChange={handleChange}
        />
        <label className={styles.text} htmlFor={todo.id}>
          {text}
        </label>
        <span className={styles.icon}>
          <button onClick={handleDelete} className={styles.button}>
            <FaTrashAlt />
          </button>
        </span>
      </li>
    </>
  );
}

export default TodoItem;
