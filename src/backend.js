import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyBoulLM5wxIr5Gt6oPqL_LX4jPoFYEkQYk",
  authDomain: "moodboard-io.firebaseapp.com",
  databaseURL: "https://moodboard-io.firebaseio.com",
  projectId: "moodboard-io",
  storageBucket: "moodboard-io.appspot.com",
  messagingSenderId: "981101380487"
};

const backend = firebase.initializeApp(config);
export default backend;
