import { BranchAndOtherActions } from '../actions'
const initialState = {
    isLoading: false,
    isResult: false,
    // products: {},
    // productsDetail: {},
    isError: false,
    errorMSG: {},
    // data: [],
    // twoKeyList: []
}
export const departReducer = (state = initialState, action) => {
    let newState = state
    switch (action.type) {
        // Action handlers
        case BranchAndOtherActions.SET_DEPART:
            return Object.assign({}, state, { isLoading: true })

        case BranchAndOtherActions.SET_RESULT_FALSE:
            return Object.assign({}, state, { isResult: false })

        case BranchAndOtherActions.SET_DEPART_SUCCESS:
            newState['isLoading'] = false;
            newState['isResult'] = true
            return Object.assign({}, state, newState)

        case BranchAndOtherActions.SET_DEPART_FAIL:
            newState['isError'] = true;
            newState['isLoading'] = false
            newState['errorMSG'] = action.payload
            return Object.assign({}, state, newState)

        // case 'GET_STORE':
        //     return Object.assign({}, state, { isLoading: true })

        // case 'GET_STORE_SUCCESS':
        //     newState = Object.assign({}, state.store);
        //     newState = action.payload;

        //     return Object.assign({}, state, { isLoading: false, store: newState })
        // case 'GET_STORE_FAIL':
        //     return Object.assign({}, state, { isLoading: false })

        // case 'GET_PRODUCT_DETAIL':
        //     return Object.assign({}, state, { isLoading: true })

        // case 'GET_PRODUCT_DETAIL_SUCCESS':
        //     newState = Object.assign({}, state.productsDetail);
        //     newState = action.payload;

        //     return Object.assign({}, state, { isLoading: false, productsDetail: newState })
        // case 'GET_PRODUCT_DETAIL_FAIL':
        //     return Object.assign({}, state, { isLoading: false })

        // case 'GET_STORE_DETAIL':
        //     return Object.assign({}, state, { isLoading: true })

        // case 'GET_STORE_DETAIL_SUCCESS':
        //     newState = Object.assign({}, state);
        //     console.log("valueeeeeeeeeeeee", action.payload)
        //     newState['storesDetail'] = action.payload.value;
        //     newState['data'] = action.payload.data;
        //     newState['twoKeyList'] = action.payload.twoKeyList;

        //     newState['isLoading'] = false
        //     return Object.assign({}, state, newState)
        // case 'GET_STORE_DETAIL_FAIL':
        //     return Object.assign({}, state, { isLoading: false })

        // case 'GET_STOCK':
        //     return Object.assign({}, state, { isLoading: true })

        // case 'GET_STOCK_SUCCESS':
        //     newState = Object.assign({}, state.stock);
        //     newState['headers'] = action.payload.headers;
        //     newState['value'] = action.payload.value;

        //     return Object.assign({}, state, { isLoading: false, stock: newState })
        // case 'GET_STOCK_FAIL':
        //     return Object.assign({}, state, { isLoading: false })
        // //default state return
        default:
            return state;
    }
}