import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import { toggleTodo, deleteTodo } from '../actions/index';

const getVisibilityFilter = ( todos, filter ) => {
    switch(filter) {
        case "SHOW_ALL":
            return todos;
        case "SHOW_ACTIVE":
            return todos.filter( todo=> !todo.completed );
        case "SHOW_COMPLETED":
            return todos.filter( todo=> todo.completed  );
    }
}

const mapStateToProps = state => {
    return {
        todos : getVisibilityFilter(
            state.todos,
            state.visiblityFilter
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onClickToggle: (id) => { 
            dispatch(toggleTodo(id))
        },
        onClickDelete: (id) => {
            dispatch(deleteTodo(id))
        }
    }
}

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default VisibleTodoList;