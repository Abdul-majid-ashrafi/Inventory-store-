import { createStore, combineReducers, applyMiddleware } from "redux";
import { combineEpics, createEpicMiddleware } from 'redux-observable'

// all reducer import
import { authReducer, branchReducer, departReducer, customerReducer, supplierReducer, productReducer } from './reducers'

// all Epic import
import { AuthEpic, BranchesEpic, DepartmentEpic, CustomerEpic, SuppleirEpic, ProductEpic } from './epics'

const rootReducer = combineReducers({
    authReducer,
    branchReducer,
    departReducer,
    customerReducer,
    supplierReducer,
    productReducer
})

const allEpics = combineEpics(
    AuthEpic.register,
    AuthEpic.login,
    AuthEpic.alreadyLoggedIn,
    BranchesEpic.createBranche,
    DepartmentEpic.createDepartment,
    CustomerEpic.createCustomer,
    SuppleirEpic.createSupleir,
    CustomerEpic.getCustomer,
    SuppleirEpic.getSuppleir,
    ProductEpic.createProduct,
    ProductEpic.getProduct
)

const epicMiddleware = createEpicMiddleware(allEpics)

export const store = createStore(
    rootReducer,
    applyMiddleware(epicMiddleware)
)
// store.subscribe(() => { console.log(store.getState()) })