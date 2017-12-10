import { SELECIONAR_DISCIPLINA } from '../actions/tipos';

const STATE_INICIAL = {
    selecionada: false
};

export default (state = STATE_INICIAL, action) => {
    switch(action.type){
        case SELECIONAR_DISCIPLINA:
            return { ...state, selecionada: action.payload }
        default:
            return state;
    };
};