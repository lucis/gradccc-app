import request from '../../src/reducers/GradeAntigaReducer';

import { LOAD_GRADE_ANTIGA,
    LOAD_GRADE_ANTIGA_FAIL,
    LOAD_GRADE_ANTIGA_SUCCESS,
    TOGGLE_CADEIRA,
    SELECIONA_PERIODO, 
    REALIZA_CONVERSAO,
    REALIZA_CONVERSAO_SUCCESS,
    REALIZA_CONVERSAO_FAIL,
    SELECIONA_TODAS_DISCIPLINAS
} from '../../src/actions/types';

const INITIAL_STATE = 
{
    loading: false,
    loaded: false,
    cadeiras: null,
    idCadeirasSelecionadas: []
};

describe('GradeAntigaReducer',()=>{
    it('has a default state', ()=>{
        expect(request(undefined,{type: 'unexpected'})).toEqual(INITIAL_STATE);
    });
    it('can handle REALIZA_CONVERSAO request', ()=>{
        expect(request(undefined,{type: REALIZA_CONVERSAO})).toEqual({...INITIAL_STATE, loading: true, loaded: false});
    });
    it('can handle LOAD_GRADE_ANTIGA_SUCCESS request', ()=>{
        expect(request(undefined,{type: LOAD_GRADE_ANTIGA_SUCCESS, payload: []})).toEqual({...INITIAL_STATE, loaded: true, loading: false, cadeiras: []});
    });
    it('can handle LOAD_GRADE_ANTIGA_FAIL request', ()=>{
        expect(request(undefined,{type: LOAD_GRADE_ANTIGA_FAIL})).toEqual({...INITIAL_STATE, loaded: false, loading: false});
    });
    it('can handle TOGGLE_CADEIRA request', ()=>{
        expect(request({
            loading: false,
            loaded: false,
            cadeiras: [['aa'],['plp'],['grafos'],['atal']],
            idCadeirasSelecionadas: []
        },{type: TOGGLE_CADEIRA, payload:{periodo:3, idCadeira:4}})).toEqual({...INITIAL_STATE,"cadeiras": {"0": ["aa"], "1": ["plp"], "2": ["grafos"], "3": ["atal"]}});
    });
    it('can handle SELECIONA_TODAS_DISCIPLINAS request', ()=>{
        expect(request({
            loading: false,
            loaded: false,
            cadeiras: [['aa'],['plp'],['grafos'],['atal']],
            idCadeirasSelecionadas: [1,2,3]
        },{type: SELECIONA_TODAS_DISCIPLINAS})).toEqual({...INITIAL_STATE,"cadeiras": {"0": ["aa"], "1": ["plp"], "2": ["grafos"], "3": ["atal"]},idCadeirasSelecionadas: [1,2,3,undefined]});
    });
    it('can handle SELECIONA_PERIODO request', ()=>{
        expect(request({
            loading: false,
            loaded: false,
            cadeiras: [['aa'],['plp'],['grafos'],['atal']],
            idCadeirasSelecionadas: [1,2,3]
        },{type: SELECIONA_PERIODO,payload: {periodo:1}})).toEqual({...INITIAL_STATE,"cadeiras": {"0": ["aa"], "1": ["plp"], "2": ["grafos"], "3": ["atal"]},idCadeirasSelecionadas: [1,2,3,undefined]});
    });
});