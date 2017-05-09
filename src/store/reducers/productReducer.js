const initialState = {
    isLoading: false,
    isResult: false,
    // products: {},
    // productsDetail: {},
    // storesDetail: {},
    // stock: { headers: {}, value: {} },
    products: {},
    isError: false,
    errorMSG: {},
    // data: [],
    // twoKeyList: []
}
export const productReducer = (state = initialState, action) => {
    // console.log('action', action)

    let newState = state
    switch (action.type) {
        // Action handlers
        case 'SET_RESULT_FALSE':
            return Object.assign({}, state, { isResult: false })

        case 'SET_PRODUCT':
            return Object.assign({}, state, { isLoading: true })

        case 'SET_PRODUCT_SUCCESS':
            newState['isLoading'] = false;
            newState['isResult'] = true
            return Object.assign({}, state, newState)

        case 'SET_PRODUCT_FAIL':
            newState['isError'] = true;
            newState['isLoading'] = false
            newState['errorMSG'] = action.payload
            return Object.assign({}, state, newState)

        // Get PRODUCTs actions
        case 'GET_PRODUCT':
            return Object.assign({}, state, { isLoading: true })

        case 'GET_PRODUCT_SUCCESS':
            newState['products'] = Object.assign({}, action.payload);
            return Object.assign({}, state, newState)

        case 'GET_PRODUCT_FAIL':
            return Object.assign({}, state, { isLoading: false })

        default:
            return state;
    }
}