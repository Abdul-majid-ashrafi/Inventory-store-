import { store } from './../index'
export class BranchAndOtherActions {

    static SET_BARANCH = 'SET_BARANCH';
    static SET_BARANCH_SUCCESS = 'SET_BARANCH_SUCCESS';
    static SET_BARANCH_FAIL = 'SET_BARANCH_FAIL';
    static SET_RESULT_FALSE = 'SET_RESULT_FALSE';

    static SET_SUPPLIER = 'SET_SUPPLIER';
    static SET_SUPPLIER_SUCCESS = 'SET_SUPPLIER_SUCCESS';
    static SET_SUPPLIER_FAIL = 'SET_SUPPLIER_FAIL';

    static SET_CUSTOMER = 'SET_CUSTOMER';
    static SET_CUSTOMER_SUCCESS = 'SET_CUSTOMER_SUCCESS';
    static SET_CUSTOMER_FAIL = 'SET_CUSTOMER_FAIL';

    static SET_DEPART = 'SET_DEPART';
    static SET_DEPART_SUCCESS = 'SET_DEPART_SUCCESS';
    static SET_DEPART_FAIL = 'SET_DEPART_FAIL';

    static SET_PRODUCT = 'SET_PRODUCT';
    static SET_PRODUCT_SUCCESS = 'SET_PRODUCT_SUCCESS';
    static SET_PRODUCT_FAIL = 'SET_PRODUCT_FAIL';

    static SET_PURCHASE = 'SET_PURCHASE';
    static SET_PURCHASE_SUCCESS = 'SET_PURCHASE_SUCCESS';
    static SET_PURCHASE_FAIL = 'SET_PURCHASE_FAIL';

    static GET_CUSTOMER = 'GET_CUSTOMER';
    static GET_CUSTOMER_SUCCESS = 'GET_CUSTOMER_SUCCESS';
    static GET_CUSTOMER_FAIL = 'GET_CUSTOMER_FAIL';

    static GET_SUPPLEIR = 'GET_SUPPLEIR';
    static GET_SUPPLEIR_SUCCESS = 'GET_SUPPLEIR_SUCCESS';
    static GET_SUPPLEIR_FAIL = 'GET_SUPPLEIR_FAIL';

    static GET_PRODUCT = 'GET_PRODUCT';
    static GET_PRODUCT_SUCCESS = 'GET_PRODUCT_SUCCESS';
    static GET_PRODUCT_FAIL = 'GET_PRODUCT_FAIL';

    static GET_BARANCH_SUCCESS = "GET_BARANCH_SUCCESS"
    static GET_BRANCE_FAIL = 'GET_BRANCE_FAIL'

    static GET_DEPART_SUCCESS = "GET_DEPART_SUCCESS"
    static GET_DEPARTMENT_FAIL = 'GET_DEPARTMENT_FAIL'

    // static LOGIN = 'LOGIN';
    // static LOGIN_SUCCESS = 'LOGIN_SUCCESS';
    // static ALREADY_LOGGEDIN = 'ALREADY_LOGGEDIN';
    // static LOGIN_FAIL = 'LOGIN_FAIL';

    // static LOGOUT = 'LOGOUT';
    // static LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
    // static LOGOUT_FAIL = 'LOGOUT_FAIL';

    // SET RESULT FALSE AFTER DATA ADD ON FIREBASE
    static setResultFalse = () => {
        return {
            type: BranchAndOtherActions.SET_RESULT_FALSE
        }
    }

    // CREATE BRANCHE ACTION
    static addBranch = (obj) => {
        return {
            type: BranchAndOtherActions.SET_BARANCH,
            payload: obj
        }
    }

    // CREATE DEPARTMENT ACTION
    static addDepart = (obj) => {
        return {
            type: BranchAndOtherActions.SET_DEPART,
            payload: obj
        }
    }

    // CREATE CUSTOMER ACTION
    static addCustomer = (obj) => {
        return {
            type: BranchAndOtherActions.SET_CUSTOMER,
            payload: obj
        }
    }

    // CREATE SUPPLEIR ACTION
    static addSupplier = (obj) => {
        return {
            type: BranchAndOtherActions.SET_SUPPLIER,
            payload: obj
        }
    }

    // CREATE PRODUCT ACTION
    static addProduct = (obj) => {
        return {
            type: BranchAndOtherActions.SET_PRODUCT,
            payload: obj
        }
    }

    // CREATE PRODUCT ACTION
    static addPurchase = (obj) => {
        console.log(obj)
        return {
            type: BranchAndOtherActions.SET_PURCHASE,
            payload: obj
        }
    }

    // Get all customers
    static getAllCustomers = (payload) => {
        store.dispatch(
            {
                type: BranchAndOtherActions.GET_CUSTOMER_SUCCESS,
                payload: payload
            }
        )
    }

    // Get all suppliers
    static getAllSuppleirs = (payload) => {
        store.dispatch(
            {
                type: BranchAndOtherActions.GET_SUPPLEIR_SUCCESS,
                payload: payload
            }
        )
    }

    // Get all Product
    static getAllProduct = (payload) => {
        store.dispatch(
            {
                type: BranchAndOtherActions.GET_PRODUCT_SUCCESS,
                payload: payload
            }
        )
    }

    // Get all Branche
    static getAllBranch = (payload) => {
        store.dispatch(
            {
                type: BranchAndOtherActions.GET_BARANCH_SUCCESS,
                payload: payload
            }
        )
    }

    // Get all Product
    static getAllDepart = (payload) => {
        store.dispatch(
            {
                type: BranchAndOtherActions.GET_DEPART_SUCCESS,
                payload: payload
            }
        )
    }
}