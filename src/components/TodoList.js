import { Component } from 'react';
import React from 'react';

import Todo  from "./Todo";

const TodosList = ({ todos, onClickDelete, onClickToggle }) => (
    <ul className="login-form">
        {todos.map( todo => <Todo key={todo.id} {...todo} onClickDelete={onClickDelete} onClick={ ()=>onClickToggle(todo.id) }/> )}
    </ul>
);

export default TodosList;