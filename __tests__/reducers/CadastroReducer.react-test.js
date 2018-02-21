import request from '../../src/reducers/CadastroReducer';
import { NEW_EMAIL_CHANGED,
    NEW_PASSWORD_CHANGED,
    REGISTER_USER,
    REGISTER_SUCCESS,
    REGISTER_FAIL } from '../../src/actions/types';

const INITIAL_STATE = 
{ 
    email: '',
    password: '',
    error: '',
    user: null,
    loading: false
};
describe('CadastroReducer',()=>{
        it('has a default state', ()=>{
            expect(request(undefined,{type: 'unexpected'})).toEqual(INITIAL_STATE);
        });
        it('can handle NEW_EMAIL_CHANGED request', ()=>{
            expect(request(undefined,{type: NEW_EMAIL_CHANGED, payload: 'new_email'})).toEqual({...INITIAL_STATE, email: 'new_email'});
        });
        it('can handle REGISTER_USER request', ()=>{
            expect(request(undefined,{type: REGISTER_USER})).toEqual({...INITIAL_STATE,loading: true});
        });
        it('can handle REGISTER_SUCCESS request', ()=>{
            expect(request(undefined,{type: REGISTER_SUCCESS, payload:'user_login'})).toEqual({...INITIAL_STATE, user: 'user_login'});
        });
        it('can handle REGISTER_FAIL request', ()=>{
            expect(request(undefined,{type: REGISTER_FAIL})).toEqual({...INITIAL_STATE,error: 'Campos inválidos.'});
        });

});