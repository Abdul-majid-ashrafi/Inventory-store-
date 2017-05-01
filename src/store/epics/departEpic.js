import * as firebase from "firebase";
import { Observable } from 'rxjs'
import { BranchAndOtherActions } from '../actions'


export class DepartmentEpic {

    static createDepartment = (action$) =>
        action$.ofType(BranchAndOtherActions.SET_DEPART)
            .switchMap(({ payload }) => {
                return firebase.database().ref('/').child(`departments/${DepartmentEpic.getLocalStorage().uid}`).push(payload)
                    .then((response) => {
                        return {
                            type: BranchAndOtherActions.SET_DEPART_SUCCESS
                        }
                    })
                    .catch((error) => {
                        return Observable.of({
                            type: BranchAndOtherActions.SET_DEPART_FAIL,
                            payload: error.code
                        })
                    })
            })

    static getLocalStorage() {
        return JSON.parse(localStorage.getItem('store'));
    }
}

