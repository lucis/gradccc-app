import { combineReducers } from 'redux';
import data from '../data.json';

export default combineReducers({
    main: () => null,
    disciplines: () => data
});