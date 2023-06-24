import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Styles from './AddTodo.module.css';

export default function AddForm({ onAdd }) {
    const [text, setText] = useState('');
    const handleChange = (e) => setText(e.target.value);
    const handleSubmit = (e) => {
        e.preventDefault();
        if(text.trim().length === 0) {
            return;
        }
        onAdd({ id: uuidv4(), text, status: 'active'});
        setText('');
    };
    
    return (
        <form className={Styles.form} onSubmit={handleSubmit}>
            <input className={Styles.input}
                type='text'
                placeholder='Add Todo'
                value={text}
                onChange={handleChange}
                />
            <button className={Styles.button}>Add</button>
        </form>
    );
}