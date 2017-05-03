import * as firebase from "firebase";
import { Observable } from 'rxjs'
// import { AuthActions } from '../actions'


export class AuthEpic {

    static register = (action$) =>
        action$.ofType('REGISTER')
            .switchMap(({ payload }) => {
                return firebase.auth().createUserWithEmailAndPassword(payload.email, payload.pass)
                    .then((response) => {
                        payload.uid = response.uid
                        return firebase.database().ref(`/users/${response.uid}`).set(payload).then(() => {
                            return {
                                type: 'REGISTER_SUCCESS',
                                payload: payload
                            }
                        })
                    })
                    .catch((error) => {
                        return {
                            type: 'REGISTER_FAIL',
                            payload: error.code
                        }
                    })
            })

    static login = (action$) =>
        action$.ofType('LOGIN')
            .switchMap(({ credentials }) => {
                return Observable.fromPromise(firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.pass))
                    .catch(err => {
                        return Observable.of({
                            type: 'LOGIN_FAIL',
                            payload: err
                        });
                    })
                    .switchMap((res) => {
                        if (!res.payload) {
                            console.log('response wala', res)
                            return Observable.fromPromise(firebase.database().ref('/').child(`users/${res.uid}`).once('value'))
                                .map(data => {
                                    let obj = {}
                                    obj["uid"] = res.uid
                                    obj = Object.assign({}, obj, data.val())
                                    delete obj['pass']
                                    AuthEpic.setLocalStorage(obj)
                                    return {
                                        type: 'LOGIN_SUCCESS',
                                        payload: obj
                                    }
                                })
                        } else {
                            console.log('error wala', res)
                            // error
                            return Observable.of({
                                type: 'LOGIN_FAIL',
                                payload: res.payload.code
                            });
                        }
                    })
            })


    static alreadyLoggedIn(action$) {
        return action$.ofType('ALREADY_LOGGEDIN')
            .switchMap((payload) => {
                return Observable.of({
                    type: 'LOGIN_SUCCESS',
                    payload: AuthEpic.getLocalStorage()
                })
            })
    }




    static logout = (actions$) =>
        actions$.ofType('LOGOUT')
            .switchMap(() => {
                firebase.auth().signOut();
                AuthEpic.clearLocalStorage();
                return Observable.of({
                    type: 'LOGOUT_SUCCESS'
                })
            })


    static setLocalStorage(userObj) {
        localStorage.setItem('store', JSON.stringify(userObj));
    }

    static clearLocalStorage() {
        localStorage.removeItem('store');
    }

    static getLocalStorage() {
        return JSON.parse(localStorage.getItem('store'));
    }
}





    // static register = (action$) =>
    //     action$.ofType('REGISTER')
    //         .switchMap(({ payload }) => {
    //             console.log(payload)
    //             return Observable.of({
    //                 type: 'REGISTER_SUCCESS',
    //                 // payload: payload
    //             });
    //         })

