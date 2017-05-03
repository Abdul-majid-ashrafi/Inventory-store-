import * as firebase from "firebase";
import { Observable } from 'rxjs'
import { BranchAndOtherActions } from '../actions'
// import { store } from '../index'

export class CustomerEpic {

    // Create customers with user uid on firebase database
    static createCustomer = (action$) =>
        action$.ofType('SET_CUSTOMER')
            .switchMap(({ payload }) => {
                return firebase.database().ref('/').child(`customer/${CustomerEpic.getLocalStorage().uid}`).push(payload)
                    .then((response) => {
                        return {
                            type: 'SET_CUSTOMER_SUCCESS'
                        }
                    })
                    .catch((error) => {
                        return Observable.of({
                            type: 'SET_CUSTOMER_FAIL',
                            payload: error.code
                        })
                    })
            })

    // Get all customers on firebase database through user uid 
    static getCustomer = (action$) => {
        return action$.ofType('LOGIN_SUCCESS')
            .switchMap(({ payload }) => {
                if (payload) {
                    firebase.database().ref('/').child(`customer/${payload.uid}`).on("value", (snapshot) => {
                        if (snapshot.val()) {
                            BranchAndOtherActions.getAllCustomers(snapshot.val())
                        }
                    })
                }
                return Observable.of({
                    type: 'GET_CUSTOMER_FAIL',
                    // payload: {}
                })

            })


        // .switchMap(({ payload }) => {
        //     if (!payload) {
        //         console.log("response------")
        //         return Observable.fromPromise(firebase.database().ref('/')
        //             .child(`customer/${CustomerEpic.getLocalStorage().uid}`).once('value'))
        //             .map(response => {
        //                 let obj = response.val()
        //                 obj.id = response.key
        //                 // response
        //                 return {
        //                     type: 'GET_CUSTOMER_SUCCESS',
        //                     payload: obj
        //                 }
        //             })
        //     } else {
        //         // error
        //         return Observable.of({
        //             type: 'GET_CUSTOMER_FAIL'
        //         });
        //     }
        // })
    }


    static getLocalStorage() {
        return JSON.parse(localStorage.getItem('store'));
    }
}

