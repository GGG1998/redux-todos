import { connect } from 'react-redux';
import Link  from '../components/Link';
import { setVisibilityFilter }  from '../actions/index';

const mapStateToProps = (state, ownProps) => {
    return {
        active:  ownProps.filter === state.visiblityFilter
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(ownProps.filter));
        }
    }
}

const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);

export default FilterLink;