import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
        apiKey: "AIzaSyCXvg7oMObmithYZjOq_JeV38FqVMxZHt0",
        authDomain: "team-voting-c67.firebaseapp.com",
        databaseURL: "https://team-voting-c67-default-rtdb.firebaseio.com",
        projectId: "team-voting-c67",
        storageBucket: "team-voting-c67.appspot.com",
        messagingSenderId: "555419792730",
        appId: "1:555419792730:web:1669e4c40fc7488e386f63"
      };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();