import request from '../../src/reducers/GradeNovaReducer';

import { LOAD_GRADE_NOVA,
    LOAD_GRADE_NOVA_FAIL,
    LOAD_GRADE_NOVA_SUCCESS,
    MAPEAR_GRADE_NOVA
} from '../../src/actions/types';

const INITIAL_STATE = 
{   
    loading: false,
    loaded: false,
    cadeirasGradeNova: null
};

describe('GradeNovaReducer',()=>{
    it('has a default state', ()=>{
        expect(request(undefined,{type: 'unexpected'})).toEqual(INITIAL_STATE);
    });
    it('can handle LOAD_GRADE_NOVA request', ()=>{
        expect(request(undefined,{type: LOAD_GRADE_NOVA})).toEqual({...INITIAL_STATE, loading: true, loaded: false});
    });
    it('can handle LOAD_GRADE_NOVA_SUCCESS request', ()=>{
        expect(request(undefined,{type: LOAD_GRADE_NOVA_SUCCESS, payload: []})).toEqual({...INITIAL_STATE, loaded: true, loading: false, cadeirasGradeNova: []});
    });
    it('can handle LOAD_GRADE_NOVA_FAIL request', ()=>{
        expect(request(undefined,{type: LOAD_GRADE_NOVA_FAIL})).toEqual({...INITIAL_STATE, loaded: false, loading: false, cadeirasGradeNova: null});
    });
});