// import { BranchAndOtherActions } from "../actions";
const initialState = {
    isLoading: false,
    isResult: false,
    // products: {},
    // productsDetail: {},
    // storesDetail: {},
    // stock: { headers: {}, value: {} },
    customers: {},
    isError: false,
    errorMSG: {},
    // data: [],
    // twoKeyList: []
}
export const customerReducer = (state = initialState, action) => {
    // console.log('action', action)

    let newState = state
    switch (action.type) {
        // Action handlers
        case 'SET_RESULT_FALSE':
            return Object.assign({}, state, { isResult: false })

        case 'SET_CUSTOMER':
            return Object.assign({}, state, { isLoading: true })

        case 'SET_CUSTOMER_SUCCESS':
            newState['isLoading'] = false;
            newState['isResult'] = true
            return Object.assign({}, state, newState)

        case 'SET_CUSTOMER_FAIL':
            newState['isError'] = true;
            newState['isLoading'] = false
            newState['errorMSG'] = action.payload
            return Object.assign({}, state, newState)

        // Get Customers actions
        // case 'GET_CUSTOMER':
        //     return Object.assign({}, state, { isLoading: true })

        case 'GET_CUSTOMER_SUCCESS':
            newState['customers'] = Object.assign({}, action.payload);
            newState['isResult'] = true
            return Object.assign({}, state, newState)

        case 'GET_CUSTOMER_FAIL':
            return Object.assign({}, state, { isLoading: false })

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
        //     newState['CUSTOMER'] = action.payload.data;
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