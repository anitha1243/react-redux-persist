import React, { useEffect } from 'react';
import TodoListItem from './TodoListItem';
import NewTodoForm from './NewTodoForm';
import './TodoList.css';
import { connect } from 'react-redux';
import { loadTodos, removeTodoReq, markTodoAsCompleted } from './thunks'

const TodoList = ({ todos =[], onRemovePressed, onMarkAsCompletedPressed, isLoading, startLoadingTodos }) => {
    useEffect(() => {
        startLoadingTodos();
    }, []);

    const loadingMessage = <div>Loading todos...</div>;
    const content = (
        <div className="list-wrapper">
            <NewTodoForm />
            {todos.map(todo => <TodoListItem todo={todo} onRemovePressed={onRemovePressed}
            onMarkAsCompletedPressed={onMarkAsCompletedPressed}/>)}
        </div>
    );

    return isLoading ? loadingMessage : content;
}

const mapStateToProps = state => ({
    isLoading: state.isLoading,
    todos: state.todos
});

const mapDispatchToProps = dispatch => ({
    startLoadingTodos: () => dispatch(loadTodos()),
    onRemovePressed: id => dispatch(removeTodoReq(id)),
    onMarkAsCompletedPressed: id => dispatch(markTodoAsCompleted(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
