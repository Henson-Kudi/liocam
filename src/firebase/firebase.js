import firebase from 'firebase'
import 'firebase/storage'
import 'firebase/firestore'

const app = firebase.initializeApp({
  "projectId": 'liocam-a9722',
  "appId": '1:440140514136:web:56b5f9357e87f95981db2d',
  "storageBucket": 'liocam-a9722.appspot.com',
  "locationId": 'us-central',
  "apiKey": 'AIzaSyDryn4fgzmP2TIIXgYoOHUg9X6YdWzSQ9k',
  "authDomain": 'liocam-a9722.firebaseapp.com',
  "messagingSenderId": '440140514136'
});

export default app