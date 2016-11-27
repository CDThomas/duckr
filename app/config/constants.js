import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyA6R3glsmB_zVYpQKrFn2ugQ-TGnQLbmFU',
  authDomain: 'duckr-402f3.firebaseapp.com',
  databaseURL: 'https://duckr-402f3.firebaseio.com',
  storageBucket: 'duckr-402f3.appspot.com',
  messagingSenderId: '596673007130',
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth

export const usersDucksExpirationLength = 100000 // 10 minutes
export const userExpirationLength = 100000 // 10 minutes
