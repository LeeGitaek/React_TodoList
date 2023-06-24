import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import Styles from './Todo.module.css';

export default function Todo({ todo, onUpdate, onDelete }) {
  const { id, text, status } = todo;
  const handleChange = (e) => {
    const status = e.target.checked ? 'completed' : 'active';
    onUpdate({ ...todo, status });
  };
  const handleDelete = () => onDelete(todo);
  return (
    <li className={Styles.todo}>
      <input
        className={Styles.checkbox}
        type='checkbox'
        id={id}
        checked={status === 'completed'}
        onChange={handleChange}
      />
      <label htmlFor={id} className={Styles.text}>
        {text}
      </label>
      <span className={Styles.icon}>
        <button onClick={handleDelete} className={Styles.button}>
          <FaTrashAlt />
        </button>
      </span>
    </li>
  );
}
