import firebase  from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config ={
    apiKey: "AIzaSyCICLEZaSMFqNLwS54emSeBUpLqUZp3UxY",
    authDomain: "crwn-clothing-1101.firebaseapp.com",
    projectId: "crwn-clothing-1101",
    storageBucket: "crwn-clothing-1101.appspot.com",
    messagingSenderId: "317840142647",
    appId: "1:317840142647:web:057e4e8336561f10b9eab2",
    measurementId: "G-42F839E3MD"
    };

    firebase.initializeApp(config);

    export const auth = firebase.auth();
    export const firestore = firebase.firestore();
    
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });
    export const signInWithGoogle = () => auth.signInWithPopup(provider);
    
    export default firebase;