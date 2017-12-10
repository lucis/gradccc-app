import { SELECIONAR_DISCIPLINA } from './tipos';

export const selecionarDisciplina = (valor) => {
    return {
        type: SELECIONAR_DISCIPLINA,
        payload: valor
    };
};;