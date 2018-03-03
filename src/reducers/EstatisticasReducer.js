import { 
    CALCULAR_CREDITOS_OBRIGATORIOS,
    CALCULAR_CREDITOS_OPTATIVOS_ESPECIFICOS,
    CALCULAR_CREDITOS_OPTATIVOS_GERAIS
} from '../actions/types';

const INITIAL_STATE = {
    creditosObrigatorios: 0,
    totalCreditosObrigatorios: 0,
    creditosOptativosEspecificos: 0,
    totalCreditosOptativosEspecificos: 0,
    creditosOptativosGerais: 0,
    totalCreditosOptativosGerais: 0
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case CALCULAR_CREDITOS_OBRIGATORIOS:
            let cadeiras = action.payload.cadeiras;
            let creditosPagos = 0;
            let totalCreditos = 0;

            Object.keys(cadeiras).forEach((periodo) => {
                const cadeirasPorPeriodo = cadeiras[periodo];
                cadeirasPorPeriodo.filter(cadeira => {return cadeira.categoria === "Obrigatório"})
                                        .forEach(cadeira => {
                                            if(cadeira.selecionada){
                                                creditosPagos += cadeira.creditos;
                                            }
                                            totalCreditos += cadeira.creditos;
                                        });
            });
            return {
                ... state,
                creditosObrigatorios: creditosPagos,
                totalCreditosObrigatorios: totalCreditos
            };

        case CALCULAR_CREDITOS_OPTATIVOS_ESPECIFICOS:
            cadeiras = action.payload.cadeiras;
            creditosPagos = 0;
            totalCreditos = 0;
            console.log(cadeiras);
            Object.keys(cadeiras).forEach((periodo) => {
                const cadeirasPorPeriodo = cadeiras[periodo];
                cadeirasPorPeriodo.filter(cadeira => {return cadeira.categoria === "Optativa Específica"})
                                        .forEach(cadeira => {
                                            if(cadeira.selecionada){
                                                creditosPagos += cadeira.creditos;
                                            }
                                            totalCreditos += cadeira.creditos;
                                        });
            });
            return{
                ... state,
                creditosOptativosEspecificos: creditosPagos,
                totalCreditosOptativosEspecificos: totalCreditos
            };

        case CALCULAR_CREDITOS_OPTATIVOS_GERAIS:
            cadeiras = action.payload.cadeiras;
            creditosPagos = 0;
            totalCreditos = 0;
            console.log(cadeiras);
            Object.keys(cadeiras).forEach((periodo) => {
                const cadeirasPorPeriodo = cadeiras[periodo];
                cadeirasPorPeriodo.filter(cadeira => {return cadeira.categoria === "Optativa Geral"})
                                        .forEach(cadeira => {
                                            if(cadeira.selecionada){
                                                creditosPagos += cadeira.creditos;
                                            }
                                            totalCreditos += cadeira.creditos;
                                        });
            });
            return{
                ... state,
                creditosOptativosGerais: creditosPagos,
                totalCreditosOptativosGerais: totalCreditos
            };

        default:
            return state;
    }
}