import { LOAD_GRADE_NOVA,
         LOAD_GRADE_NOVA_SUCCESS,
         LOAD_GRADE_NOVA_FAIL,
         MAPEAR_GRADE_NOVA
} from '../actions/types';

import axios from 'axios';

export const loadGradeNova = (idCadeiras)=>{
    return (dispatch) => {
        dispatch({type: LOAD_GRADE_NOVA});
        axios.get('http://192.168.25.32:5002/novo')
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
            dispatch({type: LOAD_GRADE_NOVA_SUCCESS, payload: mapaCadeiras});
            dispatch({
                type: MAPEAR_GRADE_NOVA,
                payload: {idCadeiras}
            });
          })
          .catch(function (error) {
            dispatch({type: LOAD_GRADE_NOVA_FAIL});
          });
    };
};