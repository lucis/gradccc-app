import { combineReducers } from 'redux';
import GradeAntigaReducer from './GradeAntigaReducer';
import GradeNovaReducer from './GradeNovaReducer';

export default combineReducers({
    main: () => null,
    gradeAntiga: GradeAntigaReducer,
    gradeNova: GradeNovaReducer
});