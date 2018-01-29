import { EMAIL_CHANGED, 
    PASSWORD_CHANGED, 
    REGISTER_USER,
    REGISTER_SUCCESS,
    REGISTER_FAIL } from '../actions/types';

const INITIAL_STATE = { email: '', 
                    password: '', 
                    error: '', 
                    user: null, 
                    loading: false};

export default (state = INITIAL_STATE, action) =>  
{
    switch(action.type){
        case EMAIL_CHANGED:
            return { ...state, email: action.payload };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case REGISTER_USER:
            return { ...state, loading: true };
        case REGISTER_SUCCESS:
            return { ...state, ...INITIAL_STATE, user: action.payload };
        case REGISTER_FAIL:
            return { ...state, loading: false, 
                    error: 'Campos inválidos.', password: '' };
        default: 
            return state;
    }
}