import firebase from 'firebase';
import { NEW_EMAIL_CHANGED,
        NEW_PASSWORD_CHANGED,
        REGISTER_USER,
        REGISTER_SUCCESS,
        REGISTER_FAIL } from './types';

export const newEmailChanged = (text) =>{
    return {
        type: NEW_EMAIL_CHANGED,
        payload: text
    };
};

export const newPasswordChanged = (text) =>{
    return {
        type: NEW_PASSWORD_CHANGED,
        payload: text
    };
};

export const registerUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: REGISTER_USER });

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => registerUserSuccess(dispatch, user))
            .catch(() => registerUserFail(dispatch));
    }
}

const registerUserFail = (dispatch) => {
    dispatch({ type: REGISTER_FAIL });
}

const registerUserSuccess = (dispatch, user) => {
    dispatch({
       type: REGISTER_SUCCESS,
       payload: user
    });
};
