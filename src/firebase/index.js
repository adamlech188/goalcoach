import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCEqP_3-xM7QQH5eTn1nLiqe_1nt-Zdr18",
    authDomain: "goalcoach-37b91.firebaseapp.com",
    databaseURL: "https://goalcoach-37b91.firebaseio.com",
    projectId: "goalcoach-37b91",
    storageBucket: "goalcoach-37b91.appspot.com",
    messagingSenderId: "1097255303424"
  };

export const firebaseApp = firebase.initializeApp(config);
