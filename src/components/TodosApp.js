import React from 'react';
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";
import Footer from "./Footer";

import './app.css';

const TodosApp = () => (
    <div className="login-container">
        <section className="login" id="login">
        <header>
            <h2>Todos App</h2>
            <h4>by Gabriel Domanowski</h4>
        </header>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
        </section>
    </div>
);

export default TodosApp