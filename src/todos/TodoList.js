import React, { useEffect } from 'react';
import TodoListItem from './TodoListItem';
import NewTodoForm from './NewTodoForm';
import './TodoList.css';
import { connect } from 'react-redux';
import { loadTodos, removeTodoReq, markTodoAsCompleted } from './thunks';
import { getTodos, getTodosLoading, getIncompleteTodos, getCompletedTodos } from './selectors';

const TodoList = ({ completedTodos, incompleteTodos, onRemovePressed, onMarkAsCompletedPressed, isLoading, startLoadingTodos }) => {
    useEffect(() => {
        startLoadingTodos();
    }, []);

    const loadingMessage = <div>Loading todos...</div>;
    const content = (
        <div className="list-wrapper">
            <NewTodoForm />
            <h3>Incomplete</h3>
            {incompleteTodos.map(todo => <TodoListItem todo={todo} onRemovePressed={onRemovePressed}
            onMarkAsCompletedPressed={onMarkAsCompletedPressed}/>)}
            <h3>Completed</h3>
            {completedTodos.map(todo => <TodoListItem todo={todo} onRemovePressed={onRemovePressed}
            onMarkAsCompletedPressed={onMarkAsCompletedPressed}/>)}
        </div>
    );

    return isLoading ? loadingMessage : content;
}

const mapStateToProps = state => ({
    isLoading: getTodosLoading(state),
    completedTodos: getCompletedTodos(state),
    incompleteTodos: getIncompleteTodos(state)
});

const mapDispatchToProps = dispatch => ({
    startLoadingTodos: () => dispatch(loadTodos()),
    onRemovePressed: id => dispatch(removeTodoReq(id)),
    onMarkAsCompletedPressed: id => dispatch(markTodoAsCompleted(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
