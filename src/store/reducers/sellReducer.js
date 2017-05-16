// import { BranchAndOtherActions } from '../actions'
const initialState = {
    isLoading: false,
    isResult: false,
    sell: {},
    // productsDetail: {},
    isError: false,
    errorMSG: {},
    // data: [],
    // twoKeyList: []
}
export const sellReducer = (state = initialState, action) => {
    let newState = state
    switch (action.type) {
        // Action handlers
        case 'SET_RESULT_FALSE':
            return Object.assign({}, state, { isResult: false })

        case 'SET_SELL':
            return Object.assign({}, state, { isLoading: true })

        case 'SET_SELL_SUCCESS':
            newState['isLoading'] = false;
            newState['isResult'] = true
            return Object.assign({}, state, newState)

        case 'SET_SELL_FAIL':
            newState['isError'] = true;
            newState['isLoading'] = false
            newState['errorMSG'] = action.payload
            return Object.assign({}, state, newState)


        case 'GET_SELL_SUCCESS':
            newState['sell'] = Object.assign({}, action.payload);
            return Object.assign({}, state, newState)

        default:
            return state;
    }
}