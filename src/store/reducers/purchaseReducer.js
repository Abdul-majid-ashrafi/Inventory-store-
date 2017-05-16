// import { BranchAndOtherActions } from '../actions'
const initialState = {
    isLoading: false,
    isResult: false,
    purchase: {},
    // productsDetail: {},
    isError: false,
    errorMSG: {},
    // data: [],
    // twoKeyList: []
}
export const purchaseReducer = (state = initialState, action) => {
    let newState = state
    switch (action.type) {
        // Action handlers
        case 'SET_RESULT_FALSE':
            return Object.assign({}, state, { isResult: false })

        case 'SET_PURCHASE':
            return Object.assign({}, state, { isLoading: true })

        case 'SET_PURCHASE_SUCCESS':
            newState['isLoading'] = false;
            newState['isResult'] = true
            return Object.assign({}, state, newState)

        case 'SET_PURCHASE_FAIL':
            newState['isError'] = true;
            newState['isLoading'] = false
            newState['errorMSG'] = action.payload
            return Object.assign({}, state, newState)


        case 'GET_PURCHASE_SUCCESS':
            newState['purchase'] = Object.assign({}, action.payload);
            return Object.assign({}, state, newState)

        default:
            return state;
    }
}