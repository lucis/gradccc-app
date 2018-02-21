import request from '../../src/reducers/AuthReducer';
import { EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGIN_USER,
    LOGOUT_USER } from '../../src/actions/types';

const INITIAL_STATE = 
{   
    email: '',
    password: '',
    error: '',
    user: null,
    loading: false
};

describe('AuthReducer',()=>{
    it('has a default state', ()=>{
        expect(request(undefined,{type: 'unexpected'})).toEqual(INITIAL_STATE);
    });
    it('can handle EMAIL_CHANGED request', ()=>{
        expect(request(undefined,{type: EMAIL_CHANGED, payload: 'new_email'})).toEqual({...INITIAL_STATE, email: 'new_email'});
    });
    it('can handle PASSWORD_CHANGED request', ()=>{
        expect(request(undefined,{type: PASSWORD_CHANGED, payload: 'new_password'})).toEqual({...INITIAL_STATE, password: 'new_password'});
    });
    it('can handle LOGIN_USER request', ()=>{
        expect(request(undefined,{type: LOGIN_USER})).toEqual({...INITIAL_STATE, loading: true});
    });
    it('can handle LOGIN_SUCCESS request', ()=>{
        expect(request(undefined,{type: LOGIN_SUCCESS, payload:'user_login'})).toEqual({...INITIAL_STATE, user: 'user_login'});
    });
    it('can handle LOGIN_FAIL request', ()=>{
        expect(request(undefined,{type: LOGIN_FAIL})).toEqual({...INITIAL_STATE, error: 'Authentication Failed.'});
    });
    it('can handle LOGOUT_USER request', ()=>{
        expect(request(undefined,{type: LOGOUT_USER, payload:'user_logout'})).toEqual({...INITIAL_STATE, user: 'user_logout'});
    });
});