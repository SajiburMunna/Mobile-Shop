import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAtduAOELAkuC4Ty-CP7KfmnaEbqd1wKb4",
  authDomain: "mobileshop-44a3f.firebaseapp.com",
  projectId: "mobileshop-44a3f",
  storageBucket: "mobileshop-44a3f.appspot.com",
  messagingSenderId: "39406609728",
  appId: "1:39406609728:web:764879f73346d5f37f06a5",
});

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();
export { db, auth, storage };
