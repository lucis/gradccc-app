import firebase from 'firebase';
import { NavigationActions } from 'react-navigation'
import { EMAIL_CHANGED,
        PASSWORD_CHANGED,
        LOGIN_SUCCESS,
        LOGIN_FAIL,
        LOGIN_USER,
        LOGOUT_USER,
        REGISTER_USER,
        REGISTER_SUCCESS,
        REGISTER_FAIL } from './types';

export const emailChanged = (text) =>{
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) =>{
    return {
        type: PASSWORD_CHANGED,
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

export const loginUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER });

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch, user))
            .catch(() => loginUserFail(dispatch));
    };
};

export const logoutUser = () => {
    return {
        type: LOGOUT_USER,
        payload: null
    };
}

const loginUserFail = (dispatch) => {
    dispatch({ type: LOGIN_FAIL });
}

const loginUserSuccess = (dispatch, user) => {
    dispatch({ type: LOGIN_SUCCESS,
                payload: user});
};

const registerUserFail = (dispatch) => {
    dispatch({ type: REGISTER_FAIL });
}

const registerUserSuccess = (dispatch, user) => {
    dispatch({
       type: REGISTER_SUCCESS,
       payload: user
    });
};
