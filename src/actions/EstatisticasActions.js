import {
    CALCULAR_CREDITOS_OBRIGATORIOS
} from '../actions/types';

export const calcularCreditosOptativos = (cadeiras) => {
    return(dispatch) => {
        dispatch({
            type: CALCULAR_CREDITOS_OBRIGATORIOS,
            payload: { cadeiras }
        });
    }
};