import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyC-1CHjhfNQGdQnWvpHWNugaa0sGWl4_ow",
    authDomain: "project-67-b09e6.firebaseapp.com",
    projectId: "project-67-b09e6",
    storageBucket: "project-67-b09e6.appspot.com",
    messagingSenderId: "100555859540",
    appId: "1:100555859540:web:f624ae51158c04dbedafc1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();