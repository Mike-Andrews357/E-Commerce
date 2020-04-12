import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyCUZ32dZc6NAVGsbakBVuA2wq2fgOalRwA',
	authDomain: 'crwn-db-2f2f9.firebaseapp.com',
	databaseURL: 'https://crwn-db-2f2f9.firebaseio.com',
	projectId: 'crwn-db-2f2f9',
	storageBucket: 'crwn-db-2f2f9.appspot.com',
	messagingSenderId: '331655044266',
	appId: '1:331655044266:web:c10882fe522c31ac1204d3',
	measurementId: 'G-30NKGY7CBK'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
