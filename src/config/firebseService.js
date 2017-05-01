import * as firebase from "firebase"
import { AuthEpic } from '../store/epics'


export class FBService {
    constructor() {
        alert()
    }
    mainRef = firebase.database().ref();
    // static firebaseTimeStamp = firebase.database['ServerValue'].TIMESTAMP;
    // static storage = firebase.storage().ref();
    // static auth = firebase.auth();
    static pushData(path, data) {
        return firebase.database().ref('/').child(path).push(data)
    }
    static getPushKey(path) {
        console.log(AuthEpic.getLocalStorage())
        return firebase.database().ref('/branches/').child(path).push();
    }
    static saveMultipath(multipath) {
        return firebase.database().ref().update(multipath)
    }

}