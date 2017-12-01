import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import CadastroReducer from './CadastroReducer';
import data from '../data.json';

export default combineReducers({
    main: () => null,
    disciplines: () => data,
    auth: AuthReducer,
    cadastro: CadastroReducer
});