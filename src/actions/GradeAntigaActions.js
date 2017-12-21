import { LOAD_GRADE_ANTIGA,
    LOAD_GRADE_ANTIGA_FAIL,
    LOAD_GRADE_ANTIGA_SUCCESS,
    TOGGLE_CADEIRA,
    SELECIONA_PERIODO, 
    REALIZA_CONVERSAO,
    REALIZA_CONVERSAO_SUCCESS,
    REALIZA_CONVERSAO_FAIL
} from '../actions/types';

import axios from 'axios';

export const loadGradeAntiga = ()=>{
    return (dispatch) => {
        dispatch({type: LOAD_GRADE_ANTIGA});
        axios.get('http://150.165.98.194:5002/antigo')
          .then(function (response) {
            const cadeiras = response.data;
            const mapaCadeiras = {};

            Object.keys(cadeiras).forEach((id)=>{
                const cadeira = cadeiras[id];
                if (!mapaCadeiras[cadeira.periodo]){
                    mapaCadeiras[cadeira.periodo] = [];
                }
                mapaCadeiras[cadeira.periodo].push(cadeira);
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