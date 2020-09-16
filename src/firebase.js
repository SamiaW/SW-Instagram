import firebase from "firebase";

 const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBJ3NIaq-ySB02UeGrLQNpvQcFsYtvTGbg",
    authDomain: "instagram-clone-react-42314.firebaseapp.com",
    databaseURL: "https://instagram-clone-react-42314.firebaseio.com",
    projectId: "instagram-clone-react-42314",
    storageBucket: "instagram-clone-react-42314.appspot.com",
    messagingSenderId: "226391782225",
    appId: "1:226391782225:web:8ac4ffb9d60a56fc055970",
    measurementId: "G-QGRFXXDZD6"
 });
 
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db, auth, storage};

//   export default debugger;