import { BranchesActions } from "../actions";
const initialState = {
    isLoading: false,
    result: false,
    // products: {},
    // productsDetail: {},
    // storesDetail: {},
    // stock: { headers: {}, value: {} },
    // store: {},
    isError: false,
    error: {},
    // data: [],
    // twoKeyList: []
}
export const branchReducer = (state = initialState, action) => {
    console.log(action)
    let newState = state
    switch (action.type) {
        // Action handlers
        case BranchesActions.SET_BRANCH:
            return Object.assign({}, state, { isLoading: true })

        case BranchesActions.SET_BRANCH_SUCCESS:
            newState['isLoading'] = false;
            newState['result'] = true
            return Object.assign({}, state, newState)

        case BranchesActions.SET_BRANCH_FAIL:
            newState['isError'] = true;
            newState['isLoading'] = false
            newState['error'] = action.payload
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