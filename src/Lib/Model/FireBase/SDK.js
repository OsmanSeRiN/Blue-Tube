// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuZIyI2Px9FkuUDF9za5q9Eq4La4_iodk",
  authDomain: "bluetube-c8b76.firebaseapp.com",
  projectId: "bluetube-c8b76",
  storageBucket: "bluetube-c8b76.appspot.com",
  messagingSenderId: "426571917556",
  appId: "1:426571917556:web:c15d86a23fc4dee1d116a1",
  measurementId: "G-6Y0VSZPSZ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);