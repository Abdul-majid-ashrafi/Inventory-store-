import * as firebase from "firebase";
import { Observable } from 'rxjs'
import { BranchesActions } from '../actions'


export class BranchesEpic {

    static createBranche = (action$) =>
        action$.ofType(BranchesActions.SET_BRANCH)
            .switchMap(({ payload }) => {
                return firebase.database().ref('/').child(`branches/${BranchesEpic.getLocalStorage().uid}`).push(payload)
                    .then((response) => {
                        return {
                            type: BranchesActions.SET_BRANCH_SUCCESS
                        }
                    })
                    .catch((error) => {
                        return Observable.of({
                            type: BranchesActions.SET_BRANCH_FAIL,
                            payload: error.code
                        })
                    })
            })










    static getLocalStorage() {
        return JSON.parse(localStorage.getItem('store'));
    }
}

