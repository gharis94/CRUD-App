import {initializeApp} from "firebase/app";
import {getFirestore,collection,addDoc,getDocs,deleteDoc,doc, getDoc} from 'firebase/firestore';
import {getDownloadURL, getStorage, ref, uploadBytesResumable,deleteObject} from 'firebase/storage';


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

//uploading file to storsge and gettting back the url from storage
export const UploadFile = async(file,setFn,progressFn)=>{
    const storageRef = ref(storage,`user_images/${file.name}`)
    const uploadTask = uploadBytesResumable(storageRef,file)

    const unsubcribe=uploadTask.on('state_changed',(snapshot)=>{
        const progress = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
        console.log(`Upload Progress ${progress}%`)
        
        switch(snapshot.state){
            case 'paused':
                console.log('paused')
                break;
            case 'running':
                console.log('upload is running')
                break;
            default:
                break
        }
        
    },(error)=>{
        console.log(error)
    },async()=>{
        console.log('s')
        const rsp =await getDownloadURL(uploadTask.snapshot.ref);
        console.log(rsp)
        setFn((prev)=>({...prev,imageUrl:rsp})) 
        
        progressFn(100)
        return unsubcribe
    })
    
}

//uploading data to firestore

export const createUser = async(data)=>{
    const collectionRef = collection(db,'users');
    //const docRef =await getDoc(collectionRef)
    //console.log(docRef.id)
    try{
        const docRef =await addDoc(collectionRef,data)
        console.log('completed:',docRef)
    }catch(error){
        console.log(error)
    }
}


//getting data from firestore

export const getData = async()=>{
    const collectionRef = collection(db,'users')
    const querySnapShot = await getDocs(collectionRef);
    const dataArr=querySnapShot.docs.reduce((acc,doc)=>{
        acc=[...acc,{...doc.data(),id:doc.id}]
        return acc;
    },[])
    console.log(dataArr)
    return dataArr

}

//delete data 

export const deleteData =async (id,path)=>{
    try{
        await deleteDoc(doc(db, 'users', id))
        console.log('deleted')
        await deleteObject(ref(storage,`user_images/${path}`))
        console.log('image deleted')

        return
    }catch(error){
        console.log(error)
    }
    
}