import React, { useState } from 'react';
import styles from './AddTodo.module.css';

function AddTodo({ onAdd }) {
  const [text, setText] = useState('');
  const handleInputText = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length) {
      onAdd({ id: Math.random(10000), text, status: 'active' });
      setText('');
    }
  };
  const handleEnter = (e) => {
    if (text.trim().length) {
      if (e.key === 'Enter') {
        onAdd({ id: Math.random(10000), text, status: 'active' });
        setText('');
      }
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add Todo.."
        value={text}
        onChange={handleInputText}
        onKeyPress={handleEnter}
        className={styles.input}
      />
      <button className={styles.button}>Add</button>
    </form>
  );
}

export default AddTodo;
