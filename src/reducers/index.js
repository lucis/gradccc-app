import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import data from '../data.json';

export default combineReducers({
    main: () => null,
    disciplines: () => data,
    auth: AuthReducer
});