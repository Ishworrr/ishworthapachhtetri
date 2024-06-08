// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyAwlzXZChaa8EdLniyhPZkfNtRbTawIhXs',
    authDomain: 'ishwor-2.firebaseapp.com',
    projectId: 'ishwor-2',
    storageBucket: 'ishwor-2.appspot.com',
    messagingSenderId: '1093348781625',
    appId: '1:1093348781625:web:19c893cb0c3c24498027e8',
    measurementId: 'G-T6DX05TYB5',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
export const db = getFirestore(app)
