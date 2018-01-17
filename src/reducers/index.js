import { combineReducers } from 'redux';
import data from '../data.json';
import GradeAntigaReducer from './GradeAntigaReducer';

export default combineReducers({
    main: () => null,
    gradeAntiga: GradeAntigaReducer
});