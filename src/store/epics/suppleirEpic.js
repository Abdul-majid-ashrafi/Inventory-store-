import * as firebase from "firebase";
import { Observable } from 'rxjs'
// import { BranchAndOtherActions } from '../actions'


export class SuppleirEpic {

    static createSupleir = (action$) =>
        action$.ofType('SET_SUPPLIER')
            .switchMap(({ payload }) => {
                return firebase.database().ref('/').child(`suppleirs/${SuppleirEpic.getLocalStorage().uid}`).push(payload)
                    .then((response) => {
                        return {
                            type: 'SET_SUPPLIER_SUCCESS'
                        }
                    })
                    .catch((error) => {
                        return Observable.of({
                            type: 'SET_SUPPLIER_FAIL',
                            payload: error.code
                        })
                    })
            })

    static getLocalStorage() {
        return JSON.parse(localStorage.getItem('store'));
    }
}

