export class AuthActions {

    static REGISTER = 'REGISTER';
    static REGISTER_SUCCESS = 'REGISTER_SUCCESS';
    static REGISTER_FAIL = 'REGISTER_FAIL';

    static LOGIN = 'LOGIN';
    static LOGIN_SUCCESS = 'LOGIN_SUCCESS';
    static ALREADY_LOGGEDIN = 'ALREADY_LOGGEDIN';
    static LOGIN_FAIL = 'LOGIN_FAIL';

    static LOGOUT = 'LOGOUT';
    static LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
    static LOGOUT_FAIL = 'LOGOUT_FAIL';

    static register = (obj) => {
        return {
            type: AuthActions.REGISTER,
            payload: obj
        }
    }
    static alreadyLogin = (data) => {
        return {
            type: AuthActions.ALREADY_LOGGEDIN,
            payload: data
        }
    }

    static login = (credential) => {
        return {
            type: AuthActions.LOGIN,
            credentials: credential
        }
    }

    static logout = () => {
        return {
            type: AuthActions.LOGOUT
        }
    }
}