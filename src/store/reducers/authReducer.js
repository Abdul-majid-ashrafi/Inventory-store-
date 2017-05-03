// import { AuthActions } from '../actions'

const initialState = {
    user: {},
    isRegister: false,
    isLoading: false,
    isLoggedIn: false,
    error: {}
}
export const authReducer = (state = initialState, action) => {
    let newState = state
    switch (action.type) {
        case 'REGISTER':
            return Object.assign({}, state, { isLoading: true });

        case 'REGISTER_SUCCESS':
            // newState = state;
            newState['isLoading'] = false;
            newState['isRegister'] = true;
            return Object.assign({}, state, newState)

        case 'REGISTER_FAIL':
            // newState = state;
            newState['error'] = action.payload
            newState['isLoading'] = false;
            return Object.assign({}, state, newState);

        // LOGIN Action handlers
        case 'LOGIN':
            return Object.assign({}, state, { isLoading: true });

        case 'LOGIN_SUCCESS':
            newState['isLoading'] = false;
            newState['isLoggedIn'] = true;
            newState['user'] = action.payload;
            return Object.assign({}, state, newState)

        case 'ALREADY_LOGGEDIN':
            return Object.assign({}, state, { isLoading: false });

        case 'LOGIN_FAIL':
            newState['error'] = action.payload
            newState['isLoading'] = false;
            return Object.assign({}, state, newState);

        //logout 
        case 'LOGOUT':
            return Object.assign({}, state);

        case 'LOGOUT_SUCCESS':
            newState['isLoggedIn'] = false;
            newState['user'] = {};
            return Object.assign({}, state, newState);

        case 'LOGOUT_FAIL':
            return Object.assign({}, state)

        //default state return
        default:
            return state;
    }
}