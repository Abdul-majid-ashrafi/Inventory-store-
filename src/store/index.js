import { createStore, combineReducers, applyMiddleware } from "redux";
import { combineEpics, createEpicMiddleware } from 'redux-observable'

// all reducer import
import { authReducer, branchReducer } from './reducers'

// all Epic import
import { AuthEpic, BranchesEpic } from './epics'

const allReducer = combineReducers({
    authReducer,
    branchReducer
})

const allEpics = combineEpics(
    AuthEpic.register,
    AuthEpic.login,
    AuthEpic.alreadyLoggedIn,
    BranchesEpic.createBranche
)

const epicMiddleware = createEpicMiddleware(allEpics)

export const store = createStore(
    allReducer,
    applyMiddleware(epicMiddleware)
)
// store.subscribe(() => { console.log(store.getState()) })