import { createStore, combineReducers, applyMiddleware } from "redux";
import { combineEpics, createEpicMiddleware } from 'redux-observable'

// all reducer import
import { authReducer, branchReducer, departReducer, customerReducer, supplierReducer, productReducer, purchaseReducer } from './reducers'

// all Epic import
import { AuthEpic, BranchesEpic, DepartmentEpic, CustomerEpic, SuppleirEpic, ProductEpic, PurchaseEpic } from './epics'

const rootReducer = combineReducers({
    authReducer,
    branchReducer,
    departReducer,
    customerReducer,
    supplierReducer,
    productReducer,
    purchaseReducer
})

const allEpics = combineEpics(
    AuthEpic.register,
    AuthEpic.login,
    AuthEpic.alreadyLoggedIn,
    BranchesEpic.createBranche,
    BranchesEpic.getBranch,
    DepartmentEpic.createDepartment,
    DepartmentEpic.getDepartment,
    CustomerEpic.createCustomer,
    SuppleirEpic.createSupleir,
    CustomerEpic.getCustomer,
    SuppleirEpic.getSuppleir,
    ProductEpic.createProduct,
    ProductEpic.getProduct,
    PurchaseEpic.createPurchase
)

const epicMiddleware = createEpicMiddleware(allEpics)

export const store = createStore(
    rootReducer,
    applyMiddleware(epicMiddleware)
)
// store.subscribe(() => { console.log(store.getState()) })