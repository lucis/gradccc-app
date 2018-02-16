import request from '../../src/reducers/AuthReducer';
import { EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGIN_USER,
    LOGOUT_USER } from '../../src/actions/types';

describe('Auth Reducer',()=>{

    it('has a default state', ()=>{
        expect(request(undefined,{type: 'unexpected'})).toEqual({ email: '',
        password: '',
        error: '',
        user: null,
        loading: false});
    });

    it('can handle EMAIL_CHANGED request', ()=>{
        expect(request(
        undefined
        ,{type: EMAIL_CHANGED, payload: 'new_email'})
        ).toEqual({ email: 'new_email',
        password: '',
        error: '',
        user: null,
        loading: false});
    });

    it('can handle PASSWORD_CHANGED request', ()=>{
        expect(request(undefined,{type: PASSWORD_CHANGED, payload: 'new_password'})).toEqual({ email: '',
        password: 'new_password',
        error: '',
        user: null,
        loading: false});
    });

    it('can handle LOGIN_USER request', ()=>{
        expect(request(undefined,{type: LOGIN_USER})).toEqual({ email: '',
        password: '',
        error: '',
        user: null,
        loading: true});
    });
    it('can handle LOGIN_SUCCESS request', ()=>{
        expect(request(undefined,{type: LOGIN_SUCCESS, payload:'user_login'})).toEqual({ email: '',
        password: '',
        error: '',
        user: 'user_login',
        loading: false});
    });
    it('can handle LOGIN_FAIL request', ()=>{
        expect(request(undefined,{type: LOGIN_FAIL})).toEqual({ email: '',
        password: '',
        error: 'Authentication Failed.',
        user: null,
        loading: false});
    });
    it('can handle LOGOUT_USER request', ()=>{
        expect(request(undefined,{type: LOGOUT_USER, payload:'user_logout'})).toEqual({ email: '',
        password: '',
        error: '',
        user: 'user_logout',
        loading: false});
    });
});