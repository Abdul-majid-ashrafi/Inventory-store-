export class BranchesActions {

    static SET_DATA = 'SET_DATA';
    static SET_DATA_SUCCESS = 'SET_DATA_SUCCESS';
    static SET_DATA_FAIL = 'SET_DATA_FAIL';
    static SET_RESULT_FALSE = 'SET_RESULT_FALSE';

    // static LOGIN = 'LOGIN';
    // static LOGIN_SUCCESS = 'LOGIN_SUCCESS';
    // static ALREADY_LOGGEDIN = 'ALREADY_LOGGEDIN';
    // static LOGIN_FAIL = 'LOGIN_FAIL';

    // static LOGOUT = 'LOGOUT';
    // static LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
    // static LOGOUT_FAIL = 'LOGOUT_FAIL';

    static setResultFalse = () => {
        return {
            type: BranchesActions.SET_RESULT_FALSE
        }
    }

    static addData = (obj, path) => {
        return {
            type: BranchesActions.SET_DATA,
            payload: obj,
            path: path
        }
    }
    // static alreadyLogin = (data) => {
    //     return {
    //         type: AuthActions.ALREADY_LOGGEDIN,
    //         payload: data
    //     }
    // }

    // static login = (credential) => {
    //     return {
    //         type: AuthActions.LOGIN,
    //         credentials: credential
    //     }
    // }

    // static logout = () => {
    //     return {
    //         type: AuthActions.LOGOUT
    //     }
    // }
}