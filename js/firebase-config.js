// firebase-config.js

// Jeet365 Firebase Config (Realtime DB)
const firebaseConfig = {
  apiKey: "AIzaSyBo47HJZAcS8nCEyntKPAJLeJg_zUTo1nw",
  authDomain: "jeet365-e0749.firebaseapp.com",
  databaseURL: "https://jeet365-e0749-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "jeet365-e0749",
  storageBucket: "jeet365-e0749.appspot.com",
  messagingSenderId: "856388622116",
  appId: "1:856388622116:web:f2313da855969554e405b1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Optional: Auth and Database references
const auth = firebase.auth();
const db = firebase.database();
