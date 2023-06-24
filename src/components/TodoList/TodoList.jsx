import React, { useEffect, useState } from 'react';
import AddForm from '../AddTodo/AddForm';
import Todo from '../Todo/Todo';
import Styles from './TodoList.module.css';

export default function TodoList({ filter }) {
    const [todos, setTodos] = useState(() => readTodosFromLocalStorage());

    const handleAdd = (todo) => {
        // update to todos.
        console.log(todo);
        setTodos([ ...todos, todo]);
    };

    const handleUpdate = (updated) => {
        setTodos(
            todos.map((t) => (t.id === updated.id ? updated: t))
        );
    };

    const handleDelete = (deleted) => {
        console.log(`remove! ${deleted}`);
        const removeItem = todos.filter((todo) => {
            return todo.id !== deleted.id;
        });
        setTodos(removeItem);
    };

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const filtered = getFilteredItems(todos, filter);

    return (
        <section className={Styles.container}>
            <ul className={Styles.list}>
                {filtered.map((item) => (
                    <Todo 
                        className='todo'
                        key={item.id}
                        todo={item}
                        onUpdate={handleUpdate}
                        onDelete={handleDelete}
                    />
                    // <li key={item.id}>
                    //     {item.text} 
                    //     <button onClick={() => handleDelete(item.id)}>Delete</button>
                    // </li>
                ))}
            </ul>
            <AddForm onAdd={handleAdd} />
        </section>
    );
}

function readTodosFromLocalStorage() {
    console.log('read');
    const todos = localStorage.getItem('todos');
    return todos ? JSON.parse(todos) : [];
}

function getFilteredItems(todos, filter) {
    if(filter === 'all') {
        return todos;
    }

    return todos.filter((todo) => todo.status === filter);
}