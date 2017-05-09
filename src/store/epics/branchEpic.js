import * as firebase from "firebase";
import { Observable } from 'rxjs'
import { BranchAndOtherActions } from '../actions'


export class BranchesEpic {

    static createBranche = (action$) =>
        action$.ofType('SET_BARANCH')
            .switchMap(({ payload }) => {
                return firebase.database().ref('/').child(`branches/${BranchesEpic.getLocalStorage().uid}`).push(payload)
                    .then((response) => {
                        return {
                            type: 'SET_BARANCH_SUCCESS'
                        }
                    })
                    .catch((error) => {
                        return Observable.of({
                            type: 'SET_BARANCH_FAIL',
                            payload: error.code
                        })
                    })
            })

            
    // Get all Branch on firebase database through user uid 
    static getBranch = (action$) => {
        return action$.ofType('LOGIN_SUCCESS')
            .switchMap(({ payload }) => {
                if (payload) {
                    firebase.database().ref('/').child(`branches/${payload.uid}`).on("value", (snapshot) => {
                        if (snapshot.val()) {
                            BranchAndOtherActions.getAllBranch(snapshot.val())
                        }
                    })
                }
                return Observable.of({
                    type: 'GET_BRANCE_FAIL',
                    // payload: {}
                })
            })
    }


    static getLocalStorage() {
        return JSON.parse(localStorage.getItem('store'));
    }
}

