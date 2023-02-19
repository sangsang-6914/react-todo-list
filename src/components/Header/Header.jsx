import React from 'react';
import styles from './Header.module.css';
import { IoMoonSharp, IoSunnySharp } from 'react-icons/io5';
import { useDarkMode } from '../../context/DarkModeContext';

const initialFilters = ['all', 'active', 'completed'];

function Header({ value, onChangeFilter }) {
  const { darkMode, toggleDarkMode } = useDarkMode();
  console.log(darkMode);
  return (
    <header className={styles.header}>
      {darkMode ? (
        <IoSunnySharp onClick={toggleDarkMode} className={styles.icon} />
      ) : (
        <IoMoonSharp onClick={toggleDarkMode} className={styles.icon} />
      )}
      <ul className={styles.filters}>
        {initialFilters.map((filter, index) => (
          <li key={index}>
            <button
              className={
                value === filter
                  ? `${styles.filter} ${styles.selected}`
                  : `${styles.filter}`
              }
              onClick={() => onChangeFilter(filter)}
            >
              {filter}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Header;
