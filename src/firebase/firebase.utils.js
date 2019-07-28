import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyDtn9uST7QrkrQs_dLjUmVpQmT4mmi0rJI',
  authDomain: 'm-city-be222.firebaseapp.com',
  databaseURL: 'https://m-city-be222.firebaseio.com',
  projectId: 'm-city-be222',
  storageBucket: '',
  messagingSenderId: '726161943640',
  appId: '1:726161943640:web:6af82b24d9bc0153'
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
