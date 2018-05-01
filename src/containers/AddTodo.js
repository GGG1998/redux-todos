import { connect } from 'react-redux';
import React from 'react';
import { addTodo } from '../actions/index';

let AddTodo = ( {dispatch} )=> {
    let input;

    return (
        <div className="login-form">
            <input className="login-input" type="text" ref={ node=>{ input=node; } } />
            <button className="login-button" onClick={ () => { 
                dispatch(addTodo(input.value));
                input.value='';
            }}> Dodaj </button>
        </div>
    );
}

AddTodo=connect()(AddTodo);

export default AddTodo;

