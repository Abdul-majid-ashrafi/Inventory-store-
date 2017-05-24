import * as firebase from "firebase";
import { Observable } from 'rxjs'
import { BranchAndOtherActions } from '../actions'


export class SellEpic {
    // Create Sell with user uid on firebase database
    static createSell = (action$) =>
        action$.ofType('SET_SELL')
            .switchMap(({ payload }) => {
                console.log(payload)
                delete payload.eachPrice
                payload.productId = payload.ProName.id
                // payload.productDescription = payload.ProName.description
                payload.price = payload.ProName.eachPrice
                payload.ProName = payload.ProName.productName
                payload.createdAt = firebase.database.ServerValue.TIMESTAMP
                // console.log(payload)
                return Observable.fromPromise(firebase.database().ref('/').child(`sell/${SellEpic.getLocalStorage().uid}`).push(payload))
                    .catch((error) => {
                        return Observable.of({
                            type: 'SET_SELL_FAIL',
                            payload: error.code
                        })
                    })
                    .switchMap((error) => {
                        if (error.message) {
                            // error
                            return {
                                type: 'SET_SELL_FAIL',
                                payload: error.message
                            };
                        } else {
                            return Observable.fromPromise(firebase.database().ref('/').child(`/product/${SellEpic.getLocalStorage().uid}/${payload.productId}`).once('value'))
                                .map(snapshot => {
                                    let total = {
                                        quantity: snapshot.val().quantity - payload.quantity,
                                        totalPrice: snapshot.val().totalPrice - payload.totalPrice,
                                        // department: payload.department
                                    }
                                    firebase.database().ref('/').child(`product/${SellEpic.getLocalStorage().uid}/${payload.productId}`).update(total)
                                    return {
                                        type: 'SET_SELL_SUCCESS'
                                    }
                                })
                        }
                    })
            })

    // Get all Sell on firebase database through user uid 
    static getSell = (action$) => {
        return action$.ofType('LOGIN_SUCCESS')
            .switchMap(({ payload }) => {
                if (payload) {
                    firebase.database().ref('/').child(`sell/${payload.uid}`).on("value", (snapshot) => {
                        if (snapshot.val()) {
                            BranchAndOtherActions.getAllSell(snapshot.val())
                        }
                    })
                }
                return Observable.of({
                    type: 'GET_SELL_FAIL',
                    // payload: {}
                })
            })
    }


    static getLocalStorage() {
        return JSON.parse(localStorage.getItem('store'));
    }
}

