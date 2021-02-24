import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/database'
import 'firebase/auth'
import 'firebase/storage'


var firebaseConfig = {
    apiKey: "AIzaSyB_5XFr30d0w88QS8W_nluItRo8YWy7bPY",
    authDomain: "revents-81a4c.firebaseapp.com",
    projectId: "revents-81a4c",
    storageBucket: "revents-81a4c.appspot.com",
    messagingSenderId: "613799359887",
    appId: "1:613799359887:web:b745aa0c59520d4e1f87fa",
    measurementId: "G-7DWDPJ8GHQ"
};

firebase.initializeApp(firebaseConfig)
firebase.firestore()
export default firebase