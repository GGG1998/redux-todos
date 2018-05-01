/* eslint-disable import/newline-after-import */
/* Combine all available reducers to a single root reducer.
 *
 * CAUTION: When using the generators, this file is modified in some places.
 *          This is done via AST traversal - Some of your formatting may be lost
 *          in the process - no functionality should be broken though.
 *          This modifications only run once when the generator is invoked - if
 *          you edit them, they are not updated again.
 */
/* Populated by react-webpack-redux:reducer */
import { combineReducers } from 'redux';
import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from '../actions/const'

const todo = (state, action)=> {
    switch(action.type) {
        case ADD_TODO:
            return {
                id: action.id,
                text: action.text,
                completed: false
            };
        case DELETE_TODO:
            return state.id !== action.id;
        case TOGGLE_TODO:
            if(state.id !== action.id)
                return state;
            return {
                ...state,
                completed: !state.completed
            }
        default:
            return state;
    }
};

const todos = (state=[], action) =>{
    switch(action.type) {
        case ADD_TODO:
            return [...state, todo(undefined, action)];
        case DELETE_TODO:
            return state.filter( t => todo(t, action) );
        case TOGGLE_TODO:
            return state.map( t => todo(t, action) );
        default:
            return state;
    }
};

const visiblityFilter = (state="SHOW_ALL", action) => {
    switch(action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state; 
    }
};

const reducers = {
    todos,
    visiblityFilter
};

const combined = combineReducers(reducers);
module.exports = combined;
