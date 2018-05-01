import React from 'react';

const Todo = ({id, onClick, onClickDelete, completed, text }) => (
    <li className="submit-container task">
        <div className="toggle">
            <input type="checkbox" id="unchecked" className="cbx hidden" checked={completed}/>
            <label className="lbl" onClick={onClick}></label>
        </div>
        <p style={{ textDecoration: completed ? 'line-through' : 'none' }}>{text}</p>
        <button onClick={()=>onClickDelete(id)} className="button button-red button-ripple button-round delete" type="button">X</button>
    </li>
);

export default Todo;