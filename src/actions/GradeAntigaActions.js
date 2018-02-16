import { LOAD_GRADE_ANTIGA,
    LOAD_GRADE_ANTIGA_FAIL,
    LOAD_GRADE_ANTIGA_SUCCESS,
    TOGGLE_CADEIRA,
    SELECIONA_PERIODO,
    REALIZA_CONVERSAO,
    REALIZA_CONVERSAO_SUCCESS,
    REALIZA_CONVERSAO_FAIL,
    SELECIONA_TODAS_DISCIPLINAS
} from '../actions/types';

import axios from 'axios';

const limitarOptativas = (cadeira) => {
  return (cadeira.categoria!='Optativa' ||
    (cadeira.categoria=='Optativa' && (cadeira.id_disc=='103' || cadeira.id_disc=='104')));
}

export const loadGradeAntiga = ()=>{
    return (dispatch) => {
        dispatch({type: LOAD_GRADE_ANTIGA});
        axios.get('http://192.168.131.77:5002/antigo')
          .then(function (response) {
            const cadeiras = response.data;
            const mapaCadeiras = {};

            Object.keys(cadeiras).forEach((id)=>{
                const cadeira = cadeiras[id];
                if(limitarOptativas(cadeira)){
                    if (!mapaCadeiras[cadeira.periodo]){
                        mapaCadeiras[cadeira.periodo] = [];
                    }
                    mapaCadeiras[cadeira.periodo].push(cadeira);
                }
            });
            dispatch({type: LOAD_GRADE_ANTIGA_SUCCESS, payload: mapaCadeiras});
          })
          .catch(function (error) {
            dispatch({type: LOAD_GRADE_ANTIGA_FAIL});
          });
    };
};

export const toggleCadeira = (periodo, idCadeira) => {
    return (dispatch) => {
        dispatch({
            type: TOGGLE_CADEIRA,
            payload: {periodo, idCadeira}
        });
    };
};

export const selecionarTodasAsCadeiras = () => {
    return {
        type: SELECIONA_TODAS_DISCIPLINAS
    };
};

export const selecionarTodasAsCadeirasDoPeriodo = (periodo) => {
    return (dispatch) => {
        dispatch({
            type: SELECIONA_PERIODO,
            payload: {periodo}
        });
    }
};
