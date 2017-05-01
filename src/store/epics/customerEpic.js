import * as firebase from "firebase";
import { Observable } from 'rxjs'
import { BranchAndOtherActions } from '../actions'


export class CustomerEpic {

    static createCustomer = (action$) =>
        action$.ofType(BranchAndOtherActions.SET_CUSTOMER)
            .switchMap(({ payload }) => {
                return firebase.database().ref('/').child(`customer/${CustomerEpic.getLocalStorage().uid}`).push(payload)
                    .then((response) => {
                        return {
                            type: BranchAndOtherActions.SET_CUSTOMER_SUCCESS
                        }
                    })
                    .catch((error) => {
                        return Observable.of({
                            type: BranchAndOtherActions.SET_CUSTOMER_FAIL,
                            payload: error.code
                        })
                    })
            })

    static getLocalStorage() {
        return JSON.parse(localStorage.getItem('store'));
    }
}

