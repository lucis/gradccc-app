import { EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGIN_USER,
    LOGOUT_USER } from '../actions/types';

const INITIAL_STATE = { email: '',
                    password: '',
                    error: '',
                    user: null,
                    loading: false};

export default function request(state = INITIAL_STATE, action)
{
    switch(action.type){
        case EMAIL_CHANGED:
            return { ...state, email: action.payload };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case LOGIN_USER:
            return { ...state, loading: true, error: '' };
        case LOGIN_SUCCESS: 
            return { ...state, ...INITIAL_STATE, user: action.payload };
        case LOGIN_FAIL:
            return { ...state, loading: false,
                    error: 'Authentication Failed.', password: '' };
        case LOGOUT_USER:
            return { ...state, user: action.payload };
        default:
            return state;
    }
}
