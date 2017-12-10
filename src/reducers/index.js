import { combineReducers } from 'redux';
import DisciplinaReducer from './DisciplinaReducer';
import data from '../data.json';

export default combineReducers({
    main: () => null,
    disciplinas: () => data,
    cadeira: DisciplinaReducer
});