import firebase from 'firebase';

const firebaseConfig = {

  apiKey: "AIzaSyBChy_uNfkVsflrmab-snQpvcrZeKYmT6w",

  authDomain: "student-e1245.firebaseapp.com",

  projectId: "student-e1245",

  storageBucket: "student-e1245.appspot.com",

  messagingSenderId: "36209256439",

  appId: "1:36209256439:web:03d5e998836be433b370f2",

  measurementId: "G-3MXCB3QDF7"

};


const fire=firebase.initializeApp(firebaseConfig, 'Student');

// import firebase from 'firebase';

const firebaseConfigT = {

  apiKey: "AIzaSyCr43PHtygw-HRrPSFiIMZr2fEfYv7DAFA",

  authDomain: "teacher-43ce5.firebaseapp.com",

  databaseURL: "https://teacher-43ce5-default-rtdb.asia-southeast1.firebasedatabase.app",

  projectId: "teacher-43ce5",

  storageBucket: "teacher-43ce5.appspot.com",

  messagingSenderId: "842240861028",

  appId: "1:842240861028:web:66f3d820774a3dbdc7d071",

  measurementId: "G-ZKB5F64BCP"

}

const fireT=firebase.initializeApp(firebaseConfigT, 'Teacher');

export const FireT= fireT;


export const Fire= fire;
