import React from 'react';
import Styles from './Header.module.css';
import { useDarkMode } from '../../context/DarkModeContext';
import { HiMoon, HiSun } from 'react-icons/hi';

export default function Header({ filters, filter, onFilterChange }) {
    const {darkMode, toggleDarkMode} = useDarkMode();
    return (
        <header className={Styles.header}>
        <button onClick={toggleDarkMode} className={Styles.toggle}>
            {!darkMode && <HiMoon />}
            {darkMode && <HiSun />}
        </button>
        <ul className={Styles.filters}>
            {filters.map((value, index) => (
            <li key={index}>
                <button
                className={`${Styles.filter} ${
                    filter === value && Styles.selected
                }`}
                onClick={() => onFilterChange(value)}
                >
                {value}
                </button>
            </li>
            ))}
        </ul>
        </header>
    );
}
