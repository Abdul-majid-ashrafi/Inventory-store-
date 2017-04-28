import * as firebase from "firebase";
import { Observable } from 'rxjs'
import { BranchesActions } from '../actions'


export class BranchesEpic {

    static createBranche = (action$) =>
        action$.ofType(BranchesActions.SET_DATA)
            .switchMap(({ payload, path }) => {
                return firebase.database().ref('/').child(`${path}/${BranchesEpic.getLocalStorage().uid}`).push(payload)
                    .then((response) => {
                        return {
                            type: BranchesActions.SET_DATA_SUCCESS
                        }
                    })
                    .catch((error) => {
                        return Observable.of({
                            type: BranchesActions.SET_DATA_FAIL,
                            payload: error.code
                        })
                    })
            })










    static getLocalStorage() {
        return JSON.parse(localStorage.getItem('store'));
    }
}

