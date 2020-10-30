import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyDpUD-ZuwLfac0O8OWJYS_OhUqTP1AVXxk",
    authDomain: "loving-care-6f6ca.firebaseapp.com",
    databaseURL: "https://loving-care-6f6ca.firebaseio.com",
    projectId: "loving-care-6f6ca",
    storageBucket: "loving-care-6f6ca.appspot.com",
    messagingSenderId: "881912654625",
    appId: "1:881912654625:web:dbbfa86b122d29a5136c60",
    measurementId: "G-0GLFBPCQ2J"
};

firebase.initializeApp(config);
export default firebase;