import React from 'react';
import './TodoListItem.css';

export default function TodoListItem({ todo, onRemovePressed, onMarkAsCompletedPressed }) {
    return (
        <div className="todo-item-container" >
            <h3>{todo.text}</h3>
            <div className="buttons-container">
                { todo.isCompleted === false && <button
                onClick= {() => onMarkAsCompletedPressed(todo.id)}>Mark As Completed</button> }
                <button
                onClick = {() => onRemovePressed(todo.id)}>Remove</button>
            </div>            
        </div>
    )
}
