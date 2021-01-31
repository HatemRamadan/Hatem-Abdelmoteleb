import firebase from 'firebase';
import FIREBASE_CONFIG from './config.firebase';

const Firebase = firebase.initializeApp(FIREBASE_CONFIG);

export default Firebase;
