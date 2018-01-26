import { LOAD_GRADE_NOVA,
         LOAD_GRADE_NOVA_SUCCESS,
         LOAD_GRADE_NOVA_FAIL
} from '../actions/types';

import axios from 'axios';

export const loadGradeNova = ()=>{
    return (dispatch) => {
        dispatch({type: LOAD_GRADE_NOVA});
        axios.get('http://192.168.15.16:5002/novo')
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
          })
          .catch(function (error) {
            dispatch({type: LOAD_GRADE_NOVA_FAIL});
          });
    };
};