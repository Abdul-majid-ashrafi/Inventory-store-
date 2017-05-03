import * as firebase from "firebase";
import { Observable } from 'rxjs'
// import { BranchAndOtherActions } from '../actions'


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

    static getLocalStorage() {
        return JSON.parse(localStorage.getItem('store'));
    }
}

