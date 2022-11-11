import {initializeApp} from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getStorage, ref, uploadBytes} from 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyAATRHxPWO-QEGpEyh1NxnL9s5l--Lo9B8",
    authDomain: "crud-app-d4c1b.firebaseapp.com",
    projectId: "crud-app-d4c1b",
    storageBucket: "crud-app-d4c1b.appspot.com",
    messagingSenderId: "119775766213",
    appId: "1:119775766213:web:30040ae12315442ce8f2ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);

export const UploadFile = async(file)=>{
    const storageRef = ref(storage,file.name)
    const uploadTask = uploadBytes(storageRef,file)

}