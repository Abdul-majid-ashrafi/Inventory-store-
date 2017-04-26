export class BranchesActions {

    static SET_BRANCH = 'SET_BRANCH';
    static SET_BRANCH_SUCCESS = 'SET_BRANCH_SUCCESS';
    static SET_BRANCH_FAIL = 'SET_BRANCH_FAIL';

    // static LOGIN = 'LOGIN';
    // static LOGIN_SUCCESS = 'LOGIN_SUCCESS';
    // static ALREADY_LOGGEDIN = 'ALREADY_LOGGEDIN';
    // static LOGIN_FAIL = 'LOGIN_FAIL';

    // static LOGOUT = 'LOGOUT';
    // static LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
    // static LOGOUT_FAIL = 'LOGOUT_FAIL';

    static createBranch = (obj) => {
        return {
            type: BranchesActions.SET_BRANCH,
            payload: obj
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