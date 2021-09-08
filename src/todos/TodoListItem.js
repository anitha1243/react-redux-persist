import React from 'react';
import './TodoListItem.css';

export default function TodoListItem({ todo, onRemovePressed }) {
    return (
        <div className="todo-item-container" >
            <h3>{todo.text}</h3>
            <div className="buttons-container">
                <button>Mark As Completed</button>
                <button
                onClick = {() => onRemovePressed(todo.text)}>Remove</button>
            </div>            
        </div>
    )
}
