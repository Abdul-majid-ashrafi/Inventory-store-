// import * as firebase from "firebase";
// import { Observable } from 'rxjs'
// import { BranchAndOtherActions } from '../actions'


// export class DepartmentEpic {

//     static createDepartment = (action$) =>
//         action$.ofType('SET_DEPART')
//             .switchMap(({ payload }) => {
//                 return firebase.database().ref('/').child(`departments/${DepartmentEpic.getLocalStorage().uid}`).push(payload)
//                     .then((response) => {
//                         return {
//                             type: 'SET_DEPART_SUCCESS'
//                         }
//                     })
//                     .catch((error) => {
//                         return Observable.of({
//                             type: 'SET_DEPART_FAIL',
//                             payload: error.code
//                         })
//                     })
//             })

//     // Get all Department on firebase database through user uid 
//     static getDepartment = (action$) => {
//         return action$.ofType('LOGIN_SUCCESS')
//             .switchMap(({ payload }) => {
//                 if (payload) {
//                     firebase.database().ref('/').child(`departments/${payload.uid}`).on("value", (snapshot) => {
//                         if (snapshot.val()) {
//                             BranchAndOtherActions.getAllDepart(snapshot.val())
//                         }
//                     })
//                 }
//                 return Observable.of({
//                     type: 'GET_DEPARTMENT_FAIL',
//                     // payload: {}
//                 })

//             })
//     }
//     static getLocalStorage() {
//         return JSON.parse(localStorage.getItem('store'));
//     }
// }

