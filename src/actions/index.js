/* eslint-disable import/newline-after-import */
/* Exports all the actions from a single point.

Allows to import actions like so:

import {action1, action2} from '../actions/'
*/
/* Populated by react-webpack-redux:action */

import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from "./const";


let nextTodoId=0;
export const addTodo = text => {
    return { type: ADD_TODO, text, id: nextTodoId++ };
}

export const deleteTodo = id => {
    return { type: DELETE_TODO, id };
}

export const toggleTodo = id => {
    return { type: TOGGLE_TODO, id };
}

export const setVisibilityFilter = filter => {
    return { type: SET_VISIBILITY_FILTER, filter }
}

