
import firebase from 'firebase/app'
import "firebase/database"


const firebaseConfig = {
  apiKey: "AIzaSyAjHMenBx9vsvcYLwT2R06VDYQ-mQS62_c",
  authDomain: "react-blog-app-f1bb0.firebaseapp.com",
  databaseURL: "https://react-blog-app-f1bb0-default-rtdb.firebaseio.com",
  projectId: "react-blog-app-f1bb0",
  storageBucket: "react-blog-app-f1bb0.appspot.com",
  messagingSenderId: "949438235088",
  appId: "1:949438235088:web:ece9b409f58913866579d5"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig)

const database = firebase.database()


export default database