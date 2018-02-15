import { combineReducers } from 'redux';
import GradeAntigaReducer from './GradeAntigaReducer';
import GradeNovaReducer from './GradeNovaReducer';
import CadastroReducer from './CadastroReducer';
import FAQReducer from './FAQReducer';
import SelecaoReducer from './SelecaoReducer';
import AuthReducer from './AuthReducer';

export default combineReducers({
    main: () => null,
    gradeAntiga: GradeAntigaReducer,
    gradeNova: GradeNovaReducer,
    auth: AuthReducer,
    cadastro: CadastroReducer,
    faq: FAQReducer,
    selecionado: SelecaoReducer
});
