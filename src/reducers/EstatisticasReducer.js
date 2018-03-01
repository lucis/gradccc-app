import { 
    CALCULAR_CREDITOS_OBRIGATORIOS
} from '../actions/types';

const INITIAL_STATE = {
    creditosObrigatorios: 0,
    totalCreditosObrigatorios: 0
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case CALCULAR_CREDITOS_OBRIGATORIOS:
            let cadeiras = action.payload.cadeiras;
            let creditosPagos = 0;
            let totalCreditos = 0;

            Object.keys(cadeiras).forEach((periodo) => {
                const cadeirasPorPeriodo = cadeiras[periodo];
                cadeirasPorPeriodo.forEach(cadeira => {
                    if(cadeira.categoria === "Obrigatório"){
                        if(cadeira.selecionada){
                            creditosPagos += cadeira.creditos;
                        }
                        totalCreditos += cadeira.creditos;
                    }
                });
            });

            return {
                ... state,
                creditosObrigatorios: creditosPagos,
                totalCreditosObrigatorios: totalCreditos
            };
        
        default:
            return state;
    }
}