import { LOAD_GRADE_NOVA,
    LOAD_GRADE_NOVA_FAIL,
    LOAD_GRADE_NOVA_SUCCESS,
    MAPEAR_GRADE_NOVA
} from '../actions/types';

import axios from 'axios';

const INITIAL_STATE = {
    loading: false,
    loaded: false,
    cadeirasGradeNova: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case LOAD_GRADE_NOVA:
            return {
                ...state,
                loading: true,
                loaded: false
            };
        case LOAD_GRADE_NOVA_SUCCESS:
            return {
                ...state,
                loaded: true,
                loading: false,
                cadeirasGradeNova: action.payload
            };
        case LOAD_GRADE_NOVA_FAIL:
            return {
                ...state,
                loaded: false,
                loading: false,
                cadeirasGradeNova: null
            };
        case MAPEAR_GRADE_NOVA:
            const idCadeiras = action.payload.idCadeiras;
            let cadeirasNovaGrade = {...state.cadeirasGradeNova};

            axios.get('http://192.168.25.32:5002/map?disciplinas='+idCadeiras.join(","))
                .then( function(response){
                    const cadeirasMapeadas = response.data;
                    cadeirasMapeadas.forEach(cadeira => {
                        let nomeCadeira = cadeira.nome_novo;
                        cadeirasNovaGrade.forEach(novaCadeira => {
                            if(novaCadeira.nome === nomeCadeira) novaCadeira.selecionada = true
                        });
                    });
                })
                .catch( function(error){
                    //TODO
                });

            return {
                ...state,
                cadeirasGradeNova: cadeirasNovaGrade
            };
        default:
            return state;
    }
};