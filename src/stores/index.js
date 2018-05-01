import { createStore } from 'redux';
import combined from '../reducers/index';

const store = createStore(combined);
export default store;
