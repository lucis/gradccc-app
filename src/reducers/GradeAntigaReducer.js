import { LOAD_GRADE_ANTIGA,
        LOAD_GRADE_ANTIGA_FAIL,
        LOAD_GRADE_ANTIGA_SUCCESS,
        TOGGLE_CADEIRA,
        SELECIONA_PERIODO, 
        REALIZA_CONVERSAO,
        REALIZA_CONVERSAO_SUCCESS,
        REALIZA_CONVERSAO_FAIL
    } from '../actions/types';

const INITIAL_STATE = {
    loading: false,
    loaded: false,
    cadeiras: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case LOAD_GRADE_ANTIGA:
        case REALIZA_CONVERSAO:
            return {
                ...state,
                loading: true,
                loaded: false
            };
        case LOAD_GRADE_ANTIGA_SUCCESS:
            return {
                ...state,
                loaded: true,
                loading: false,
                cadeiras: action.payload
            };
        case LOAD_GRADE_ANTIGA_FAIL:
            return {
                ...state,
                loaded: false,
                loading: false,
                cadeiras: null
            };
        case TOGGLE_CADEIRA:
            const { periodo, idCadeira } = action.payload;
            console.log(periodo, idCadeira);
            const novasCadeiras = {...state.cadeiras};
            console.log(novasCadeiras[periodo]);
            novasCadeiras[periodo].forEach((cadeira)=>{
                if (cadeira['id_disc'] == idCadeira){
                    cadeira.selecionada = !cadeira.selecionada;
                }
            });
            return {
                ...state,
                cadeiras: novasCadeiras
            };
        case SELECIONA_PERIODO:
            periodo = action.payload.payload;
            novasCadeiras = {...state.cadeiras};
            novasCadeiras.map(cadeira=>{
                cadeira.selecionada = true;
                return cadeira;
            });
            return {
                ...state,
                cadeiras: novasCadeiras
            };
        default:
            return state;
    }
};