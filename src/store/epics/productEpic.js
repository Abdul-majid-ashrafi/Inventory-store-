import * as firebase from "firebase";
import { Observable } from 'rxjs'
import { BranchAndOtherActions } from '../actions'

export class ProductEpic {

    // Create Product with user uid on firebase database
    static createProduct = (action$) =>
        action$.ofType('SET_PRODUCT')
            .switchMap(({ payload }) => {
                return firebase.database().ref('/').child(`product/${ProductEpic.getLocalStorage().uid}`).push(payload)
                    .then((response) => {
                        return {
                            type: 'SET_PRODUCT_SUCCESS'
                        }
                    })
                    .catch((error) => {
                        return Observable.of({
                            type: 'SET_PRODUCT_FAIL',
                            payload: error.code
                        })
                    })
            })

    // Get all Products on firebase database through user uid 
    static getProduct = (action$) => {
        return action$.ofType('LOGIN_SUCCESS')
            .switchMap(({ payload }) => {
                if (payload) {
                    firebase.database().ref('/').child(`product/${payload.uid}`).on("value", (snapshot) => {
                        if (snapshot.val()) {
                            BranchAndOtherActions.getAllProduct(snapshot.val())
                        }
                    })
                }
                return Observable.of({
                    type: 'GET_PRODUCT_FAIL',
                    // payload: {}
                })
            })
    }

    static getLocalStorage() {
        return JSON.parse(localStorage.getItem('store'));
    }
}

